import './App.css'

import Img1 from './assets/1.png'
import Img2 from './assets/2.png'
import Img3 from './assets/3.png'
import Img4 from './assets/4.png'
import Img5 from './assets/5.png'
import Img6 from './assets/6.png'
import Img7 from './assets/7.png'
import Img8 from './assets/8.png'
import Img9 from './assets/9.png'
import Img10 from './assets/10.png'

import {BiWorld} from "react-icons/bi"
import {CiLineHeight} from "react-icons/ci"
import {GiWeight} from "react-icons/gi"

type Tipotexto = {
  texto : string;
}
const Nomecachorro = ({texto}:Tipotexto)=>{
  return<h2>{texto}</h2>
}

function App() {

  return (
    <>
    <section className={"base"}>
      <h1>Cachorro Typescript</h1>
    </section>
    <section style={{display:"flex",flexWrap:"wrap"}}>
    
    <div className={"amostra"}>
      <div className={"base-foto"}>
       <img src={Img1} />
      </div>
     <Nomecachorro texto="Boston Terrier"/>
      <div className={"descriçao"}>
      <BiWorld size={22}/>
      <p style={{color:"green",fontWeight:"bold"}}>Estados Unidos</p>
      </div>
        <div className={"descriçao"}>
      <CiLineHeight size={22}/>
      <p style={{color:"blue",fontWeight:"bold"}}>38 – 43 cm </p>
      </div>
       <div className={"descriçao"}>
      <GiWeight size={22}/>
      <p style={{color:"purple",fontWeight:"bold"}}>4,5 – 11 kg</p>
      </div>
    </div>

     <div className={"amostra"}>
      <div className={"base-foto"}>
        <img src={Img2}/>
      </div>
    <Nomecachorro texto="Dachshund"/>
      <div className={"descriçao"}>
      <BiWorld size={22}/>
      <p style={{color:"green",fontWeight:"bold"}}>Alemanha</p>
      </div>
        <div className={"descriçao"}>
      <CiLineHeight size={22}/>
      <p style={{color:"blue",fontWeight:"bold"}}>até 37 cm </p>
      </div>
       <div className={"descriçao"}>
      <GiWeight size={22}/>
      <p style={{color:"purple",fontWeight:"bold"}}>11kg.</p>
      </div>
    </div>
     <div className={"amostra"}>
      <div className={"base-foto"}>
        <img src={Img3}/>
      </div>
      <Nomecachorro texto=" Foxhound Inglês" />
            <div className={"descriçao"}>
      <BiWorld size={22}/>
      <p style={{color:"green",fontWeight:"bold"}}>Inglaterra</p>
      </div>
        <div className={"descriçao"}>
      <CiLineHeight size={22}/>
      <p style={{color:"blue",fontWeight:"bold"}}>38 – 43 cm </p>
      </div>
       <div className={"descriçao"}>
      <GiWeight size={22}/>
      <p style={{color:"purple",fontWeight:"bold"}}>27 - 34 kg</p>
      </div>
    </div>
     <div className={"amostra"}>
      <div className={"base-foto"}>
        <img src={Img4}/>
      </div>
      <Nomecachorro texto="Mastife"/>
      <div className={"descriçao"}>
      <BiWorld size={22}/>
      <p style={{color:"green",fontWeight:"bold"}}> Inglaterra</p>
      </div>
        <div className={"descriçao"}>
      <CiLineHeight size={22}/>
      <p style={{color:"blue",fontWeight:"bold"}}>70–91 cm </p>
      </div>
       <div className={"descriçao"}>
      <GiWeight size={22}/>
      <p style={{color:"purple",fontWeight:"bold"}}>73–100 kg</p>
      </div>
    </div>
     <div className={"amostra"}>
      <div className={"base-foto"}>
        <img src={Img5}/>
      </div>
      <Nomecachorro texto="Pastor Australiano"/>
      <div className={"descriçao"}>
      <BiWorld size={22}/>
      <p style={{color:"green",fontWeight:"bold"}}>Região Oeste</p>
      </div>
        <div className={"descriçao"}>
      <CiLineHeight size={22}/>
      <p style={{color:"blue",fontWeight:"bold"}}>51–58 cm </p>
      </div>
       <div className={"descriçao"}>
      <GiWeight size={22}/>
      <p style={{color:"purple",fontWeight:"bold"}}>25–32 kg</p>
      </div>
    </div>
     <div className={"amostra"}>
      <div className={"base-foto"}>
        <img src={Img6}/>
      </div>
      <Nomecachorro texto="Pinscher"/>
      <div className={"descriçao"}>
      <BiWorld size={22}/>
      <p style={{color:"green",fontWeight:"bold"}}>Alemanha</p>
      </div>
        <div className={"descriçao"}>
      <CiLineHeight size={22}/>
      <p style={{color:"blue",fontWeight:"bold"}}>25 – 30 cm </p>
      </div>
       <div className={"descriçao"}>
      <GiWeight size={22}/>
      <p style={{color:"purple",fontWeight:"bold"}}> 3,6 – 4,5 kg</p>
      </div>
    </div>
     <div className={"amostra"}>
      <div className={"base-foto"}>
        <img src={Img7}/>
      </div>
     <Nomecachorro texto="Xoloitzcuintli"/>
      <div className={"descriçao"}>
      <BiWorld size={22}/>
      <p style={{color:"green",fontWeight:"bold"}}>México</p>
      </div>
        <div className={"descriçao"}>
      <CiLineHeight size={22}/>
      <p style={{color:"blue",fontWeight:"bold"}}>40 cm e 55cm </p>
      </div>
       <div className={"descriçao"}>
      <GiWeight size={22}/>
      <p style={{color:"purple",fontWeight:"bold"}}>4 – 25 kg</p>
      </div>
    </div>
     <div className={"amostra"}>
      <div className={"base-foto"}>
        <img src={Img8}/>
      </div>
    <Nomecachorro texto="Silky Terrier"/>
      <div className={"descriçao"}>
      <BiWorld size={22}/>
      <p style={{color:"green",fontWeight:"bold"}}>Austrália</p>
      </div>
        <div className={"descriçao"}>
      <CiLineHeight size={22}/>
      <p style={{color:"blue",fontWeight:"bold"}}>  23–26cm </p>
      </div>
       <div className={"descriçao"}>
      <GiWeight size={22}/>
      <p style={{color:"purple",fontWeight:"bold"}}>4,5 – 11 kg</p>
      </div>
    </div>
     <div className={"amostra"}>
      <div className={"base-foto"}>
        <img src={Img9}/>
      </div>
      <Nomecachorro texto="Pug"/>
      <div className={"descriçao"}>
      <BiWorld size={22}/>
      <p style={{color:"green",fontWeight:"bold"}}>China</p>
      </div>
        <div className={"descriçao"}>
      <CiLineHeight size={22}/>
      <p style={{color:"blue",fontWeight:"bold"}}>30 - 36cm </p>
      </div>
       <div className={"descriçao"}>
      <GiWeight size={22}/>
      <p style={{color:"purple",fontWeight:"bold"}}>6,35-8,16 kg.</p>
      </div>
    </div>
     <div className={"amostra"}>
      <div className={"base-foto"}>
        <img src={Img10}/>
      </div>
     <Nomecachorro texto="Pastor Alemão"/>
      <div className={"descriçao"}>
      <BiWorld size={22}/>
      <p style={{color:"green",fontWeight:"bold"}}>Alemanha</p>
      </div>
        <div className={"descriçao"}>
      <CiLineHeight size={22}/>
      <p style={{color:"blue",fontWeight:"bold"}}>60–65 cm </p>
      </div>
       <div className={"descriçao"}>
      <GiWeight size={22}/>
      <p style={{color:"purple",fontWeight:"bold"}}> 30–40 kg</p>
      </div>
    </div>
    </section>

    
    </>
  )
}

export default App
