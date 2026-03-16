import express from "express";
import { producer } from "./kafkaProducer";

const app = express();
app.use(express.json());

let orders:any[] = [];

app.post("/orders", async (req,res)=>{

 const order = req.body;

 orders.push(order);

 await producer.connect();

 await producer.send({
  topic:"orders",
  messages:[
   {value:JSON.stringify(order)}
  ]
 });

 res.json({message:"Order created"});
});

app.listen(4003,()=>{
 console.log("Order service running");
});