const nodemailer = require('nodemailer')

 const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "memory.shoot22@gmail.com", // generated ethereal user
      pass: "zqjybhovhxghjwkn", // generated ethereal password
    },
  });

  transporter.verify().then(() => {
      console.log('Ready to send email')
  })

module.exports = {
  transporter
}