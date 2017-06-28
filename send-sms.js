// Twilio Credentials 
var accountSid = 'ACd2b2d733a77055bc0ec5c76a6afc6cc8'; 
var authToken = '2e7ee3099136ff465de7c4e8009ef0a2'; 
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 
 
client.messages.create({ 
    to: "+14159199803", 
    from: "+17377779819", 
    body: "Hello Monkey!", 
}, function(err, message) { 
    console.log(message.sid); 
});