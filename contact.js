var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');


router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

router.post('/send', function(req, res, next){
		var transporter = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			port: 465,
			secure: true, 
			auth: {
				user: 'teamjuan115@gmail.com',
				pass: 'February!!%'
			}
		});

	
		var mailOptions = {
			from: '"Our Code World " <myemail@gmail.com>', 
			to: 'teamjuan115@gmail.com', 
			subject: 'Hello', 
			text: 'Hello world ', 
			html: '<b>Hello world </b><br> This is the first email sent with Nodemailer in Node.js' // html body
		};

	// send mail with defined transport object
		transporter.sendMail(mailOptions, function(error, info){
			if(error){
				return console.log(error);
			} else {
				console.log('Message sent: ' + info.response);
				res.redirect('/contact');
			}

			
		});
	});
		

module.exports = router;
