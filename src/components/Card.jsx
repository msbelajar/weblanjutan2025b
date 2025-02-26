import PropTypes from 'prop-types'

function Card(props) {
  return (
    <div className=" flex flex-col justify-center items-center bg-amber-200 w-[300px] h-[150px] rounded m-2">
        <h1>Nama : {props.nama}</h1> 
        <h1>NIM : {props.nim}</h1>
        <h1>IPK : {props.ipk}</h1>
    </div>
  )
}

Card.propTypes = {
    nama : PropTypes.string,
    nim : PropTypes.string,
    ipk : PropTypes.number,
}

export default Card