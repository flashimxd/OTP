const admin = require('firebase-admin');

module.exports = function(req, res) {
    
    //verify the user provied a phone
    if(!req.body.phone){
        return res.status(422).send({error: 'Bad Input'})
    }

    //format the phone number to remove dashes and parens
    const phone = String(req.body.phone).replace(/[^\d]/g, "");

    //Create a new user using its phone as a Unique ID
    admin.auth().createUser({uid: phone})
        .then(user => res.send(user))
        .catch(err => res.status(422).send({error: err}))
}