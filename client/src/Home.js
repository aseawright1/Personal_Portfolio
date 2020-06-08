import React from 'react';
import NavbarTwo from './component/Navbar/NavbarTwo';
import Banner from './component/Banner/Banner';
import About from './component/About';
import Service from './component/Service';
// import Portfolio from './component/Portfolio/Portfolio';
// import Testimonial from './component/Testimonial/Testimonial';
// import Clientslogo from './component/Clientslogo';
import Blog from './component/Blog/Blog';
// import BlogTwo from './component/Blog/BlogTwo';
import MapContainer from './component/Map';
import Contact from './component/Contact';
// import Skill from './component/Skill/Skill';
import Footer from './component/Footer';
// import FooterTwo from './component/FooterTwo';
import alekData from './component/alekData';


export const Home = () => (
  <div className="body_wrapper">
      <NavbarTwo mContainer="custom_container" mainlogo="logo2.png" stickylogo="logo.png"/>  
      <Banner alekData={alekData}/>
      <About aClass="about_area" alekData={alekData}/> 
      <Service wClass="work_area" alekData={alekData}/>
      <Blog/>
      {/* <Portfolio/> */}
      {/* <Skill/> */}
      {/* <Testimonial/> */}
      {/* <Clientslogo/> */}
      <MapContainer/>
      <Contact alekData={alekData}/>
      <Footer alekData={alekData}/>
  </div>
)

