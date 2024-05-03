import mongoose from "mongoose";
import {connectionStr} from "@/app/api/lib/db"
import { NextResponse } from "next/server";
import { restaurantSchema } from "../lib/restaurantsModel";

export async function GET(){
   await mongoose.connect(connectionStr, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });

   const data= await restaurantSchema.find();
   console.log(data);
    return NextResponse.json({result:true})
}