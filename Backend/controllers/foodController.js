import foodModel from "../models/foodModel.js"
import fs from 'fs'

// add food items
const addFood=async(req,res)=>{
    
    let image_filename=`${req.file.filename}`;
    const food =new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })

    try{
        await food.save();
        res.json({success:true,message:"Food Added"})
    }
    catch(err){
        console.log(err)
        res.json({success:false,message:"Error"})
    }
}


// for listing all food items
const listFood=async(req,res)=>{
    try{
        //we are finding the data in foodModel db
        const foods=await foodModel.find({});
        res.json({
            success:true,data:foods
        })
    }
    catch(err){
        console.log(err);
        res.json({success:false,message:"Error"})
    }
}

// remove food items
const removeFood=async(req,res)=>{
   try{
     const food=await foodModel.findById(req.body.id)
     //removing from files
     fs.unlink(`uploads/${food.image}`,()=>{})
    // for removing from mongodb 
    await foodModel.findByIdAndDelete(req.body.id); 

    res.json({success:true,message:"Food Removed"})
   }
   catch(err){
      console.log(err);
      res.json({success:false,message:"Error"})
   }
}

export {addFood,listFood,removeFood};