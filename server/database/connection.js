const mongoose = require('mongoose');
const dburl = process.env.DATABASE;

    mongoose.connect(dburl).then(()=>{
        console.log("database connected successfully");
    }).catch(err=>console.log(err.message));