import PropTypes from 'prop-types'

function Card(props) {
  return (
    <div>
      <img src={props.image} />
      <h1>{props.title}</h1>
    </div>       
  )
}

Card.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};

export default Card