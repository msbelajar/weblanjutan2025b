import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Product from "./Pages/Product";
import NotFound from "./Pages/NotFound";
import Cart from "./Pages/Cart";

const AppCommerce = () => {
  return (
    <div className="w-full mt-5">
      <div className="w-3/4 mx-auto">
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="products" >
                <Route path=":id" element={<Product/>} />
            </Route> 
            <Route path="about" element={<About />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

// ubah app yang dipanggil pada main.jsx

export default AppCommerce;
