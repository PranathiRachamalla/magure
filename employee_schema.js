const 
mongoose = require("mongoose");

const employee = new mongoose.Schema({

    name : {
        type : String,
        unique : true,
        required : true
    },

    email:{
        type : String,
        required : true
    },

    age : {
        type : Number,
        required : true
    },

    gender : {
        type : String,
        required : true 
    },

    contact : {
        type : Number,
        required : true
    }
});

const emp = mongoose.model("Employee_information" , employee);
//console.log("created collection");

module.exports = {
    emp
}