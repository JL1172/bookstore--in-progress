const express =require("express");

const AccountData = require('./account-model')
const {authenticator,validateCredentials,validatePurchase} = require('./account-middleware')

const router = express.Router();



router.get("/:id",authenticator,async(req,res,next)=> {
    try {
        const data = await AccountData.findId(req.params.id);
        res.status(200).json(data);
    } catch (err) {next(err)}
})


router.get("/:id/orders",authenticator,async(req,res,next)=> {
    try {
        const resultingOrder = await AccountData.findStat(req.params.id);
        res.status(200).json(resultingOrder); 
    } catch (err) {next(err)}
})


router.post("/:id/orders/books",authenticator,validatePurchase,async(req,res,next)=> {
    try {
        const {id} = req.params;
        const {book_id} = req.body;
        const insertion = {
            user_id : id,
            book_id : book_id,
        }
        const result = await AccountData.create(insertion)
        res.status(201).json({message : "purchased", data : result})
    } catch (err) {next(err)}
})


router.put("/:id",authenticator,validateCredentials,async(req,res,next)=> {
    try {
        const result = await AccountData.update(req.params.id,req.body);
        res.status(200).json({message : "updated successfully", data : result})
    } catch (err) {next(err)}
})


router.delete("/:id",authenticator,async(req,res,next)=> {
    try {
        const result = await AccountData.remove(req.params.id);
        res.status(200).json(result); 
    } catch (err) {
        next(err)
    }
})


router.use((error,req,res,next)=> { //eslint-disable-line
    res.status(error.status || 500).json({
        message : error.message,
        stack : error.stack,
    })
})
module.exports = router;
