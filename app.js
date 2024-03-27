const express = require("express");
const collection = require("./mongo");
const cors = require("cors");
const anouncement = require("./mongo2");
const tutor = require("./mongo3");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


app.get("/", cors(), (req,res)=>{

})
app.post("/", async (req,res)=>{
    const {email,pass} = req.body;
    try {
        const check = await collection.findOne({email:email, password:pass});
        console.log(check._id.toString());
        if(check){
                return res.json({
                    message: "user exist",
                    id: check._id.toString(),
                })
        }
        else {
            return res.json("not exist")
        }
    } catch(e) {
        return res.json("notexist-catch")
    }
})



app.post("/signup", async (req,res)=>{
    const {firstName,lastName,email,phone,gender,age,password,confirmPassword} = req.body;
    const data = {
        firstName: firstName ,
        lastName: lastName ,
        email: email ,
        phone: phone ,
        gender: gender ,
        age: age ,
        password: password ,
        confirmPassword: confirmPassword,
    }
    try {
        const check = await collection.findOne({email:email});
        if(check){
            return res.json("exist");
        }
        else {
            await collection.insertMany([data]).then(resp => {
                return res.json({
                    message: "user created",
                    resp,
                })
            } );
            // return res.json("not exist");
        }
    } catch(e) {
        console.log(e);
        return res.json("notexist-catch");
    }
})


app.post("/anouncement", async (req,res) => {    
    const {name,anounce} = req.body;
    const data = {
        firstName: name,
        description: anounce,
    }
    try{
        await anouncement.insertMany([data]).then(resp => {
            return res.json("saved")
        })
    } catch(e) {
        console.log("inside catch");
    }
})

app.get("/getUserData", async (req, res) => {
    try {
        const userData = await anouncement.find({});
        res.send({data: userData});
    } catch(e) {
        console.log("fetchData error");
    }
})

app.post("/tutor", async (req,res) => {
    const {name,phone,skill,desc} = req.body;
    const data = {
        name: name,
        phone: phone,
        skill: skill,
        description: desc,
    }
    try {
        await tutor.insertMany([data]).then(resp => {
            return res.json("saved")
        })
    } catch(e) {
        console.log("tutor catch error");
    }
})
app.get("/tutor", async (req,res) => {
    try {
        const userData = await tutor.find({});
        return res.send({data: userData});
    } catch(e) {
        console.log(e);
    }
})


app.post("/user", async (req,res)=>{
    const {id} = req.body;
    try {
        const user = await collection.findById(id);
        return res.status(200).json({user});
    }
    catch(e) {
        console.log(e)
    }
})
app.post("/user1", async (req,res)=>{
    const {id , user} = req.body;
    try {
        await collection.findOneAndUpdate({_id:id}, user);
        return res.json({
            message: "user created"
        })
    } catch(e) {
        console.log(e);
        return res.json("notexist-catch");
    }
})


app.listen(8000,()=>{
    console.log("port connected");
})


