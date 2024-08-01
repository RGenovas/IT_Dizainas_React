import { Link } from "react-router-dom"
import './Bannerbottom.css'


const Bannerbottom = () => {
  return (
    <div className="bottom-banner">
    <h2>Užteks kalbų, pradėkime darbą!</h2>
   <Link  to="/susisiekite"> <button>Susisiekti</button></Link>
  </div>
  )
}

export default Bannerbottom
