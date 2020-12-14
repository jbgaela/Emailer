const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.API_KEY);

const sendEmail = async (options) => {
  const msg = {
    to: options.toEmail,
    bcc: options.bcc,
    from: process.env.EMAIL_FROM,
    subject: options.subject,
    text: options.text,
  };

  try {
    const info = await sgMail.send(msg);
    console.log(info);
  } catch (error) {
    console.log(error);
  }
};

module.exports = sendEmail;
