import nodemailer from "nodemailer";

console.log(process.env.EMAIL_HOST);

export async function POST(req) {
	try {
		// Parse JSON body
		const { name, email, message } = await req.json();

		// Check if all required fields are present
		if (!name || !email || !message) {
			return new Response(
				JSON.stringify({ message: "Missing required fields" }),
				{ status: 400 }
			);
		}

		// Create a transporter using your SMTP credentials
		const transporter = nodemailer.createTransport({
			host: process.env.EMAIL_HOST, // Example: 'mail.paulmcjannet.com'
			port: 465, // Example: 465
			secure: true, // SSL
			auth: {
				user: process.env.EMAIL_USER, // Example: 'paul@bottle.ca'
				pass: process.env.EMAIL_PASS
			}
		});

		// Send the email to your own email address
		const mailOptions = {
			from: `"Website Contact" <${email}>`, // From user's email
			to: process.env.EMAIL_USER, // Your email address
			subject: `Message from ${name}`, // Subject line
			text: `You received a new message from ${name} (${email}):\n\n${message}` // Message content
		};

		await transporter.sendMail(mailOptions);

		// Send success response
		return new Response(
			JSON.stringify({ message: "Email sent successfully." }),
			{ status: 200 }
		);
	} catch (error) {
		console.error("Error sending email:", error);
		return new Response(
			JSON.stringify({ message: "Internal Server Error" }),
			{ status: 500 }
		);
	}
}
