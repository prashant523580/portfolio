
import './App.css'
import {Hero,About,Contact,Navbar,Tech,Works,StarsCanvas} from "./components"
function App() {

  return (
    <>
            <Navbar/>
     <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Hero/>
        </div>
        <About/>
        {/* <Experience/> */}
        <Tech/>
        <Works/>
        {/* <Feedbacks/> */}
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>
     </div>
    </>
  )
}

export default App
