import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

import milehappy from "./assets/milehappy.png"
import milekawai from "./assets/milekawai.png"
import milemoto from "./assets/milemoto.png"
import mileuwu from "./assets/mileuwu.png"
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)
  ///......
  return (
    <div className='principal-container'>

      <Navbar />
      <Jumbotron />
      <div className='card-container mt-5' id='card-container'>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <Card
              cardTitle="Tocando Pasto"
              cardDescription="Como olvidar ese día en el parque."
              btnText='Ve A mi IG'
              srcImage={milehappy}
              btnUrl="https://www.instagram.com/miiilechan/?hl=es-la"
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <Card
              cardTitle="Un dia en casa"
              cardDescription="Primera selfi del año!, que felicidad."
              btnText='Ve a mi TikTok'
              srcImage={milekawai}
              btnUrl="https://www.tiktok.com/@miiilechan"
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <Card
              cardTitle="Pi Pi Pii!"
              cardDescription="Como olvidar cuando me subi a una moto"
              btnText='Ve a mi X'
              srcImage={milemoto}
              btnUrl="https://x.com/miiilechan"
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <Card
              cardTitle="San Valentin"
              cardDescription="Ese dia estaba nerviosa hablando"
              btnText='Ve a mi Youtube'
              srcImage={mileuwu}
              btnUrl="https://www.youtube.com/@miiilechan"
            />
          </div>
        </div>




      </div>
      <Footer />
    </div>
  )
}



export default App
