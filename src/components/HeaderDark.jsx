import logo from '../img/Logo2.png'
import { NavLink } from 'react-router-dom'
import './Header.css'



const HeaderDark = () => {
  return (
    <div className='header-container-dark'>
        <div className="headerDark" >
    <img src={logo} alt="logotipas" width="134px" height="39px"/>
        <div className="headerDark-links nav">
          <NavLink className='pradinis-link' to="/"> <h3  className='pradinis-link'>Pradinis</h3></NavLink>
          <NavLink to="/apiemus"> <h3 > Apie Mus</h3></NavLink> 
         <NavLink to="/portfelis"> <h3 >Portfelis</h3></NavLink>
          <NavLink to="/kontaktai"> <h3 >Kontaktai</h3></NavLink> 
        <NavLink to="/susisiekite"> <button>Susisiekite</button> </NavLink>   
        </div>
    </div>
    </div>
  )
}

export default HeaderDark
