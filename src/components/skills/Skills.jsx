import React from 'react'
import "../skills/skills.css"
import Card from "../Cards/Cards.jsx"

import html from "../../img/logos/html.png"
import css from "../../img/logos/css3.png"
import javascript from "../../img/logos/javascript.png"
import bootstrap from "../../img/logos/bootstrap.png"
import express from "../../img/logos/express.png"
import jquery from "../../img/logos/jquery.png"
import nodejs from "../../img/logos/nodejs.png"
import react from "../../img/logos/react.png"
import tailwind from "../../img/logos/tailwind.png"
import api from "../../img/logos/api.png"
import hacker from "../../img/logos/hacker.png"
import {motion} from 'framer-motion';


function skills() {
  const transition={duration:2,type:'spring'};
  return (
    <div className='skill-div' id='skills'>

    <motion.div
    
     className='heading'>
       <motion.h1>My Skills</motion.h1>
     </motion.div>


    <motion.div
    initial={{left:'-20%'}}
     whileInView={{left:'0%'}}
    transition={transition}
     className='skills'>
    {/* {cards} */}

    <Card
    src={html}
    skill= "HTML5"
    />

    <Card
    src={css}
    skill= "CSS3"
    />
    <Card 
    src={javascript}
    skill= "Javascript"
    />
    <Card 
    src={bootstrap}
    skill= "Bootstrap"
    />
    <Card 
    src={jquery}
    skill= "Jquery"
    />
    <Card 
    src={nodejs}
    skill= "Node.js"
    />
    <Card 
    src={express}
    skill= "Express"
    />

    <Card 
    src={tailwind}
    skill= "Tailwind"
    />
    <Card 
    src={react}
    skill= "React"
    />
    <Card 
    src={hacker}
    skill= "Ethical Hacker "
    />
    <Card 
    src={api}
    skill= "API"
    />

   <div className='b1'></div>
   <div className='b2'></div>
   <div className='b3'></div>

    </motion.div>
    

    </div>
  )
}

export default skills  