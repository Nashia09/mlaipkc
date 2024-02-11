import { useState, useEffect } from "react";
import "./App.css";
import { useLocation } from "react-router-dom";
// import "./App.css";
import "preline/preline";
import { Routes, Route } from "react-router-dom";
import { IStaticMethods } from "preline/preline";
import Navi from "./components/Navi";
import Hero from "./components/Hero";

import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import About from "./pages/About";

import { Faq } from "./pages/Faq";
import { Courses } from "./pages/Courses";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Facilitators from "./pages/Facilitators";
import { Instructors2 } from "./pages/Instructors2";
import { Training } from "./pages/Training";
import { Partners } from "./pages/Partners";
import { Facilities } from "./pages/Facilities";
import CourseDetails from "./pages/CourseDetails";
import CoursePage from "./pages/CoursesPage";

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
    <div className="w-full  overflow-hidden block ">
      <Navi />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="Faq" element={<Faq />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Courses" element={<Courses />} />
          <Route path="Instructors" element={<Instructors2 />} />
          <Route path="Faci" element={<Facilitators />} />
          <Route path="Training" element={<Training />} />
          <Route path="Partners" element={<Partners />} />
          <Route path="Facilities" element={<Facilities />} />
          <Route path="CourseDetail" element={<CourseDetails />} />
          <Route path="CoursesPage" element={<CoursePage />} />


          
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
