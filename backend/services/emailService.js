const  nodemailer = require('nodemailer')

let transporter;

const sendEmail = async (email,subject,text) => {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_PORT ,
    auth: {
      user: process.env.BREVO_USER,
      pass: process.env.BREVO_PASS
    }
  });

  await transporter.sendMail({
    from: `"Lost&Foundr" <${process.env.BREVO_EMAIL}>`,
    to: email,
    subject,
    text
  })
}

module.exports = sendEmail