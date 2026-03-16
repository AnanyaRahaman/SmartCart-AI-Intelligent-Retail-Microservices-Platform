import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import {pool} from "./db";
import {generateToken} from "./auth";

const app = express();

app.use(cors());
app.use(express.json());

/* register user */

app.post("/register", async(req,res)=>{

 const {email,password} = req.body;

 const hashed = await bcrypt.hash(password,10);

 const result = await pool.query(

  "INSERT INTO users(email,password) VALUES($1,$2) RETURNING id",

  [email,hashed]

 );

 res.json(result.rows[0]);

});


/* login */

app.post("/login", async(req,res)=>{

 const {email,password} = req.body;

 const result = await pool.query(

  "SELECT * FROM users WHERE email=$1",

  [email]

 );

 const user = result.rows[0];

 if(!user){

  return res.status(401).send("User not found");

 }

 const valid = await bcrypt.compare(password,user.password);

 if(!valid){

  return res.status(401).send("Invalid password");

 }

 const token = generateToken(user);

 res.json({token});

});


/* get users */

app.get("/users", async(req,res)=>{

 const result = await pool.query("SELECT id,email FROM users");

 res.json(result.rows);

});


app.listen(4001,()=>{

 console.log("User service running on port 4001")

});