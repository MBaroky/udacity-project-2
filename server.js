// Setup empty JS object to act as endpoint for all routes
let projectData = {temp: '', data: '',userRes: ''};

// Require Express to run server and routes
const express = require('express'); // express
const bodyParser = require('body-parser'); // body-parser
const cors = require('cors');


// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = '1803';
const listen = ()=>{
    console.log(`server up and running at: ${port}`);
}
const server = app.listen(port,listen);

// POST request
app.post('/addData', (req,res)=>{
    // decontructing the body
    const {temp, date, userRes} = req.body;
    let newData = {
        temp,
        date,
        userRes
    };
    // pusching newData to the endpoint
    projectData = newData;
    // ending request with status 200
    res.status(200).end();
});

// GET request
app.get('/getData', (req, res)=>{
    res.send(projectData);
    console.log(projectData);
});