import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks,Hero, Navbar,Tech,Works, StarsCanvas, Profile, Education } from './components';

const App=() =>{

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className ="bg-hero-pattern bg-cover bg-o-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Profile/>
        <Education />
        {/* <Feedbacks/> */}
        <Experience/>
        <Tech/>
        <Works/>
        <div className ="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
