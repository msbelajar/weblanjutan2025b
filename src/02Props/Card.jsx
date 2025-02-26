import PropTypes from 'prop-types'

function Card(props) {
  return (
    <div className="w-96 bg-gradient-to-b from-gray-400 to-gray-600 p-4 rounded-md shadow-lg relative">
    <div className="bg-orange-500 text-center py-2">
      <h2 className="text-black font-bold text-xl">{props.name}</h2>
    </div>
    <div className="bg-blue-300 p-3 mt-4 w-3/4 rounded shadow-md">
      <p className="text-black font-bold">Occupation : {props.occupation}</p>
      <p className="text-black font-bold">E-mail : {props.email}</p>
      <p className="text-black font-bold">Phone : {props.phone}</p>
    </div>
  </div>    
  )
}

Card.propTypes = {
  name: PropTypes.string,
  occupation: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
};

export default Card