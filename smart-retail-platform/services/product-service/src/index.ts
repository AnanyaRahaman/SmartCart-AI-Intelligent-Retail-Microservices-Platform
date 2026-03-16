import express from "express";
import cors from "cors";
import { redisClient } from "./cache";

const app = express();

app.use(cors());
app.use(express.json());

const products = [
 {id:1,name:"Laptop",price:1200},
 {id:2,name:"Keyboard",price:80},
 {id:3,name:"Mouse",price:40}
];

app.get("/products", async (req,res)=>{

 const cached = await redisClient.get("products");

 if(cached){
  return res.json(JSON.parse(cached));
 }

 await redisClient.set("products",JSON.stringify(products));

 res.json(products);

});

app.listen(4002,()=>{
 console.log("Product service running");
});