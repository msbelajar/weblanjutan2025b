function Button({name, handle}) {
    return (
      <div className="m-3">
          <button onClick={handle} className="bg-sky-500 px-4 py-2 rounded text-white">Button {name}</button>
      </div>
    )
  }
  
  export default Button