const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/campusHub")
.then(()=>{
    console.log("mongobd connected");
}).catch(()=>{
    console.log("failed");
})


const newSchema = new mongoose.Schema({
    firstName : {
        type:String,
        required:true,
    },
    lastName : {
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone : {
        type:Number,
        required:true,
    },
    gender : {
        type:String,
        required:true,
    },
    age : {
        type:Number,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
})


const collection = mongoose.model("collections", newSchema);

module.exports = collection;