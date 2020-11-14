const express = require("express");
const router = express.Router()
const db = require('../models/db');
router.post("/product"  , async (req , res , next ) => {
    res.json({ result:"product"})
})


module.exports = router;