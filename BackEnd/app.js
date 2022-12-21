const express = require("express");
const app = express();
require('dotenv/config');
const bodyParser = require("body-parser"); // Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
const morgan = require("morgan");   // for logging requests to the console (express4) 
const mongoose  = require('mongoose'); 
const cors  = require('cors');  // for cross origin resource sharing 


mongoose.set('strictQuery', true); // for strict query  , for clear DeprecationWarning mongodb

const api = process.env.API_URL; // http://localhost:3000/api/

app.use(cors()); 
app.options('*',cors()); // for preflight request

// Middleware
app.use(bodyParser.json());  // for parsing application/json
app.use(morgan('tiny'));  // for logging requests to the console (express4)




//Routers 
const postRoutes = require('./routes/Posts');

//api routes  
app.use(`${api}/posts`, postRoutes);


//server
app.listen(3000, ()=>{
    console.log('Server is running on port number: http://localhost:3000 ' )
})

//database
mongoose.connect(process.env.CONNECTION_STRING,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'E-WEEK'
    })

.then(()=>{
   // res.json()
   console.log('E-WEEK DB connected')
}).catch((err)=>{
    console.log(err)
})




// Path: e-school mobile app
//npm i -g  expo-cli
//expo init --npm

// Path: e-school mobile app/backend
//npm init