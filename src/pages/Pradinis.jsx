import pradinisElipses from '../img/foto_pradinis.png'
import './Pradinis.css'
import client1 from '../img/Client - 01.png'
import client2 from '../img/Client - 02.png'
import client3 from '../img/Client - 03.png'
import client4 from '../img/Client - 04.png'
import opt1 from '../img/icona1.png'
import opt2 from '../img/icona2.png'
import opt3 from '../img/icona3.png'
import opt4 from '../img/icona4.png'
import opt5 from '../img/icona5.png'
import opt6 from '../img/icona6.png'
import nuotraukos from '../img/Nuotraukos.png'
import Header from '../components/Header'
import lempute from '../img/lempute.png'
import laiskas from '../img/laiskas.png'
import filtrai from '../img/filtrai.png'
import testavimas from '../img/testavimas.png'
import naujasdarbas1 from '../img/naujausidarbai1.jfif'
import naujasdarbas2 from '../img/naujausidarbai2.jfif'
import naujasdarbas3 from '../img/naujausidarbai3.jfif'
import naujasdarbas4 from '../img/naujausidarbai4.jfif'
import portrait from '../img/woman.jfif'
import forward from '../img/Next.png'
import back from '../img/Back.png'




const Pradinis = () => {
  return (
    <>
    <div className="pradinis">
      <Header/>
    <div className="pradinis-1dalis">
      <div className="pradinis-aprasymas">
      <div className="text1-pradinis">
      <h1 className='text1-titulas'>Pasiruošę pakelti <br></br><span className='augimas'>savo verslo augimą </span> <br></br>į kitą lygį?</h1>
      <span className='text1-aprasymas'>Išbandykite nemokamą bandomąją versiją ir keliaukite į naują verslo lygį kartu su mumis!</span>
      <button className='trybutton'><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 0 1-12.7-6.5V353.7a8 8 0 0 1 12.7-6.5L656.1 506a7.9 7.9 0 0 1 0 12.9z"></path></svg>Išbandykite nemokamai</button>
      <div className="text2-pradinis">
        <h4>Mumis pasitiki pirmaujantys prekės ženklai</h4>
        <img className='client1' src={client1} alt="klientas1"/>
        <img src={client2} alt="klientas2"/>
        <img src={client3} alt="klientas3"/>  
        <img src={client4} alt="klientas4"/>
     </div>
      </div>
      </div>
      <div className="foto-pradinis">
      <div className="foto-pradinis2">
 
        <img src={pradinisElipses} alt="apvalinuotrauka" className='apvalusimg'/>
        </div>
      </div>
      
      </div>
     
     </div>
     <div className="pradinis-paslaugos">
      <h3>Mūsų Paslaugos </h3>
     <h2> Paslaugos, kurios turės <br></br>didelį poveikį jūsų verslui</h2>
     <div className="paslaugos">
      <div className="paslauga" >
      <img src={opt1} style={{width:"80px" ,height:"80px", border:"2px solid black", borderRadius:"50px" }}alt="icon1"/>
      <h4>Turinio Marketingas</h4>
      <p>Mūsų specialistai kuria įtraukiantį turinį, kuris iškarto patiks jūsų auditorijai ir skatins natūralų srautą.</p>
      </div>
      <div className="paslauga">
      <img src={opt2} style={{width:"80px" ,height:"80px", border:"2px solid black", borderRadius:"50px" }}alt="icon1"/>
      <h4>Grafinis dizainas</h4>
      <p>Pasinaudokite vizualinio pasakojimo galia su mūsų ekspertų grafinio dizaino paslaugomis, pritaikytomis kūrybiškam jūsų prekės ženklo kilimui ir dėmesio pritraukimui.</p>

      </div>
      <div className="paslauga">
      <img src={opt3} style={{width:"80px" ,height:"80px", border:"2px solid black", borderRadius:"50px" }}alt="icon1"/>
      <h4>Skaitmeninis marketingas</h4>
      <p>Pakelkite savo prekės ženklą internete su mūsų duomenimis paremtomis skaitmeninio marketingo strategijomis. Nuo SEO ir turinio rinkodaros</p>

      </div>
      <div className="paslauga" >
      <img src={opt4} style={{width:"80px" ,height:"80px", border:"2px solid black", borderRadius:"50px" }}alt="icon1"/>
      <h4>Tinklalapių dizainas</h4>
      <p>Mes specializuojamės kuriant vizualiai įspūdingas, naudotojui patrauklias interneto svetaines, kurios atitinka jūsų prekės identitetą ir teikia išskirtinę patirtį.</p>

      </div>
      <div className="paslauga">
      <img src={opt5} style={{width:"80px" ,height:"80px", border:"2px solid black", borderRadius:"50px" }}alt="icon1"/>
      <h4>IT konsultacijos</h4>
      <p>IT konsultacija, tai paslaugų teikimo praktika, kurioje teikiame patarimus ir įgyvendinimo paslaugas, susijusias su informacinių technologijų sritimi.</p>

      </div>
      <div className="paslauga">
      <img src={opt6} style={{width:"80px" ,height:"80px", border:"2px solid black", borderRadius:"50px" }}alt="icon1"/>
      <h4>Prekės ženklo identitetas</h4>
      <p>Tai apima unikalios ir atpažįstamos tapatybės kūrimą, kuri išskiria prekės ženklą iš konkurentų bei atitinka tikslinę auditoriją.</p>
      </div>
     </div>
     </div>
     <div className="pradinis-apacia">
    <img src={nuotraukos} alt="nuotraukos" 
    style={{width:"744px", height:"703px"}} />
     <div className="text-apacia">
      <h3>Apie mus</h3>
      <h1 className='text1-titulas'>Pagrindinė misija slypinti už visų mūsų darbų</h1>
      <p className='text1-aprasymas'>Sukurti technologijų sprendimus, kurie transformuoja ir praturtina verslo veiklą.</p>
      <div className="apacia-skaiciai">
        <div className="apacia-skaicius">
      <h3>330 +</h3>
      <span>Verslams padėta</span>
      </div>
      <div className="apacia-skaicius">
      <h3>230 +</h3>
     
      <span>Sugeneruotų pajamų</span>
      </div>
      </div>
      <button className='trybutton'><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 0 1-12.7-6.5V353.7a8 8 0 0 1 12.7-6.5L656.1 506a7.9 7.9 0 0 1 0 12.9z"></path></svg>Išbandykite nemokamai</button>
      </div>
     </div>
     <div className="procesai">
     <h3>Procesas</h3>
     <h4>Procesas, kuris skatina <br></br>pažangą</h4>
     <div className="procesu-sarasas">
      <div className="procesas">
      <div className="procesas-titulinis">
      <img className='proces-ikonele' src={lempute} alt="lempute" style={{width:"78.53px", height:"78.76px"}} />
      <h4>Idėjų <br></br>generavimas</h4>
      </div>
      <div className="proceso-tekstas">
      <p>Ideacijos procesas yra esminė fazė dizaino procese, kurioje vyksta kūrybinis mąstymas ir idėjų generavimas.</p>
      </div>
      </div>
      <div className="procesas">
      <div className="procesas-titulinis">
      <img className='proces-ikonele' src={laiskas} alt="lempute" style={{width:"78.53px", height:"78.76px"}} />
      <h4 className='proce-pav'>Tyrimai</h4>
      </div>
      <div className="proceso-tekstas">
      <p>Tyrimai yra kritiška dizaino proceso dalis, padedanti dizaineriams suprasti problemą.</p>
      </div>
      </div>
      <div className="procesas">
      <div className="procesas-titulinis">
      <img className='proces-ikonele' src={filtrai} alt="lempute" style={{width:"78.53px", height:"78.76px"}} />
      <h4  className='proce-pav'>Kūryba</h4>
      </div>
      <div className="proceso-tekstas">
      <p>Dizaino kūrimo procesas apima keletą pagrindinių žingsnių, siekiant užtikrinti aiškumą, efektyvumą ir sėkmingą įgyvendinimą.</p>
      </div>
      </div>
      <div className="procesas">
        <div className="procesas-titulinis">
      <img className='proces-ikonele' src={testavimas} alt="lempute" style={{width:"78.53px", height:"78.76px"}} />
      <h4  className='proce-pav'>Testavimas</h4>
      </div>
      <div className="proceso-tekstas">
      <p>Testavimas yra esminė dizaino proceso stadija, užtikrinanti, kad produktas ar sistema atitiktų nustatytus reikalavimus.</p>
      </div>
      </div>
     </div>
     <div className="naujausi">
     <h3>Naujausi darbai</h3>
      <div className="naujausi-darbai">
        <div className="naujausi-pav1">
          <img src={naujasdarbas1} alt="darbas1" style={{width:"664px", height:"445px" ,borderRadius:"24px"}}/>
          <p>Tinklalapių vartotojo sąsajos dizainas</p>
          <span>Kūrybinis vartotojo sąsajos dizainas</span>
          <img src={naujasdarbas3} alt="darbas3" style={{width:"664px", height:"445px" ,borderRadius:"24px"}}/>
          <p>Vartotojo sąsajos dizainas</p>
          <span>Kūrybinis logotipo atnaujinimas</span>
      </div>
      <div className="naujausi-pav1">
      <button className='trybutton naujausi-btn'><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 0 1-12.7-6.5V353.7a8 8 0 0 1 12.7-6.5L656.1 506a7.9 7.9 0 0 1 0 12.9z"></path></svg>Išbandykite nemokamai</button>
      <img src={naujasdarbas2} alt="darbas2" style={{width:"664px", height:"445px" ,borderRadius:"24px"}}/>
      <p>Kurti skaitmeninę strategiją</p>
      <span>Socialinių tinklų marketingas</span>
      <img src={naujasdarbas4} alt="darbas4" style={{width:"664px", height:"445px",borderRadius:"24px"}}/>
      <p>Reklaminių banerių kūrimas</p>
      <span>Grafinis dizainas</span>
      </div>
      </div>
      </div>
      <div className="review-section">
        <img src={portrait} alt="portrait" className='portrait'/>
   
        <p>“Patirtis su šia įmone buvo labai teigiama. Verslo augimo paslauga buvo ne tik kokybiška, bet ir pritaikyta mūsų poreikiams. Komunikacija buvo sklandi, o jų gebėjimas greitai reaguoti į mūsų <br></br>pageidavimus paliko teigiamą įspūdį. ”</p>
        <h4>Laima Varnaitė</h4>
        <span>Kūrybinė vadybininkė, UAB  Kreatyva</span>
        <div className="review-controls">
          <img src={back} alt='back' />
          <img src={forward} alt="forward" />
        </div>

      </div>
     </div>
     </>
  )
}

export default Pradinis
