import { useState } from "react"

export default function Product() {

  //const [products, setProducts] = useState([]);
  const [productID, setProductID] = useState(0);

  const handleShow = () => {
    console.log(productID)
  }

  const handleChange = (e) => {
    //console.log(e.target.value)
    setProductID(e.target.value)
  }

  return (
   <div className="container mx-auto mt-7">
    <input onChange={handleChange} placeholder="Product ID" className="px-2 py-2 rounded mr-3"></input>  
    <button onClick={handleShow} className="bg-sky-500 text-white px-4 py-2 rounded">Show</button>     
    </div>
  )
}
