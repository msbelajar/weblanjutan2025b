function Button() {

  function handleClick() {
    alert('Haloooo')
  }

  return (
    <div>
        <button onClick={handleClick} className="bg-sky-500 px-4 py-2 rounded">Click</button>
    </div>
  )
}

export default Button