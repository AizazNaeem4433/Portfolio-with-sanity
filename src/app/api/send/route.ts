import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { firstName, lastName, phoneNumber, email, message } = await req.json();

  // Create the transporter with Gmail credentials
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail
      pass: process.env.EMAIL_PASS, // App password from Gmail
    },
  });

  // Construct the email body with all the details
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Lead from Portfolio ${firstName} ${lastName}`,
    text: `
      You have received a new message from:

      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone Number: ${phoneNumber}

      Message:
      ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Failed to send email", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
