import express from "express"
import Reciepe from "../Models/Reciepe";
const router= express.Router();

router.get("/",async(req,res)=>{
    const {title,description,difficulty}= req.body()
    const reciepe=await Reciepe
})