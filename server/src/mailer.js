const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
});

const htmlEmail = text => `
    <h2>Password Reset for HypeGear</h2>
    <p>${text}</p>
    <p>😘, Häni</p>
`;

exports.transport = transport;
exports.htmlEmail = htmlEmail;
