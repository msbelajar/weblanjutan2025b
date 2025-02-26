function Card2({nama = "noname", nim = "-"}) {
  return (
    <div className=" flex flex-col justify-center items-center bg-amber-200 w-[300px] h-[150px] rounded m-2">
        <h1>Nama : {nama}</h1> 
        <h1>NIM : {nim}</h1>
    </div>
  )
}

export default Card2