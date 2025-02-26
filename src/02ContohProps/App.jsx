import Card from './Card'
import Card2 from './Card2'

export default function App() {
  return (
    <div className="container mx-auto mt-7">
      <Card nama="Budi" nim="H071239999" ipk="3.00"/>      
      <Card2 nama="Susi" nim="H071239888"/> 
      <Card2 />
    </div>
  )
}