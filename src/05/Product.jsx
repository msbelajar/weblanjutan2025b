import { useEffect, useState } from "react"
import Card from "./Card"

export default function Product() {

  const [products, setProducts] = useState([]);
  const [productID, setProductID] = useState(0);

  const handleShow = () => {
    console.log(productID)
  }

  const handleChange = (e) => {
    //console.log(e.target.value)
    setProductID(e.target.value)
  }

  //buat fetch ke API
  const fetchProducts = async () => {
    try {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        setProducts(data)
    } catch (error) {
        console.log(error)
    } 
  }

  useEffect( () => {
    fetchProducts()    
  },[]);

  return (
   <div className="container mx-auto mt-7">
    <input onChange={handleChange} placeholder="Product ID" className="px-2 py-2 rounded mr-3"></input>  
    <button onClick={handleShow} className="bg-sky-500 text-white px-4 py-2 rounded">Show</button> 

    <div className="flex flex-wrap gap-2">
        {products.map((product) => 
            <Card key={product.id} {...product}></Card>
        )}
    </div>

    </div>
  )
}
