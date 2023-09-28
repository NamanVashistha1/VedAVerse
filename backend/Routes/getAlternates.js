const express = require("express")
const router = express.Router()

router.post("/getAlternates",(req,res) =>{
    try{
        res.send([alter_data])
        console.log("fetch data from /getAlternates")
    }
    catch (error) {
        console.log(error);
        res.send("error in /getAlternates");
    }    
})

module.exports = router