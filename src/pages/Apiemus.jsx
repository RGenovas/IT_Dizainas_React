import HeaderDark from "../components/HeaderDark"
import review from "../img/ivertinimas.png"
import foto from "../img/fotos2.png"
import './Apiemus.css'
import people from "../img/mildly_creepy.jfif"
import office from "../img/silent_hill.jfif"
import komanda from "../img/komanda.png"
import egle from "../img/egle.png"
import mantas from "../img/mantas.png"
import ausra from "../img/ausra.png"
import fb from '../img/fb.png'
import ig from '../img/insta.png'
import linked from '../img/linkedin.png'
import Bannerbottom from "../components/Bannerbottom"


const Apiemus = () => {
  return (
    <div>
      <HeaderDark/>
      <div className="apie">
      <div className="apie-mus">
        <div className="apie-mus-banner">
        <p>Pakelkite verslą į viršų!</p>
        <h1 className='text1-titulas apie-mus-didelis'>Pakelkite <span className='augimas'> savo <br></br>verslą </span> į kitą lygį <br></br>į kitą lygį?</h1>
        <p>Išbandykite nemokamą bandomąją versiją ir keliaukite į naują verslo lygį kartu su mumis!</p>
        <img src={review} alt="kazkokia apzvalga" className="apzvalgospav"/>
        </div>
        <div className="apie-mus-foto">
        <img src={foto} alt="soninesfoto" className="apiemusfoto1" />
        </div>
      </div>
    </div>
    <div className="grafikos-dalykai">
      <div className="grafikos-dalykas">
        <h2>200+</h2>
       <h3>Esame didelė komanda</h3>
       <p>Mes didžiuojamės savo talentinga ir įsipareigojusia komanda, kuri kartu siekia aukščiausių rezultatų ir nuolat tobulėja.</p>
      </div>
 
      <div className="grafikos-dalykas">
        <h2>99%</h2>
       <h3>Grafinis Dizainas</h3>
       <p>99% mūsų teikiamų paslaugų sudaro grafinio dizaino darbai, užtikrinantys aukštą kokybę ir kūrybiškumą.</p>
      </div>
      <div className="grafikos-dalykas">
        <h2>1.5M+</h2>
       <h3>Skaitmeninis Marketingas</h3>
       <p>Mūsų skaitmeninio marketingo paslaugos pasiekia daugiau nei 1,5 milijono žmonių, užtikrinant platų ir efektyvų poveikį.</p>
      </div>
    </div>
    <div className="misija">
      <div className="misijos">
      <div className="misija-left">
      <h3>Mūsų Misija</h3>
      <h2>Sustiprinti Jūsų <br></br>verslą.</h2>
      <p>Mūsų tikslas - stiprinti jūsų verslą. Mes siūlome individualų požiūrį ir kūrybiškus sprendimus, kurie garantuoja efektyvumą ir aukštą kokybę.</p>
      <div className="misija-lists">
      <div className="misija-list1">
      <ul>
        <li> 
        <svg stroke="currentColor" fill="#FF6600" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg>Prisitaikome prie jūsų unikalių poreikių</li>
        <li><svg stroke="currentColor" fill="#FF6600" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg>Kuriame inovatyvias ir pritaikomas strategijas</li>
        <li><svg stroke="currentColor" fill="#FF6600" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg>Turime gilų supratimą apie skaitmeninio pasaulio subtilybes</li>
      </ul>
      </div>
      <div className="misija-list2">
      <ul>
        <li><svg stroke="currentColor" fill="#FF6600" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg>Bendradarbiaujame su jumis nuo pradžios iki pabaigos.</li>
        <li><svg stroke="currentColor" fill="#FF6600" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg>Suteikiame greitus ir į rezultatus orientuotus sprendimus.</li>
        <li><svg stroke="currentColor" fill="#FF6600" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg>Siūlome tik aukščiausios kokybės paslaugas ir produktus.</li>
      </ul>
      </div>
      </div>
      </div>
      <div className="misija-right">
        <img src={people} alt="people" className="long-photo" />
        <img src={komanda} alt="team" className="komanda"/>
        <div className="skaiciai">
        <div className="skaiciai1 skaicius">
        <h2>10k</h2>
        <p>Pokalbiai per mėnesį</p>
       
        </div>
        <div className="vl"></div>
        <div className="skaiciai2 skaicius">
        <h2>95+</h2>
        <p>Pabaigtų projektų</p>
        </div>
        
        </div>
        <img src={office} alt="ofisas" className="long-photo2" />
      </div>
      </div>
    </div>
    <div className="musu-komanda">
      <h2>Mūsų komanda</h2>
      <div className="komandos-nariai">
        <div className="narys">
        <div className="apie-linkai" >
      <img src={fb} alt="fb" className="ikonele" />
      <img src={ig} alt="ig" className="ikonele" />
      <img src={linked} alt="linkedin" className="ikonele" />
      </div>
      <img src={egle} alt="foto1" />
      <h2>Eglė Petrauskaitė</h2>
      <p>Įkūrėja ir generalinė direktorė</p>
      </div>
      <div className="narys">
      <div className="apie-linkai" >
      <img src={fb} alt="fb" className="ikonele" />
      <img src={ig} alt="ig" className="ikonele" />
      <img src={linked} alt="linkedin" className="ikonele" />
      </div>
      <img src={mantas} alt="foto1" />
      <h2>Mantas Vaitkus</h2>
      <p>Rinkodaros vadovas</p>
      </div>
      <div className="narys">
      <div className="apie-linkai" >
      <img src={fb} alt="fb" className="ikonele" />
      <img src={ig} alt="ig" className="ikonele" />
      <img src={linked} alt="linkedin" className="ikonele" />
      </div>
    
      <img src={ausra} alt="foto1" />
     
      
      <h2>Aušra Kazlauskienė</h2>
      <p>Rinkodaros vadovė</p>
      </div>
      </div>
<Bannerbottom/>
    </div>
    </div>
  )
}

export default Apiemus
