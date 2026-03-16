import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/products", async(req,res)=>{

 const response = await axios.get(

  "http://product-service:4002/products"

 )

 res.json(response.data)

});


app.get("/users", async(req,res)=>{

 const response = await axios.get(

  "http://user-service:4001/users"

 )

 res.json(response.data)

});

app.listen(4000,()=>{

 console.log("API Gateway running")

});