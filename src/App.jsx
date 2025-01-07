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

function App() {
  const [count, setCount] = useState(0)
  ///......
  return (
    <div className='principal-container'>

      <Navbar />
      <Jumbotron/>
      <div className='card-container mt-5' id='card-container'>
        <Card
          cardTitle="Este es el primer titulo"
          cardDescription="Lorem ipsum dolor sit amet."
          btnText='Haz click aqui'
          srcImage={milehappy}
        />
        <Card
          cardTitle="Este es el segundo titulo"
          cardDescription="Lorem ipsum dolor sit amet."
          btnText='Haz click aqui'
          srcImage={milekawai}
        />
        <Card
          cardTitle="Este es el tercer titulo"
          cardDescription="Lorem ipsum dolor sit amet."
          btnText='Haz click aqui'
          srcImage={milemoto}
        />
        <Card
          cardTitle="Este es el cuarto titulo"
          cardDescription="Lorem ipsum dolor sit amet."
          btnText='Haz click aqui'
          srcImage={mileuwu}
        />
      </div>
    </div>
  )
}



export default App
