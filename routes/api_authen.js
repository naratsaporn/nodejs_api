const express = require("express");
const router = express.Router()
const db = require('../models/db');

const middleware = (req, res, next) => {
    /* ตรวจสอบว่า authorization คือ Boy หรือไม่*/
       if(req.headers.token === "token101")
          next(); //อนุญาตให้ไปฟังก์ชันถัดไป
       else
          res.send("ไม่อนุญาตให้เข้าถึงข้อมูล")
    }; 

router.post("/login", middleware , async (req , res) => {
  
    try{
 
        const{username , password} = req.body
        let results = await db.query("SELECT * FROM member where username = ? AND password = ?" , [username, password] ,(error , results , fields)=>{
           
            if(error) res.send({error:true , message:error})
            if(results.length >0){
                // res.send({ error:false,data:results })
                res.json( {massage : "พบผู้ใช้งาน" , data : results , status : 1001 } );
            }else{
                res.json( {massage : "ไม่พบผู้ใช้งาน"  , data : [] , status : 1002 } );
            }
               
        } );
        
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
})

router.post("/register" ,(req , res) => {

    // console.log(req.body.username)
    const{username , password} = req.body
    res.json({ result:"register" , username , password})
})

module.exports = router;