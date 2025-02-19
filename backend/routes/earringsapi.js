var express = require('express');
var router = express.Router();

const {MongoClient} = require('mongodb');
const dbUrl = 'mongodb+srv://tejaswiniDevisetty:tejuDevisetty@tejaswinidevisetty.eknkw.mongodb.net/';
const client = new MongoClient(dbUrl);

/* GET home page. */
router.get('/', function(req, res, next) {

    mongodbConnection().then((response) => {
       res.send(JSON.stringify(response));
    })
    .catch((error) => {
        console.log(error);
    })

   
});

async function mongodbConnection(){
    await client.connect();
    const db = client.db("shine-jewelry");
    const collection = db.collection("images");
    return collection.find({category: 'earrings'}).toArray();
}


module.exports = router;

