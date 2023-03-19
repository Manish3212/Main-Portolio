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
import mongodb from "../../img/logos/mongodb.png"
import mongoose from "../../img/logos/Mongoose.png"

// import hacker from "../../img/logos/hacker.png"
import {motion} from 'framer-motion';


function skills() {
  const transition={duration:1,type:'spring'};
  return (
    <motion.div
    // initial={{opacity:0.6}}
    // onhover={{opacity:1}}
    // animate={{
    //   scale:[1,0.9,1,0.9,1]}}
    // transition={{type:"spring", duration:2,damping:10}}
     className='skill-div' id='skills'>

    <motion.div
    initial={{opacity:0}}
    animate={{
      opacity:1,
      scale:[1,1.6,1.3,1.6,1,1.6,1.3,1.6],
    opacity:1}}
    transition={{
      duration:2,
      ease:"easeInOut" }}

     className='heading'>
       <h1>My Skills</h1>
     </motion.div>


    <motion.div
    // initial={{left:'-10rem'}}
    //  whileInView={{left:'0%'}}
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
    src={bootstrap}
    skill= "Bootstrap"
    />

    <Card 
    src={javascript}
    skill= "Javascript"
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
    {/* <Card 
    src={hacker}
    skill= "Ethical Hacker "
    /> */}
    <Card 
    src={api}
    skill= "API"
    />

    <Card 
    src={mongodb}
    skill= "Mongodb"
    />

    <Card 
    src={mongoose}
    skill= "Mongoose"
    />

   <div className='b1'></div>
   <div className='b2'></div>
   <div className='b3'></div>

    </motion.div>
    

    </motion.div>
  )
}

export default skills  