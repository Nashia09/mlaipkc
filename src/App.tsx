import { useState,useEffect } from 'react'
import './App.css'
import { useLocation } from 'react-router-dom';
// import "./App.css";
import "preline/preline";
import { Routes, Route } from "react-router-dom";
import { IStaticMethods } from "preline/preline";
import Navi from './components/Navi';
import Hero from './components/Hero';

import { Footer } from './components/Footer';
import MidSwip from './components/MidSwip';
import Video from './components/Video';
import { BlogSection } from './components/BlogSection';
import { Home } from './pages/Home';
import About from './pages/About';
// import { Blog } from './pages/Blog';

import { Faq } from './pages/Faq';
// import { Contact } from './pages/Contact';
import { Courses } from './pages/Courses';
import Instructors from './pages/Instructors';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}


function App() {
  // const [count, setCount] = useState(0)
  // const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);
   

  return (
    <div className="w-full overflow-hidden block">
    <Navi />
<Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="Faq" element={<Faq />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Courses" element={<Courses />} />
          <Route path="Instructors" element={<Instructors />} />
        </Route>
        

        
       </Routes>
        <Footer/>
{/*          
        <Navi />
        <Hero />
        <About />
        <Stats />
        <Video />
        <BlogSection />
        <Partners />
        <Footer /> */}
        {/* <MidSwip /> */}
      



    </div>
  )
}

export default App
