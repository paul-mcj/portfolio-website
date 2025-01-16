// explicitly set runtime for serverless function
export const runtime = "nodejs";

// nodemailer
import nodemailer from "nodemailer";

export const POST = async (req) => {
	try {
		// parse JSON body
		const { name, email, message } = await req.json();

		// Check if all required fields are present (extra validation is on the front-end as well)
		if (!name || !email || !message) {
			return new Response({ status: 400 });
		}

		// Create a transporter using SMTP credentials via .env.local variables
		const transporter = nodemailer.createTransport({
			host: process.env.EMAIL_HOST,
			port: 465,
			secure: true,
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS
			}
		});

		// craft email
		const mailOptions = {
			from: email,
			to: process.env.EMAIL_USER,
			subject: `Message from ${name}`,
			text: message
		};

		// Send the email to my user domain
		await transporter.sendMail(mailOptions);

		// send success response to client
		return new Response({ status: 200 });
	} catch (error) {
		// respond with server error
		return new Response({ status: 500, error });
	}
};
