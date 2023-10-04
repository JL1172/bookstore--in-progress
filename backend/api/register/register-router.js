const express = require("express");
const RegisterData = require("./register-model");
const {validateCredentials,validateUniqueness} = require("./register-middleware");

const router = express.Router();

router.post("/",validateCredentials,validateUniqueness,async(req,res,next)=> {
    try {
        const result = await RegisterData.create(req.body);
        res.status(200).json({data : result, message : 'success'})
    } catch(err) {next(err)}
})

router.use((error,req,res,next) => { //eslint-disable-line
    res.status(error.status || 500).json({
        message : error.message,
        stack : error.stack,
    })
})

module.exports = router;