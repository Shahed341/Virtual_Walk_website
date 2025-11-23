import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NOTIFY_EMAIL,
    pass: process.env.NOTIFY_EMAIL_PASSWORD,
  },
});

export async function sendBookingEmail({ name, email, address, sqFeet, date }) {
  const html = `
    <h2>New Booking Received</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Address:</strong> ${address}</p>
    <p><strong>Square Feet:</strong> ${sqFeet}</p>
    <p><strong>Preferred Date:</strong> ${date}</p>
    <hr/>
    <p>This booking was submitted on your VirtualWalk3D website.</p>
  `;

  const mailOptions = {
    from: `"VirtualWalk3D" <${process.env.NOTIFY_EMAIL}>`,
    to: process.env.NOTIFY_EMAIL,
    subject: "📩 New Booking Request",
    html,
  };

  await transporter.sendMail(mailOptions);
}
