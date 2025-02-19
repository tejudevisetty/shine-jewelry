var express = require('express');
var router = express.Router();

const {MongoClient} = require("mongodb");
const dbUrl = 'mongodb+srv://tejaswiniDevisetty:tejuDevisetty@tejaswinidevisetty.eknkw.mongodb.net/';
const client = new MongoClient(dbUrl);

/* GET home page. */
router.post('/', (req, res) => {
const user = req.body;

    mongodbConnection(user).then((response) => {

        console.log(response);

        if(response){
            res.send({ msg: "success" });
        }
        else{
            res.send({ msg: "fail" });
        }
        
    }).catch(error => {
        console.log(error);
    })
});

async function mongodbConnection(user) {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db("shine-jewelry");
    const collection = db.collection('userDetails');
  
    // the following code examples can be pasted here...
  
    return collection.findOne({email:user.email , password : user.password});
  }
  

module.exports = router;
