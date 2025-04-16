import { useEffect } from "react";

function App01() {

    const getData = () => {
        
    }

    const handleClick = () => {
        alert('Heloo')
    }

    useEffect( 
        () => console.log('check')
    )

  return (
    <>
    <h1 className="text-4xl m-3">App01</h1>
      <button onClick={handleClick} className="bg-amber-500 py-2 px-4 text-white rounded">Click</button> 
    </>
  );
}

export default App01;
