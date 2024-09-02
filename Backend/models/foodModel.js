import mongoose from "mongoose";

//create schema to describe food model properties
const foodSchema =new mongoose.Schema({
    name:{type:string,required:true},
    description:{type:string,required:true},
    price:{type:number,required:true},
    image:{type:string,required:true},
    category:{type:string,required:true}
})

const foodModel=mongoose.model.food||mongoose.model("food",foodSchema);

export default foodModel;