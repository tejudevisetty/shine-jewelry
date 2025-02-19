var express = require('express');
var router = express.Router();


const {MongoClient} = require("mongodb");
const dbUrl = 'mongodb+srv://tejaswiniDevisetty:tejuDevisetty@tejaswinidevisetty.eknkw.mongodb.net/';
const client = new MongoClient(dbUrl);

// encrypting password

const bcrypt = require('bcrypt');

/* GET home page. */
router.post('/', function(req, res, next) {

    const newUserDetails = req.body;
    bcrypt.hash(newUserDetails.password ,5 ,(error, hashcode) => {
        console.log("pwd after encrypting is");
        console.log(hashcode);
        newUserDetails.password = hashcode;
    })
    mongodbConnection(newUserDetails).then(response => {


        var msg = {};
        msg.data ="successfully inserted";
        res.send(JSON.stringify(msg));
    })
    
});


async function mongodbConnection(registerUserDetails) {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db("shine-jewelry");
    const collection = db.collection('userDetails');
  
    // the following code examples can be pasted here...
  
    return collection.insertOne(registerUserDetails);
  }

module.exports = router;
