// const Role = require('../models/role-model');
var nodemailer = require("nodemailer");

exports.sendMail = (req, res, next) => {
  console.log("email:", req.body.email)

  // Use Smtp Protocol to send Email
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'shahzeb61518',
      pass: '**********'
    }
  });

  let mailOptions = {
    from: req.body.email,
    to: "shahzeb5518151@gmail.com",
    subject: "Reset Password",
    text: "<" + req.body.email + ">" + " Please reset my password as i forgot my Password signin to WorkFlo",
  };

  transporter.sendMail(mailOptions).then(res => {
    if (res) {
      if (res.accepted.lenght > 0) {
        return "Email sent Successuflly!";
      } else {
        return "Failed!";
      }
    }
  }).catch(err => {
    console.log(err)
    return "Failed!"
  });


}
