const express =require('express');
const {authenticator} = require("./login-middleware");

const router = express.Router();

router.post("/",authenticator,async(req,res,next)=> {
    try {
        res.status(200).json({message : "successful login", token : req.token})
    } catch(err) {next(err)}
})


router.use((error,req,res,next)=> { // eslint-disable-line
    res.status(error.status || 500).json({
        message : error.message,
        stack : error.stack,
    })
})
module.exports = router;
