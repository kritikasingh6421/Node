const express = require('express');
const cors = require('cors');

const app = express();

var corsOprions= {
    origin : "http://localhost:3000"
};

app.use(cors(corsOprions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// routings
const router = require('./routes/post.route');
app.use('/api/v1',router);

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, (error) => {
    if(!error){
        console.log(`Server is running on http://localhost:${PORT}.`);
    }
    else{
        console.log("Error occurred, server can't start", error)
    }
});