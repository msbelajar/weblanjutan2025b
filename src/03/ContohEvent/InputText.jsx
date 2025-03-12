function InputText() {

    //arrow function
    const handle = () => {
        console.log('cek')
    }

  return (
    <input onChange={handle} className="w-[300px] py-2 border rounded m-3 px-2" placeholder="Nama"></input>
  )
}

export default InputText