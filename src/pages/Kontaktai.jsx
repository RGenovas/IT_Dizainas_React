import HeaderDark from "../components/HeaderDark"
import elpastas from "../img/kontaktai1.png"
import telefonas from "../img/kontaktai2.png"
import vieta from "../img/kontaktai3.png"
import ikon0 from "../img/kontaktaifb.png"
import ikon1 from "../img/kontaktaiig.png"
import ikon2 from "../img/kontaktaiin.png"
import './Kontaktai.css'
import map from '../img/Map.png'
import { useNavigate } from "react-router-dom"




const Kontaktai = () => {
  const navigate = useNavigate(); 
  function handleForm(event) {
    event.preventDefault(); 
    console.log("Form Submitted"); 
    navigate('/pranesimas');
  }

  return (
    <div>
      <HeaderDark/>
     <div className="kontaktai">
      <div className="kontaktai-left">
        <h2>Pasikalbėkime</h2>
        <p>Mes bendradarbiaujame su tūkstančiais kūrėjų, verslininkų ir tikromis legendomis.</p>
        <p className="linija"></p>
        <div className="kontaktas">
          <img src={elpastas} alt="elpastoikona" />
          <div className="info">
        <h3>Mūsų el. paštas</h3>
        <p>hello@example.com</p>
        </div>
        </div>
        <div className="kontaktas">
          <img src={telefonas} alt="teleikona" />
          <div className="info">
        <h3>Skambinkite mums</h3>
        <p>+123 456 7892</p>
        </div>
        </div>
        <div className="kontaktas">
          <img src={vieta} alt="teleikona" />
          <div className="info">
        <h3>Raskite mus</h3>
        <p>Open Google maps</p>
        </div>
        </div>
        <p className="linija"></p>
        <div className="ikoneles-apacia">
          <img src={ikon0} alt="ikon1" />
          <img src={ikon1} alt="ikon2" />
          <img src={ikon2} alt="ikon3" />
        </div>
      </div>
      <div className="kontaktai-right">
        <form onSubmit={handleForm}>
        
          <input type="text" id="vardas" placeholder="Vardas" required/>
       
          <input type="text" id="pavarde" placeholder="Pavardė" required/>
  
          <input type="text" id="email" placeholder="El.paštas" required/>
         
          <input type="number" id="Phone" placeholder="Telefono Nr." required/>
          <textarea name="message" id="message" placeholder="Žinutė"></textarea>
         <button type="submit">Siųsti žinutę</button>
        </form>
        </div>
     </div>
     <div className="maps">
      <img src={map} alt="zemelapis" className="map"/>
    </div>
    </div>
  )
}

export default Kontaktai
