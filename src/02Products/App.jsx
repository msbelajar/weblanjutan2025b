import Card from "./Card"
import {products} from "../lib/products"

function App() {

  return (
    <div className="container mx-auto mt-7">
        <div className="flex flex-wrap gap-2">
            {products.map((product) => 
              <Card key={product.id} {...product}></Card>
            )}
        </div>
    </div>
  )
}

export default App