import './App.css'
// import Carousel from './components/carousel'
import Footer from './components/footer'
import Home from './components/home'
import Services from './components/services'
import ThoughtFlow from './components/ThoughtFlow'
import WhatMakesSection from './components/whatMakes'
import WhoWeAre from './components/whoWeAre'

function App() {

  return (
    <div>
      <Home />
      <WhatMakesSection />
      <WhoWeAre />
      {/* <Carousel /> */}
      <Services />
      <ThoughtFlow />
      <Footer />
    </div>
  )
}

export default App
