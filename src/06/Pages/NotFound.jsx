import { useNavigate } from "react-router-dom"
import Menu from "../Components/Menu"

const NotFound = () => {

    const navigate = useNavigate()

    setTimeout( () => navigate(-1) , 2000)

  return (
    <div>
        <Menu />
        Error 404 - NotFound
    </div>
  )
}

export default NotFound