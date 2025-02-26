import Card from "./components/Card"
import Card2 from "./components/Card2"


export default function App() {
  return (
    <div className="container mx-auto mt-7">
      <button className="bg-sky-500 text-white px-4 py-2 rounded">Klik</button>
      <Card nama="Budi" nim="H071239999" ipk="3.00"/>      
      <Card2 nama="Susi" nim="H071239888"/>      
    </div>
  )
}