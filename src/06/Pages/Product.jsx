import { useParams } from "react-router-dom";
import Menu from "../Components/Menu";
import { useEffect, useState } from "react";

const Product = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  const fetchProduct = async () => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      <Menu />
      <div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={product.image}
              className="max-w-sm rounded-lg shadow-2xl"
              alt={product.title}
            />
            <div>
              <h1 className="text-5xl font-bold">{product.title}</h1>
              <p className="py-6">
                {product.description}
              </p>
             <p className="py-2 px-2 text-amber-50 bg-amber-500">
                {product.price}
             </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
