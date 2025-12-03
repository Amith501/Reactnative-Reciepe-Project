import express from "express";

const app= express('');


app.use(express.json())
const PORT= 3000 || process.env.PORT
app.get("/",(req,res)=>{
res.send("Hello world ")
})


app.listen(PORT,()=>{
    console.log(`running on ${PORT}`)
})