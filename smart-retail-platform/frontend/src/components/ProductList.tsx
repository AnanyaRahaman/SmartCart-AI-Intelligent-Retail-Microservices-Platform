import {useEffect,useState} from "react";
import axios from "axios";

function ProductList(){

 const [products,setProducts] = useState<any[]>([]);

 useEffect(()=>{

  axios.get("http://localhost:4000/products")
  .then(res=>setProducts(res.data))

 },[])

 return(

  <div>

   {products.map(p => (

    <div key={p.id}>
      {p.name} - ${p.price}
    </div>

   ))}

  </div>

 )
}

export default ProductList;