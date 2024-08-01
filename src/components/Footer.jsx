import { Link } from 'react-router-dom'
import footerimg from '../img/Logo.png'
import fb from '../img/fb.png'
import ig from '../img/insta.png'
import linked from '../img/linkedin.png'
import './Footer.css'

const Footer = () => {
  return (
    <>
    <div className="footer">
    <div className="footer-container">
      <div className="footer-first">
     <img src={footerimg} alt="footerimg" className='footerimg' />
     <p>Mes esame strategų ir skaitmeninių inovatorių komanda, suvienyta siekiant meistriškumo ir pilnatvės.</p>
      </div>
      <div className="footer-second">
        <h2>Puslapiai</h2>
       <Link  className="nav" to='/pradinis'><p>Pagrindinis</p></Link> 
       <Link className="nav"  to='/apiemus'> <p>Apie mus</p></Link>
       <Link className="nav"  to='/kontaktai'> <p>Kontaktai</p></Link>
       <Link className="nav"  to='/portfelis'> <p>Portfolio</p></Link>
      </div>
      <div className="footer-third">
        <h2>Straipsniai</h2>
        <p>Stiliaus gidas kas tai?</p>
        <p>Licenzijos: Las jos Reikšmė ir Kodėl Tai Svarbu</p>
        <p>Kaip Sekti Naujoves ir Pakeitimus?</p>
        <p>Klaidos puslapis 404, kam jis reikalingas?</p>
        <p>Kaip susikurti saugų slaptažodį?</p>
      </div>
    <div className="footer-fourth">
      <h2>Prenumeruokite naujienas</h2>
      <div className="fourth-input">
      <input type="text" placeholder='Įveskite savo el.paštą čia' />
      <button>Prenumeruoti</button>
      </div>
    </div>
   </div>
   <p className='footer-linija'></p>
   <div className="footer-apacia">
    <div className="apacios-elementas">
    <h2>Autoriaus teisės priklauso</h2>
    <p>Dizainas:VCS+IV</p>
    </div>
    <div className="apacios-elementas">
    <h2>Susisiekite</h2>
    <p>+370 123 45 745</p>
    </div>
    <div className="apacios-elementas">
    <h2>Adresas</h2>
    <p>Vytauto gatvė 10A, Kaunas</p>
    </div>
    <div className="apacios-elementas logotipai" >
      <img src={fb} alt="fb" />
      <img src={ig} alt="ig" />
      <img src={linked} alt="linkedin" />
      </div>
    </div>
   </div>
    </>
  )
}

export default Footer
