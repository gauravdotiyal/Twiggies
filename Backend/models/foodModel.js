import mongoose from "mongoose";

//create schema to describe food model properties
const foodSchema =new mongoose.Schema({
    name:{ type: String, required: true },
    description:{type: String,required:true},
    price:{type:Number,required :true},
    image:{type:String,required: true},
    category:{type:String,required: true}
})

//this is database
const foodModel=mongoose.models.food||mongoose.model("food",foodSchema);

export default foodModel;