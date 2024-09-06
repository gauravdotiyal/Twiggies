import express from "express"
import { addFood, listFood,removeFood } from "../controllers/foodController.js"
import multer from "multer"

const foodRouter=express.Router(); 

// Image storage engine 
const storage =multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload=multer({storage:storage})

//post method used to send data to server
foodRouter.post("/add" ,upload.single("image"), addFood)

//get method to get the fooditems
foodRouter.get("/list",listFood)

// post method for remove items
foodRouter.post("/remove",removeFood)

export default foodRouter;