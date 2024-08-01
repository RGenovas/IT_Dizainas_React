import { Link } from "react-router-dom"
import HeaderDark from "../components/HeaderDark"

const Klaida = () => {
  return (
    <div>    <HeaderDark/>
    <div className='pranesimas'>

    <h1 className='messageTitle'>Puslapis nerastas!</h1>
   <Link to="/"> <p className='message'>
        Grįžti į pradžią...</p></Link>
</div>
</div>
  )
}

export default Klaida
