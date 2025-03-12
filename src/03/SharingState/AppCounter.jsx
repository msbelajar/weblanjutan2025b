import { useState } from "react";
import Button from "./Button";

function AppCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count+1)
  }

//   function handleClick() {
//     setCount(count+1)
//   }

  return (
    <>
      <h1 className="text-8xl">{count}</h1>
      <Button name="A" handle={handleClick} />
      <Button name="B" handle={handleClick} />
    </>
  );
}

export default AppCounter;
