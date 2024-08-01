import HeaderDark from "../components/HeaderDark"
import './Portfelis.css'
import vector from '../img/Vector.png'
import { Link } from 'react-router-dom'
import naujasdarbas1 from '../img/naujausidarbai1.jfif'
import naujasdarbas2 from '../img/naujausidarbai2.jfif'
import naujasdarbas3 from '../img/naujausidarbai3.jfif'
import naujasdarbas4 from '../img/naujausidarbai4.jfif'
import naujasdarbas5 from '../img/naujausidarbai5.jfif'
import naujasdarbas6 from '../img/naujausidarbai6.jfif'
import Bannerbottom from "../components/Bannerbottom"

const Portfelis = () => {
  return (
    <div>
      <HeaderDark/>
     <div className="portfel-banner">
      <h2>Mūsų Portfelis</h2>
     </div>


     <div className="portfelio-galerija">
      <div className="galerijos-darbas">
        <img src={naujasdarbas1} alt="pirmasdarbas" className="galerijos-img"/>
        <h2>Tinklalapių vartotojo sąsajos dizainas</h2>
        <p>Kūrybinis vartotojo sąsajos dizainas</p>
      </div>
      <div className="galerijos-darbas">
        <div className="galerijos-nuoroda">
        <img src={naujasdarbas2} alt="antrasdarbas" className="galerijos-img"/>
 
       <Link to={'/portfelis/darbas2'}> <img src={vector} alt="vektorius" className="vektorius"/></Link>

        </div>
        <h2>Kurti skaitmeninę strategiją</h2>
        <p>Socialinių tinklų Marketingas</p>
      </div>
      <div className="galerijos-darbas">
        <img src={naujasdarbas3} alt="treciasdarbas" className="galerijos-img"/>
        <h2>Vartotojo sąsajos dizainas</h2>
        <p>Kūrybinis logotipo atnaujinimas</p>
      </div>
      <div className="galerijos-darbas">
        <img src={naujasdarbas4} alt="ketvirtasdarbas" className="galerijos-img"/>
        <h2>Reklaminių banerių kūrimas</h2>
        <p>Grafinis dizainas</p>
      </div>
      <div className="galerijos-darbas">
        <img src={naujasdarbas5} alt="penktasdarbas" className="galerijos-img"/>
        <h2>Grafinis dizainas</h2>
        <p>Grafinis dizainas</p>
      </div>
      <div className="galerijos-darbas">
        <img src={naujasdarbas6} alt="sestasdarbas" className="galerijos-img"/>
        <h2>Vartotojo sąsajos dizainas</h2>
        <p>Kūrybinis logotipo atnaujinimas</p>
      </div>
     </div>
     <Bannerbottom/>
    </div>
    
  )
}

export default Portfelis
