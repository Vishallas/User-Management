const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080;

// to log the request types
app.use(morgan("tiny"));

// parse request to body-parser
app.use(bodyParser.urlencoded({extended:true})); // {extended:true} to enable the obj and array data transfer through encoded manner

// setting view engine to ejs
app.set("view engine", "ejs");

// setting the assets path
app.use("/css",express.static(path.resolve(__dirname,"assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js",express.static(path.resolve(__dirname, "assets/js")));

// loading routes
app.use('/', require('./server/routes/router'));

app.listen(PORT, ()=>{console.log(`Server is running on http://localhost:${PORT}`)})