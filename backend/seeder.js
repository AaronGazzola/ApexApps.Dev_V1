import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import Booking from './models/bookingModel.js';
import Client from './models/clientModel.js';
import Blog from './models/blogModel.js';
import { bookings } from './data/bookings.js';
import blogs from './data/blogs.js';
import connectDB from './config/db.js';

// Load env vars
dotenv.config();

// Connect to DB
connectDB();

const importData = async () => {
	try {
		await Booking.deleteMany();
		await Client.deleteMany();
		await Blog.deleteMany();
		await Booking.insertMany(bookings);
		await Blog.insertMany(blogs);

		console.log('Data Imported!'.green.inverse);
		process.exit();
	} catch (error) {
		console.error(`${error}`.red.inverse);
		process.exit(1);
	}
};

const destroyData = async () => {
	try {
		await Booking.deleteMany();
		await Client.deleteMany();
		await Blog.deleteMany();

		console.log('Data Destroyed!'.green.inverse);
		process.exit();
	} catch (error) {
		console.error(`${error}`.red.inverse);
		process.exit(1);
	}
};

if (process.argv[2] === '-d') {
	destroyData();
} else {
	importData();
}
