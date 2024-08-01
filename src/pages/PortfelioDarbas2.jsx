import HeaderDark from "../components/HeaderDark"
import './Portfeliodarbas.css'
import naujasdarbas2 from '../img/naujausidarbai2.jfif'
import naujasdarbas1 from '../img/naujausidarbai1.jfif'
import naujasdarbas3 from '../img/naujausidarbai3.jfif'
import iliustr1 from '../img/iliustr1.jfif'
import iliustr2 from '../img/iliustr2.jfif'
import iliustr3 from '../img/iliustr3.jfif'
import vector from '../img/Vector.png'
import { Link } from "react-router-dom"



const PortfelioDarbas2 = () => {
  return (
    <div>
     <HeaderDark/>
    <div className="darbo-banner">
    <img src={naujasdarbas2} alt="" className="darbobanner"/>
    <div className="darboinfo">
      <div className="info-kortele">
        <h2>Kategorija:</h2>
        <p>Debesų sprendimas</p>
      </div>
      <div className="info-kortele">
        <h2>Klientas:</h2>
        <p>BrightMedia Solutions</p>
      </div>
      <div className="info-kortele">
        <h2>Data:</h2>
        <p>Rugpjūčio 23, 2023</p>
      </div>
      <div className="info-kortele">
        <h2>Vieta:</h2>
        <p>489 Depot Road, Midland</p>
      </div>
    </div>
    </div>
    <div className="aprasymai">
    <div className="aprasymas">
      <div className="aprasymo-tekstas">
      <h2>01. Problema</h2>
      <p>Kai mūsų pasirinkimo galia yra nevaržoma ir niekas negali mums trukdyti daryti to, kas mums labiausiai patinka, kiekvienas malonumas turėtų būti pasveikintas, o kiekvienas skausmas vengiamas. Bet tam tikromis aplinkybėmis ir dėl pareigų arba verslo įsipareigojimų dažnai gali atsitikti, kad malonumai turi būti atstumti, o nepatogumai priimami. Todėl išmintingas žmogus visada laikosi šio pasirinkimo principo: jis atsisako malonumų, siekdamas kitų didesnių malonumų, arba jis pakelia skausmus, kad išvengtų dar blogesnių skausmų.</p>
      </div>
      <div className="aprasymo-tekstas">
    <h2>02. Sprendimas</h2>
    <p>Kartais, dėl tam tikrų aplinkybių ir pareigų, nutiks, kad malonumai turi būti atmesti, o nepatogumai priimami. Todėl išmintingas žmogus yra priverstas pasirinkti, kad jis arba pasiekia didesnius malonumus atmetęs mažesnius arba iškelia skausmus, kad išvengtų blogesnių.</p>
    </div>
    <div className="aprasymo-tekstas">
    <p className="keistasstulp">Vienas, kuris vengia skausmo, kuris nesuteikia jokio rezultatinio malonumo. varginantis fizinis pratimas. Vienas, kuris vengia skausmo, kuris nesuteikia jokio rezultato. kuris iš mūsų kada nors imasi varginamo. Atsisako paties malonumo, nes tai yra.</p>
    </div>
    <div className="aprasymo-tekstas">
    <h2>03. Rezultatai</h2>
    <p>Nes tai skausmas, bet dėl to, kad kartais atsiranda aplinkybių, kuriuose vargas ir skausmas gali jam suteikti didelį malonumą. Paimkime trivialų pavyzdį: kuris iš mūsų imasi varginančių fizinio pratimo, išskyrus norą gauti iš to kokios nors naudos? Bet kas turi teisę priekaištauti žmogui, kuris pasirenka mėgautis malonumu, neturinčiu nemalonios pasekmės, arba tam, kuris vengia skausmo, kuris nesuteikia jokio rezultatinio malonumo?</p>
    </div>
    <div className="aprasymo-tekstas">
    <p>Kai mūsų pasirinkimo galia yra nevaržoma ir kai niekas mums negali trukdyti daryti to, kas mums labiausiai patinka, kiekvienas malonumas yra pasveikintinas, o kiekvienas skausmas vengiamas. Bet tam tikromis aplinkybėmis ir dėl pareigų arba verslo įsipareigojimų dažnai gali atsitikti, kad malonumai turi būti atstumti, o nepatogumai priimami. Todėl išmintingas žmogus visada laikosi šio pasirinkimo principo: jis atsisako malonumų, siekdamas kitų didesnių malonumų, arba jis pakelia skausmus, kad išvengtų dar blogesnių skausmų.    </p>
    </div>
    </div>
    </div>
    <div className="paveiksliukai-aprasyme">
    <img src={iliustr1} alt="iliustracija1" className="iliustracija"/>
    <img src={iliustr2} alt="iliustracija2" className="iliustracija"/>
    <img src={iliustr3} alt="iliustracija3" className="iliustracija"/>
    </div>

    <div className="naujausi-gale">
      <h2>Naujausi Projektai</h2>
      <div className="projektai">
        <div className="projektas">
          <img src={naujasdarbas1} alt="galineiliustr" className="galineiliustr"/>
          <h2>Tinklalapių vartotojo sąsa...</h2>
          <p>Kūrybinis vartotojo sąsajos dizainas</p>
        </div>
        <div className="projektas">
          <img src={naujasdarbas2} alt="galineiliustr" className="galineiliustr"/>
          <h2>Kurti skaitmeninę strategiją</h2>
          <p>Socialinių tinklų Marketingas</p>
          <Link to={'/portfelis/darbas2'}>  <img src={vector} alt="vektorius" className="vektorius-apacia"/> </Link>
        </div>
        <div className="projektas">
          <img src={naujasdarbas3} alt="galineiliustr"className="galineiliustr" />
          <h2>Reklaminių banerių kūrimas</h2>
          <p>Grafinis dizainas</p>
        </div>
      </div>

    </div>

    </div>
  )
}

export default PortfelioDarbas2
