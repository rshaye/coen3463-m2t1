var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');


router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact Us' });
});

router.post('/send', function(req, res, next){
	var trasporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'teamjuan115@gmail.com',
			pass: 'February!!%'
		}
	});

	var mailOptions = {
		from: 'name <teamjuan115@gmail.com>',
		to: 'teamjuan115@gmail.com',
		subject: 'inquiries',
		text: 'you have a new message... Name: '+req.body.name+ ' Email: '+req.body.email+ ' Message: '+req.body.Message,
		html: '<p>You got a new message with the following details..</p><ul><li>Name: '+req.body.name+ '</li><li>Email: '+req.body.email+ '</li><li>Message: '+req.body.message+ '</li></ul>'
	};

	trasporter.sendMail(mailOptions, function(error, info){
		if (error){
			console.log(error);
			res.redirect('/');
		}else{
			console.log('Message Sent:'+info.response);
			res.redirect('/');
		}

	});
});
		

module.exports = router;
