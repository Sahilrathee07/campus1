const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/campusHub")
.then(()=>{
    console.log("mongo2 connected");
}).catch(()=>{
    console.log("failed");
})


const newSchema2 = new mongoose.Schema({
    firstName : {
        type:String,
        required:true,
    },
    description : {
        type:String,
        required:true,
    },
})


const anouncement = mongoose.model("Anouncement", newSchema2);

module.exports = anouncement;