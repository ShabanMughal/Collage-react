import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Textemonial from './Components/Textemonial/Textemonial'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/Video Player/VideoPlayer'

function App() {

  const [play,setPlay] = useState(false)


  return (
    <>
    <div>
    <Navbar />

    <Hero />

    <div className="container">
      <Title subtitle='Our PROGRAM'  title='What We Offer'/>

    <Programs />

    <About setPlay={setPlay}/>
      <Title subtitle='Gallery'  title='Campus Photo'/>

      <Campus />
      <Title subtitle='TEXTEMONIALS'  title='What Student Says'/>

      <Textemonial />
      <Title subtitle='Contact Us'  title='Get in Touch'/>

      <Contact />

      <Footer />
    </div>

    <VideoPlayer play={play} setPlay={setPlay}/>
    </div>
    </>
  )
}

export default App
