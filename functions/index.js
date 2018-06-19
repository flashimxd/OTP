const functions = require('firebase-functions');
const createUser = require('./create_user');
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccount.json')
const requestOneTimePassword = require('./request_one_time_password');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://fir-otp-80c8d.firebaseio.com"
})

exports.createUser = functions.https.onRequest(createUser);
exports.requestOneTimePassword = functions.https.onRequest(requestOneTimePassword);