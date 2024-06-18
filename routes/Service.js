const express = require('express');
const router = express.Router();
const services = require("../models/services");

function extractDriveId(url) {
    const regex = /\/file\/d\/([a-zA-Z0-9_-]+)\//;
    const match = url.match(regex);
    return match ? match[1] : null;
}
router.post("/create-service" , async(req,res) => {
    try{
          const url = req.body.image;
          const urlId = extractDriveId(url);
        const newService = new services({
            // image : req.body.image,
            // image : "https://source.unsplash.com/" + req.body.image,
            image : "https://drive.google.com/thumbnail?id=" + urlId,
            name : req.body.name,
            description : req.body.description,
        })
        const response = await newService.save();
        res.status(200).json({success:true , data:response})
    }catch(err){
        res.status(400).json({success:false , reason:err});
    }
})

router.get("/read-service" , async(req,res) => {
    try{
        const response = await services.find();
        res.status(200).json({success:true , data:response})
    }catch(err){
        res.status(400).json({success:false , reason:err});
    }
})

router.put("/update-service/:id" , async(req,res) => {
    try{
        const id = req.params.id;
        const response = await services.findByIdAndUpdate({_id:id} , req.body , {new :true});  
        res.status(200).json({success:true , data:response})
    }catch(err){
        res.status(400).json({success:false , reason:err});
    }
})

router.delete("/delete-service/:id" , async(req,res) => {
    try{
        const id = req.params.id;
        const response = await services.findByIdAndDelete({_id:id});
        res.status(200).json({success:true , data:response})
    }catch(err){
        res.status(400).json({success:false , reason:err});
    }
})

module.exports = router;