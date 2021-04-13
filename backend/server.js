import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import colors from 'colors';
import morgan from 'morgan';
import fileupload from 'express-fileupload';
import mongoSanitize from 'express-mongo-sanitize';
import helmet from 'helmet';
import xss from 'xss-clean';
import rateLimit from 'express-rate-limit';
import hpp from 'hpp';
import cors from 'cors';
import connectDB from './config/db.js';
import schedule from 'node-schedule';
import moment from 'moment';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import Booking from './models/bookingModel.js';
import { datesToPopulate, times } from './data/bookings.js';

import bookingRoutes from './routes/bookingRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

// Load env variables from .env file in root
dotenv.config();

// Connect to database
connectDB();

const app = express();

// JSON body parser
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

// File uploading
app.use(fileupload());

// Sanitize data
app.use(mongoSanitize());

// Set security headers
app.use(helmet());

// Prevent XSS attacks
app.use(xss());

// Rate limiting
const limiter = rateLimit({
	windowMs: 10 * 60 * 1000, // 10 mins
	max: 1000
});
app.use(limiter);

// Prevent http param pollution
app.use(hpp());

// Enable CORS
app.use(cors());
app.use((req, res, next) => {
	res.header(
		'Content-Security-Policy',
		"script-src 'self' https://www.youtube.com"
	);
	next();
});

// Set uploads and images folders as static
const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.use('/images', express.static(path.join(__dirname, '/images')));

//Mount Routers
app.use('/api/v1/bookings', bookingRoutes);
app.use('/api/v1/blogs', blogRoutes);
app.use('/api/v1/admin', adminRoutes);

// Serve react app from frontend folder if in production
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '/frontend/build')));

	app.get('*', (req, res) =>
		res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
	);
} else {
	app.get('/', (req, res) => {
		res.send('API is running...');
	});
}

// Handle errors
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
	)
);

// schedule function everyday at midnight
// delete past bookings that are not booked or cancelled
// insert another day of bookings
schedule.scheduleJob('0 0 * * *', async () => {
	await Booking.deleteMany({
		isBooked: false,
		isCancelled: false,
		timestamp: {
			$lte: moment().unix()
		}
	});
	// convert booking times to moment instances for tomorrow's date
	const momentTimes = times.map(time =>
		moment()
			.add(datesToPopulate + 1, 'd')
			.hour(time.split(':')[0])
			.minute(time.split(':')[1])
	);

	// populate array of bookings from momentTimes
	let bookings = [];
	momentTimes.forEach(time => {
		bookings.push({ timestamp: time.unix() });
	});

	await Booking.insertMany(bookings);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
	console.log(`Error: ${err.message}`.red);
	// Close server & exit process
	process.exit(1);
});
