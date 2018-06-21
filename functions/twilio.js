const twilio = require('twilio');

const accountSid = 'Sid';
const authToken = 'AuthToken';

module.exports = new twilio.Twilio(accountSid, authToken);
