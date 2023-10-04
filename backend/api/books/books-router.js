const express = require("express");
const BookData = require("./books-model"); 
const {validateId} = require("./books-middleware");

const router = express.Router();


router.get("/",async(req,res,next)=> {
    try {
        const result = await BookData.findAll(req.query);
        res.status(200).json(result);
    } catch(err) {next(err)}
})

//this is only for loading
/*
router.post("/",async(req,res,next)=> {
    try {
        const createdBook = await BookData.create();// eslint-disable-line
        res.status(201).json("hello world");
    } catch (err) {next(err)}
})
*/
//this is only for loading

router.get("/:id",validateId,async(req,res,next)=> {
    try {
        const sender = req.params.id;
        const result = await BookData.findId(sender);
        res.status(200).json(result); 
    } catch (err) {next(err)}
})


router.use((error,req,res,next)=> { // eslint-disable-line
    res.status(error.status || 500).json({
        message : error.message,
        stack : error.stack,
    })
})

module.exports = router;