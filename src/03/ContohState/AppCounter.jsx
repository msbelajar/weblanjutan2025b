import { useState } from "react"

function AppCounter() {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1)
    }

  return (
    <div className="flex flex-col justify-between items-center rounded border bg-gray-200 p-2 m-2 w-[200px]">
        <h1 className="text-8xl">{count}</h1>
        <button onClick={handleClick} className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded mt-2">Click</button>
    </div>
  )
}

export default AppCounter