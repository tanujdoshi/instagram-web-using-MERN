const express = require('express')
const app=express();
const port = 5000;
const mongoose = require("mongoose");
const {MONGOURI} = require("./keys");

mongoose.connect(MONGOURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,

})


mongoose.connection.on('connected',()=>{
    console.log("Mongo connected!!")
})

mongoose.connection.on('error',(err)=>{
    console.log("Error:",err);
})


require("./models/user")

mongoose.model("User");

app.use(express.json())
app.use(require("./routes/auth"))


app.listen(port,()=>{
    console.log("Server :Connected");
})