import { useEffect, useState } from "react"
import Card from "./Card"

export default function Product() {

  const [product, setProduct] = useState({});
  const [productID, setProductID] = useState('');

  const handleShow = () => {
    console.log(productID)
  }

  const handleChange = (e) => {
    setProductID(e.target.value)
  }

  //buat fetch ke API
  const fetchProducts = async (id) => {
    try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await res.json()
        setProduct(data)
    } catch (error) {
        console.log(error)
    } 
  }

  useEffect( () => {
    fetchProducts(productID)    
  },[productID]);

  return (
   <div className="container mx-auto mt-7">
    <input onChange={handleChange} placeholder="Product ID" className="px-2 py-2 rounded mr-3"></input>  
    <button onClick={handleShow} className="bg-sky-500 text-white px-4 py-2 rounded">Show</button> 

    <div className="flex flex-wrap gap-2">
        <Card key={product.id} {...product}></Card>
    </div>

    </div>
  )
}
