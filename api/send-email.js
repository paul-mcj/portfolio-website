import { nodemailer } from "nodemailer";
// const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
	service: "mail.paulmcjannet.com ",
	port: 465,
	secure: true,
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS
	}
});

export default async function handler(req, res) {
	// Only allow POST requests
	if (req.method !== "POST") {
		return res.status(405).json({ message: "Method Not Allowed" });
	}

	const { name, email, message } = req.body;

	// Basic validation
	if (!name || !email || !message) {
		return res.status(400).json({ message: "Missing required fields" });
	}

	try {
		const mailOptions = {
			from: email,
			to: process.env.TARGET_EMAIL, // The email where the form will be sent to
			subject: `Message from ${name}`,
			text: message
		};

		// Send the email
		await transporter.sendMail(mailOptions);

		// Respond to the client
		res.status(200).json({ message: "Email sent successfully!" });
	} catch (error) {
		console.error("Error sending email:", error);
		res.status(500).json({ message: "Error sending email" });
	}
}
