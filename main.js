var apiai = require('apiai');
 
var app = apiai("d896ce74632f4b49be94983f4c000f15");
 
var request = app.textRequest('Electronics', {
    sessionId: 'c46c4b53-5135-497a-94ab-88cac7bd0b58'
});
 
request.on('response', function(response) {
    console.log("response:",response);
});
 
request.on('error', function(error) {
    console.log(error);
});
 
request.end();
