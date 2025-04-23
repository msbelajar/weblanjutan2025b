import { useParams } from "react-router-dom"
import Menu from "../Components/Menu"
import { useEffect, useState } from "react"

const Product = () => {

    const [product, setProduct] = useState({})

    const {id} = useParams()

    const fetchProduct = async () => {
        try {
            const res = await fetch(`https://fakestoreapi.com/products/${id}`)
            const data = await res.json()
            setProduct(data)
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect( () => {
        fetchProduct()
    }, [])

  return (
    <div>
        <Menu />
        <div>
            <img width={200} src={product.image} />
            <h1 className="font-bold text-amber-600">{product.title}</h1>
            <h2>{product.description}</h2>
        </div>
    </div>
  )
}

export default Product