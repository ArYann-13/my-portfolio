const nodemailer =require('nodemailer');
const dotenv =require('dotenv');
// import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

console.log(process.env.EMAIL_USER);  // This should output your Gmail
console.log(process.env.EMAIL_PASS);  // This should output your app password

// Create a Nodemailer transporter using Gmail
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER, // Gmail email from .env
        pass: process.env.GMAIL_PASSWORD, // App password from .env
    },
    tls: {
        rejectUnauthorized: false, // Accept insecure connections (useful in dev)
    },
});

// Send a test email
transporter.sendMail({
    from: process.env.GMAIL_USER, // Your Gmail address
    to: process.env.GMAIL_USER,   // Recipient (it can be your email too)
    subject: 'Test Email from Nodemailer',
    text: 'This is a test email to verify the email setup.',
})
.then((info) => {
    console.log('Email sent successfully:', info.response);
})
.catch((error) => {
    console.log('Error sending email:', error);
});
