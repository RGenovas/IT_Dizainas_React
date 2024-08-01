import { Link } from 'react-router-dom'
import HeaderDark from '../components/HeaderDark'

const Pranesimas = () => {
  return (
    <div><HeaderDark/>
    <div className='pranesimas'>
        
        <h1 className='messageTitle'>Dėkojame už susidomėjimą!</h1>
        <p className='message'>Artimiausiu metu susisieksime su jumis nurodytais kontaktais!</p>
        <Link to="/"> <p className='message'>
        Grįžti į pradžią</p></Link>
    </div>
    </div>
  )
}

export default Pranesimas
