import nodemailer from 'nodemailer';

export const sendEmail = async (email: string, url: string) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'nwos.dev@gmail.com',
      pass: 'magic@dev17',
    },
  });

  const info = await transporter.sendMail({
    from: 'OTP <nwos@dev.com>', // sender address
    to: email, // list of receivers
    subject: 'OTP', // Subject line
    text: 'Hello world?', // plain text body
    html: `<a href="${url}">${url}</a>`, // html body
  });

  console.log('Message sent: %s', info.messageId);
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
};
