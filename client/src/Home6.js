import React from 'react';
import Navbar from './component/Navbar/Navbar';
import RBanner from './component/Banner/RippleBanner';
import About from './component/About';
import Service from './component/Service';
import Portfolio from './component/Portfolio/Portfolio';
import Testimonial from './component/Testimonial/Testimonial';
import Clientslogo from './component/Clientslogo';
import Blog from './component/Blog/Blog';
import Contact from './component/Contact';
import Skill from './component/Skill/Skill';
import Footer from './component/Footer';
import alekData from './component/alekData';

export const Home6 = () => (
  <div className="body_wrapper red_color">
    <Navbar mainlogo="logo2.png" stickylogo="logo.png"/>  
    <RBanner alekData={alekData} bClass="banner_shap_two" imag="man.jpg" textLeft="text-left"/>
    <About aClass="about_area" alekData={alekData}/> 
    <Service wClass="work_area" alekData={alekData}/>
    <Portfolio/>
    <Skill/>
    <Testimonial/>
    <Clientslogo/>
    <Blog/>
    <Contact alekData={alekData}/>
    <Footer alekData={alekData}/>
  </div>
)

