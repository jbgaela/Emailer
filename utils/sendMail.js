const sgMail = require('@sendgrid/mail');
const fs = require('fs');

sgMail.setApiKey(process.env.API_KEY);

pathToAttachment = './assets/attachments/pdf-test.pdf';
attachment = fs.readFileSync(pathToAttachment).toString('base64');

const sendEmail = async (options) => {
  const msg = {
    to: options.toEmail,
    cc: options.cc,
    from: process.env.EMAIL_FROM,
    subject: options.subject,
    text: options.text,
    attachments: [
      {
        content: attachment,
        filename: 'pdf-test.pdf',
        type: 'application/pdf',
        disposition: 'attachment',
      },
    ],
  };

  try {
    const info = await sgMail.send(msg);
  } catch (error) {
    console.log(error);
  }
};

module.exports = sendEmail;
