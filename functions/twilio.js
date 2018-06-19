const twilio = require('twilio');

const accountSid = 'ACcaa93db418acdda3d4bb16d910934da0';
const authToken = '43b1fd463806f37bf00067f0d8486dde';

module.exports = new twilio.Twilio(accountSid, authToken);