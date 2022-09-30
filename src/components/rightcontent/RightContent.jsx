import React from 'react'
import {FaBootstrap, FaCloud, FaCloudDownloadAlt, FaCommentMedical, FaCss3, FaEnvelope, FaHtml5, FaJava, FaJsSquare, FaMapMarked, FaNetworkWired, FaNodeJs, FaPhone, FaPhp, FaPython, FaReact, FaSass } from 'react-icons/fa'
import {RightContentWrapper, IdentityWrapper} from './RightContentElement'
function RightContent() {
  return (
    <RightContentWrapper>
      <IdentityWrapper>
        <div>
            <h2>Raymond Owusu Ababio</h2>
            <p>Frontend Developer | Digital Marketer</p>
        </div>
        <div className='cv'>
            <a href="/">Download Resume </a>
            <FaCloudDownloadAlt className='d-ico' />
        </div>
      </IdentityWrapper>
      <section id='skills' className='skills_section'>
        <h3 className='heading'>Skills</h3>
        <div className="skill_container">
          <article>
            <div>
                <h5>HTML</h5>
                <FaHtml5 className='c-ico'/>
            </div>
            <div>
                <h5>CSS</h5>
                <FaCss3 className='c-ico'/>
            </div>
            <div>
                <h5>SASS</h5>
                <FaSass className='c-ico'/>
            </div>
            <div>
                <h5>REACT JS</h5>
                <FaReact className='c-ico'/>
            </div>
            <div>
                <h5>NODE JS</h5>
                <FaNodeJs className='c-ico'/>
            </div>
          </article>
          <article>
            <div>
                <h5>JAVA</h5>
                <FaJava className='c-ico'/>
            </div>
            <div>
                <h5>PYTHON</h5>
                <FaPython className='c-ico'/>
            </div>
            <div>
                <h5>PHP</h5>
                <FaPhp className='c-ico'/>
            </div>
            <div>
                <h5>NETWORKING</h5>
                <FaNetworkWired className='c-ico'/>
            </div>
            <div>
                <h5>CLOUD COMPUTING</h5>
                <FaCloud className='c-ico'/>
            </div>
          </article>
        </div>
      </section>
      <section id='about' className='about_section'>
        <h3 className='heading'>About Me</h3>
        <div className='about_content'>
           <div>
            <h6>Hello there,</h6>
            <p>
             My name is Raymond Owusu Ababio, I'm 22 years old and a self-taught developer. I have a wide range of technical skills that I learned and continue to improve through self-education. I have over 2 years of industry experience developing fun and interactive games for mobile and web platforms. I am pursuing a career in front-end development and learning modern front-end web languages and technologies. I am a self-motivated and driven individual who is constantly eager to learn and experiment with new things.
            </p>
           </div>
        </div>
      </section>
      <section id='projects' className='project_section'>
        <h3 className='heading'>Projects</h3>
        <div className='project_content'>
           <article>
            <div>
                <small href="/">E-commerce Product Page</small>
                <p>
                 This is my solution to the E-commerce product page challenge on <strong>Frontend Mentor</strong>. Working on this gave in-depth experience using ReactJS and its core features like props, hooks, context API etc.
                </p>
                <div>
                    <FaHtml5 />
                    <FaCss3 />
                    <FaBootstrap />
                    <FaJsSquare />
                </div>
            </div>
           </article>
           <article>
             <div>
                <small href="/">Blog Landing Page</small>
                <p>
                 This is my solution to the blogr landing page challenge on <strong>Frontend Mentor</strong>. Working on this gave in-depth experience using HTML,With CSS properties like the Flex-Box, Box Module and JavaScript. 
                </p>
                <div>
                 <FaHtml5 />
                 <FaCss3 />
                 <FaReact />
                 <FaJsSquare />
                </div>
             </div>
           </article>
           <article>
            <div>
                <small href="/">E-commerce Product Page</small>
                <p>
                 This is my solution to the Zip Fashion product page challenge on Capstone Project <strong>At Whizzy Academy</strong>. Working on this gave in-depth experience using ReactJS and its core features like props, hooks, context API etc.
                </p>
                <div>
                 <FaHtml5 />
                 <FaCss3 />
                 <FaReact />
                 <FaJsSquare />
                </div>
            </div>
           </article>
           <article>
            <div>
                <small>E-commerce Product Page</small>
                <p>
                 This is my solution to the E-commerce product page challenge on <strong>Frontend Mentor</strong>. Working on this gave in-depth experience using ReactJS and its core features like props, hooks, context API etc.
                </p>
                <div>
                 <FaHtml5 />
                 <FaCss3 />
                 <FaJsSquare />
                 <FaReact />
                </div>
            </div>
           </article>
        </div>
      </section>
      <section id='contact' className='contact_section'>
        <h3 className="heading">Contact</h3>
        <article>
            <div>
                <FaEnvelope className='c-ico'/>
                <a href='mailto://twiggledoppest@gmail.com'>Email me your query</a>
            </div>
            <div>
                <FaPhone className='c-ico'/>
                <a href='tel://0248706500'>Give me a call</a>
            </div>
            <div>
                <FaCommentMedical className='c-ico'/>
                <a href='sms://0248706500'>Let's talk plus</a>
            </div>
            <div>
                <FaMapMarked className='c-ico'/>
                <p>Kwadaso Estate</p>
            </div>
        </article>
      </section>
      <section className='copy'>
        <p>
         ©2022 All rights reserved | Designed and developed by Raymond Owusu.
        </p>
      </section>
    </RightContentWrapper>
  )
}

export default RightContent