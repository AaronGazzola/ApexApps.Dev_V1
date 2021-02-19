import nodemailer from 'nodemailer';
// import useHtmlTemplate from './useHtmlTemplate.js';
import moment from 'moment';

const sendEmail = async options => {
	const transporter = nodemailer.createTransport({
		host: process.env.SMTP_HOST,
		port: process.env.SMTP_PORT,
		auth: {
			user: process.env.SMTP_EMAIL,
			pass: process.env.SMTP_PASSWORD
		}
	});

	// const [mailList, subject, html] = useHtmlTemplate(options);

	const message = {
		from: `${process.env.FROM_NAME} <aaron@apexapps.dev>`,
		to: options.to,
		subject: 'Thank you for booking',
		html: `<!DOCTYPE html><html lang="en"><p>Thank you for booking a call to discuss you web app.</p>
    <p>${moment(options.booking.timestamp)
			.minute(0)
			.format(
				'h:mma dddd Do MMMM YYYY'
			)}</p><p><a href='#'>Cancel Booking</a></p></br></html>`
	};

	const info = await transporter.sendMail(message);

	console.log('Message sent: %s', info.messageId);
};

export default sendEmail;

// 	// create reset url
// 	const verifyUrl = `${req.protocol}://${
// 		process.env.NODE_ENV === 'production' ? req.get('host') : 'localhost:3000'
// 	}/verify/${verifyToken}`;

// 	const message = `
// 	<!DOCTYPE html>
// <html lang="en">
// 	<p>Please follow the link below to verify your account</p></br> <a href='${verifyUrl}'>Verify Account</a></html>`;
