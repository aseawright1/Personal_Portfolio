import React from 'react';
import NavbarTwo from './component/Navbar/NavbarTwo';
import FBanner from './component/Banner/frelencerBanner';
import PortfolioSlider from './component/Portfolio/PortfolioSlider';
import ServiceTwo from './component/ServiceTwo';
import TestimonialTwo from './component/Testimonial/TestimonialTwo';
import ClientslogoTwo from './component/ClientslogoTwo';
import BlogTwo from './component/Blog/BlogTwo';
import ContactTwo from './component/ContactTwo';
import SkillTwo from './component/Skill/SkillTwo';
import FooterTwo from './component/FooterTwo';
import alekData from './component/alekData';

export const Homefrelencer = () => (
  <div className="body_wrapper">
    <NavbarTwo mClass="menu_two" mainlogo="logo-blue.png" stickylogo="logo-blue.png"/>  
    <FBanner alekData={alekData}/>
    <ServiceTwo rowFlex="flex-row-reverse"/>
    <PortfolioSlider/>
    <SkillTwo/>
    <TestimonialTwo/>
    <ClientslogoTwo/>
    <BlogTwo/>
    <ContactTwo alekData={alekData}/>
    <FooterTwo alekData={alekData}/>
  </div>
)
