import {  useEffect, useState } from "react";
import "./App.css";
import "preline/preline";
import { Routes, Route } from "react-router-dom";
import { IStaticMethods } from "preline/preline";
import Navi from "./components/Navi";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Faq } from "./pages/Faq";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Facilitators from "./pages/Facilitators";
import { Instructors2 } from "./pages/Instructors2";
import Training from "./pages/Training";
import { Partners } from "./pages/Partners";
import { Facilities } from "./pages/Facilities";
import CourseDetails from "./pages/CourseDetails";
import Card from "./components/Card";
import Abt from "./pages/Abt";
import { BlogDetails } from "./pages/BlogDetails";
import Notice from "./components/Notice";
import { Notice1 } from "./domain/models/notice";
import { useApiClient } from "./utils/api-client";
import { useAdminNoticeRepository } from "./domain/repositories/notice";

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

const App: React.FC = () => {
  // const location = useLocation();

  const [notice, setNotice] = useState<Notice1[]>([]);
  
  const apiClient = useApiClient();
  const courseRepository = useAdminNoticeRepository(apiClient);



  const allNotice = async () => {
    try {
      const response: Notice1[] = await courseRepository.listActiveNotices();
      console.log('Complete Response', response);

      // Assuming response contains a data property with the courses array
      if (response && Array.isArray(response)) {
        setNotice(response);
      } else {
        console.error('Unexpected response structure:', response);
      }
    } catch (error) {
      console.error('Api Error!', error);
    }
  };

  useEffect(() => {
    window.HSStaticMethods.autoInit();
    allNotice();
  }, [location.pathname]);

  return (
    <div className="w-full  overflow-hidden block ">
      {notice.length === 0 ? <div></div> : <Notice/>}
      <Navi />

      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          {/* <Route path="About" element={<About />} /> */}
          <Route path="Blog" element={<Blog />} />
          <Route path="Faq" element={<Faq />} />
          <Route path="Contact" element={<Contact />} />
          {/* <Route path="Courses" element={<Courses />} /> */}
          <Route path="Instructors" element={<Instructors2 />} />
          <Route path="Faci" element={<Facilitators />} />
          <Route path="Training" element={<Training />} />
          <Route path="Partners" element={<Partners />} />
          <Route path="Facilities" element={<Facilities />} />
          <Route path="CourseDetails/:id" element={<CourseDetails />} />
          <Route path="CoursesPage" element={<Card />} />
          <Route path="About" element={<Abt />} />
          {/* <Route path="Register" element={<Register />} /> */}
          <Route path="BlogDetails" element={<BlogDetails />} />

        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
