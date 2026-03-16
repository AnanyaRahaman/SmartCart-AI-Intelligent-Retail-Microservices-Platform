import jwt from "jsonwebtoken";

const SECRET = "secretkey";

export function generateToken(user:any){

 return jwt.sign(

  {id:user.id,email:user.email},
  SECRET,
  {expiresIn:"1h"}

 )

}

export function verifyToken(token:string){

 return jwt.verify(token,SECRET);

}