import { Link, NavLink } from "react-router-dom"

const Menu = () => {
  return (
    <div className="flex justify-center gap-5">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <NavLink to="/about">About</NavLink>
    </div>
  )
}

export default Menu