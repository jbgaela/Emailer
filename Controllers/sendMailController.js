const asyncHandler = require('../middleware/async');

const sendEmail = require('../utils/sendMail');

exports.sendEmail = asyncHandler(async (req, res, next) => {
  const params = req.body;
  try {
    await sendEmail({
      toEmail: params.toEmail,
      subject: params.subject,
      text: params.text,
      attachments: [
        {
          content: attachment,
          filename: 'attachment.pdf',
          type: 'application/pdf',
          disposition: 'attachment',
        },
      ],
    });

    res.status(200).json({ success: true, data: 'Email Successfully Sent!' });
  } catch (error) {
    console.log(error);
  }
});
