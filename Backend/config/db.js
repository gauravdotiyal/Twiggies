// Logic to connect to database
import mongoose  from "mongoose"

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://gauravdotiyal33:1Qo1SxGyiTL78wGH@cluster0.j2xmi.mongodb.net/food-delivery').then(()=>console.log("DB Connected")); 
}

