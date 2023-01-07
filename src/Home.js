import React from "react";
import './home.css'

import { Outlet, useNavigate } from "react-router-dom";
import "./index.css";
import Skills from "./skills/Skills";
import vue from "./skills/vue-dot-js.svg";
import reacticon from "./icons8-react.png";
import adbicon from "./adobe-after-effects.svg";
import sassicon from "./sass.svg";
import githubicon from './skills/github.svg'
import Projects from "./projects/Projects";
import Title from "./titles/Title";
import ContactForm from "./contact/ContactForm";
import Seo from "./Seo";
export default function Home() {



  const navigate = useNavigate();
  return (
    <main className="home-top-container">
    
      <Seo
      title ='sunday famous portfolio-Home page'
      description='Sunday Famous portfolio. I am a Software Engineer. Some of my web designs are shown here'
       type= 'website'
       name='Sunday Famous'/>

      <section className="section-one">
        <header className="home-bio-container">
          <h2 className="home-title"> Web Developer</h2>
          <p className="home-tex">
            I'm a Software Engineer, I'm
            passionate about any thing I do. I have build some useful web
            Applications and Contributed to open source. some of my web projects
            can be found and access through my repository page. you can also
            check out my profile on github.
          </p>
          <div className="home-btn-wrap">
            <button
              className="home-btn"
              onClick={() => {
                navigate("/repos");
              }}
            >
              Repository
            </button>
            <button
              className="home-btn-profile"
              onClick={() => {
                window.open("https://github.com/kperusi");
              }}
            >
              Github Portfolio
            </button>
          </div>
        </header>
        <header className="home-avatar">
          <div className="home-avatar-background"></div>
          <div className="home-image-wrap">
            <div className="home-name">
              <h1 className="famous">Famous</h1>
              <h1 className="sundays">Sunday</h1>
            </div>
            <div className="home-image"></div>
            <div className="home-image-circle-two"></div>
          </div>
        </header>
      </section>


      <section className="section-two">
       
        <Title name="Skills" alias="My can do" paddingLeft=''/>
        <Skills
          name="React Js"
          imgscr={reacticon}
          imgName="vue"
          description="A Javascript Library for building Components"
        />

        <Skills
          name="Vue Js"
          imgscr={vue}
          imgName="vue"
          description="A Javascript Library for building Components"
        />
        <Skills
          name="SASS"
          imgscr={sassicon}
          imgName="vue"
          description="A Javascript Library for building Components"
        />

        <Skills
          name="Adobe After Effect"
          imgscr={adbicon}
          imgName="vue"
          description="A Video Editing Tool"
        />
         <Skills
          name="Git and Github"
          imgscr={githubicon}
          imgName="git"
          description="A Version Control Tool"
        />
      </section>

      <section className="section-three">
        <Title
         name="Projects"
         alias="My Web Creations" 
        headerColor='#3498db14' 
        paddingLeft='40px'
        subHeaderColor='#3498ee44' 
        />
        <Projects/>
     
      </section>

      <section className="section-four">

        <Title name="Contact" alias="Contact me or catch-up with me" right='right' textColor='white'/>
      <ContactForm/>
      </section>

      <Outlet />
    </main>
  );
}
