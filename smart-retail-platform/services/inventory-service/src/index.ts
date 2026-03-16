import express from "express";

const app = express();

app.use(express.json());

let inventory:any[]=[];

app.get("/inventory",(req,res)=>{
 res.json(inventory);
});

app.post("/inventory",(req,res)=>{
 inventory.push(req.body);
 res.json({message:"Inventory added"});
});

app.listen(4004,()=>{
 console.log("Inventory service running on 4004");
});