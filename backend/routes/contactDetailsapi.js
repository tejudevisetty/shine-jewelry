 var express = require('express');
 var router = express.Router();
 const {MongoClient} = require("mongodb");
 const dbUrl = 'mongodb+srv://tejaswiniDevisetty:tejuDevisetty@tejaswinidevisetty.eknkw.mongodb.net/';
 const client = new MongoClient(dbUrl);

 /* GET home page. */
 router.post('/', (req, res) => {

    const contactInformation = req.body;

    mongodbConnection(contactInformation).then(response => {
        var data = {};
    data.msg = "succussfully inserted contact details in db";
    res.send(data);
        
    }).catch(error => {
        console.log(error);
    })

    
 });

 async function mongodbConnection(contactInformation) {
    // Use connect method to connect to the server
    await client.connect();
    const db = client.db("shine-jewelry");
    const collection = db.collection('contactDetailss');
  
    // the following code examples can be pasted here...
  
    return collection.insertOne(contactInformation);
  }
  
 module.exports = router;
 