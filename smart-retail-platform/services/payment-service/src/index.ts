import express from "express";
import Stripe from "stripe";

const stripe = new Stripe("YOUR_STRIPE_SECRET_KEY");

const app = express();
app.use(express.json());

app.post("/payment", async (req,res)=>{

 const {amount} = req.body;

 const paymentIntent = await stripe.paymentIntents.create({
  amount,
  currency:"usd"
 });

 res.send({
  clientSecret:paymentIntent.client_secret
 });

});

app.listen(4010,()=>{
 console.log("Payment service running");
});