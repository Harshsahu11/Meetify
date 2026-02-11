import mongoose from "mongoose";

export async function connectDB(){
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log("Database Connected Successfuly"); 
    } catch (error) {
        console.log("Error in connecting DB",error);
    }
}