import React from 'react'
import { FaBriefcase, FaCode, FaComment, FaFacebook, FaGlobe, FaInstagram, FaLinkedin, FaTwitter, FaUserCircle, FaWhatsapp } from 'react-icons/fa'
import {SidebarWrapper, TopList, SideMenu} from './SidebarElement'
function Sidebar() {
  return (
    <SidebarWrapper>
       <TopList>
         <div>
         </div>
         <div>
         </div>
         <div>
         </div>
       </TopList>
       <SideMenu>
         <li>
            <FaGlobe className='l-ico'/>
            <a href="/">Home</a>
         </li>

         <p>Categories</p>

         <li>
            <FaBriefcase className='l-ico'/>
            <a href="/#skills">Skills</a>
         </li>
         <li>
            <FaUserCircle className='l-ico'/>
            <a href="/#about">About</a>
         </li>
         <li>
            <FaCode className='l-ico'/>
            <a href="/#projects">Portfolio</a>
         </li>
         <li>
            <FaComment className='l-ico'/>
            <a href="/#contact">Contact</a>
         </li>
         
         <p>Social Links</p>

         <li>
            <FaFacebook className='l-ico'/>
            <a href="https://facebook.com/raymondowusuababio">Facebook</a>
         </li>
         <li>
            <FaTwitter className='l-ico'/>
            <a href="https://twitter.com/hezray10">Twitter</a>
         </li>
         <li>
            <FaInstagram className='l-ico'/>
            <a href="https://instgram.com/hezray10">Instagram</a>
         </li>
         <li>
            <FaLinkedin className='l-ico'/>
            <a href="https://linkedin.com/in/raymondowusu">Linkedin</a>
         </li>
         <li>
            <FaWhatsapp className='l-ico'/>
            <a href="https://wa.me/+233248706500">WhatsApp</a>
         </li>
       </SideMenu>
    </SidebarWrapper>
  )
}

export default Sidebar