const mongoose = require('mongoose');

const mynew = new mongoose.Schema({

    fullname:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    dob:{
        type:String
    },
    address:{
        type:String
    },
    pass:{
        type:String
    }
    

});

const myschimatype = new mongoose.model("mern1",mynew);
module.exports = myschimatype



