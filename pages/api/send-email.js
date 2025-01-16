const nodemailer = require("nodemailer");

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
	host: process.env.EMAIL_HOST,
	port: 465,
	secure: true,
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS
	}
});

const handler = async (req, res) => {
	const { name, email, message } = req.body;

	// Only allow POST requests
	if (req.method !== "POST") {
		return res.status(405).json({ message: "Method Not Allowed" });
	}

	// Basic validation (already checked for validation in ContactForm, but doing here as well for extra certainty)
	if (!name || !email || !message) {
		return res.status(400).json({ message: "Missing required fields" });
	}

	try {
		const mailOptions = {
			from: email,
			// to: process.env.EMAIL_USER,
			to: "gator username",
			subject: `Message from ${name}`,
			text: message
		};

		// Send the email
		await transporter.sendMail(mailOptions);

		// Respond to the client
		res.status(200).json({ message: "Email sent successfully!" });

		return sendEmail;
	} catch (error) {
		res.status(500).json({ message: "Error sending email", error });
	}
};

export default handler;

// export default function handler(req, res) {
// 	// Example response
// 	res.status(200).json({ message: "Email sent successfully" });
// }
