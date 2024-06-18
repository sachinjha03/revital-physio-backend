const express = require('express');
const router = express.Router();
const queries = require("../models/queries");

router.post("/create-query" , async(req,res) =>{ 
    try{
        const newQuery = new queries({
            name:req.body.name,
            email:req.body.email,
            query:req.body.query
        })
        const response = await newQuery.save();
        res.status(200).json({success:true , data:response});
    }catch(err){
        res.status(400).json({success:false , reason : err});
    }
})

router.get("/read-query" , async(req,res) => {
    try{
        const response = await queries.find();
        res.status(200).json({success:true , data:response});
    }catch(err){
        res.status(400).json({success:false , reason : err});
    }
})

router.delete("/delete-query/:id" , async(req,res) => {
    try{
        const id = req.params.id;
        const response = await queries.findByIdAndDelete({_id:id});
        res.status(200).json({success:true , data:response});
    }catch(err){
        res.status(400).json({success:false , reason : err});
    }
})

module.exports = router;