var express = require('express');
var router = express.Router();
const defaultemail = "testdotnet@mailtest.radixweb.net";
const deafultpassword = "deep70"
const host = "mail.mailtest.radixweb.net";
const port = 587
const bvalidate = false;
var nodemailer = require('nodemailer');

async function Emailsend(emailAddress, subject, body) {
    let emailasent = emailAddress;
    var transporter = nodemailer.createTransport({
        host: host,
        port: port,
        debug: false,
        logger: false,
        secure: false, // true for 465, false for other ports
        auth: {
            user: defaultemail, // generated ethereal user
            pass: deafultpassword, // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    var mailOptions = {
        from: '"Radixweb" <testdotnet@mailtest.radixweb.net>', // sender address        
        to: emailasent,
        subject: subject,
        html: body
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            res.json('Email sent: ' + info.response);            //bvalidate = true;
        }
    });
}

module.exports = Emailsend;
