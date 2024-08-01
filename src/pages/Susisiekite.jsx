import { useNavigate } from "react-router-dom";
import HeaderDark from "../components/HeaderDark"


const Susisiekite = () => {
  const navigate = useNavigate(); 
  function handleForm(event) {
    event.preventDefault(); 
    console.log("Form Submitted"); 
    navigate('/pranesimas');
  }
  return (
    <div>
    <HeaderDark/>
    <div className="susisiekite">
        <h1>Parašykite mums!</h1>
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
    </div>
  )
}

export default Susisiekite
