const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/campusHub")
.then(()=>{
    console.log("mongo3 connected");
}).catch(()=>{
    console.log("failed");
})


const newSchema3 = new mongoose.Schema({
    name : {
        type:String,
        required:true,
    },
    phone: {
        type:String,
        required:true,
    },
    skill: {
        type:String,
        required:true,   
    },
    description: {
        type:String,
        required:true,
    },
})


const tutor = mongoose.model("Tutor", newSchema3);

module.exports = tutor;