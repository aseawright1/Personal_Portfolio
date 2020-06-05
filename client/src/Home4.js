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

// require('../../image/Sail-Away.jpg') 
export const Home4 = () => (
  <div className="body_wrapper">
      <Navbar mContainer="custome_container" mainlogo="logo2.jpg" stickylogo="logo.jpg"/>  
      <RBanner alekData={alekData} imag="Sail-Away.jpg"/>
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

