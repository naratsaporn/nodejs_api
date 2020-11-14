const express = require("express");
const app = express()
const bodyParsr = require('body-parser');
const cors = require("cors");

app.use(bodyParsr.urlencoded({extended:false})); //ทำให้รับ json จาก body ได้
// app.use(express.static(__dirname+"/uploaded"));
// const jwt = require("jwt-simple");
// const passport = require("passport");
// const ExtractJwt = require("passport-jwt").ExtractJwt;
// const JwtStrategy = require("passport-jwt").Strategy;
app.use(cors())

app.use("/api/v2/authen/" , require("./routes/api_authen"))
app.use("/api/v2/stock/" ,  require("./routes/api_stock"))

app.listen(8085 , ()=>{
    console.log("Backend is running..")
})

// app.listen(8085 , ()=>{
//     console.log("Backend is running..")
// })