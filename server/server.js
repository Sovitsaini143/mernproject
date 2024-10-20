

const express = require("express");
const apps = express();
const cors = require('cors');
require('dotenv').config();
const myroute = require("./routes/myroute");
require('./database/connection');  
const myport = process.env.PORT || 8700 
 



apps.use(express.json());
apps.use(cors());
apps.use(myroute);



apps.listen(myport,()=>{
    console.log(`server is running at port no: ${myport}`);

});