require("dotenv").config();
const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");


const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: "GET, POST, PUT, UPDATE, DELETE"
}))



mongoose.connect("mongodb+srv://paschal-droid:necherempaschal@swipe-up-app.pt3im.mongodb.net/swipe-upDB?retryWrites=true&w=majority")
.then(()=>{
    console.log("SwipeupDB has connected successfully");
}).catch((err)=>{
    console.log(err);
})

app.use("/", )

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Port is currently working at http://localhost:5000");
})