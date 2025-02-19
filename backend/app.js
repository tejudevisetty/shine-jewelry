require('dotenv').config();
const mongoose = require('mongoose');



var createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const getBanglesRouter = require('./routes/banglesapi'); // Import the bangles route
const loginDetails = require('./routes/loginapi');
const getRingsRouter = require('./routes/ringsapi');
const getEarringsRouter = require('./routes/earringsapi');
const getChainsRouter = require('./routes/chainsapi');
const registerNewUser = require('./routes/registerUserDetailsapi');
const contactDetails = require('./routes/contactDetailsapi');


const app = express();

// Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'frontend', 'public')));

//cors issue

const cors = require('cors');
app.use(cors());

// Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/category/get/bangles', getBanglesRouter); // Mount the bangles route
app.use('/login/credentials', loginDetails);
app.use('/api/category/get/rings', getRingsRouter);
app.use('/api/category/get/earrings', getEarringsRouter);
app.use('/api/category/get/chains', getChainsRouter);
app.use('/register/newUser', registerNewUser);
app.use('/get/contactInfo', contactDetails);

app.get("/jewelry/:type", (req, res) => {
    const type = req.params.type;  // Get jewelry type from URL
    const filePath = path.join(__dirname,'..', 'frontend', "public", "templates", `${type}.htm`);
    
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(404).send("Page not found");
        }
    }); 
});



app.get("/get/details/:id", (req, res) => {
    const type = req.params.id;  // Get jewelry type from URL

    console.log("got jrewelry id is", type);
    const filePath = path.join(__dirname,'..', 'frontend', "public", "templates", "singleJewelryPage.htm");
    
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(404).send("Page not found");
        }
    });
});

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
    const createError = require('http-errors');
    next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send({ error: err.message });
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully");

    // Start the server only after DB connection
    const PORT = process.env.PORT || 3500;
    app.listen(PORT, () => {
      console.log(` Server running on http://localhost:${PORT}`);
    });

  })
  .catch(err => {
    console.error(" MongoDB Connection Error:", err);
    process.exit(1); // Stop the app if DB connection fails
  });



module.exports = app;
