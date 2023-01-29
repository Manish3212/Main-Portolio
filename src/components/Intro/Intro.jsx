import React from 'react'
import "./Intro.css"
import Floatingdiv from "../floatingdiv/Floatingdiv"
// import linkedin from "../../img/linkedin.png";
// import instagram from "../../img/instagram.png";
import Typical from 'react-typical'
import {motion} from 'framer-motion'
import tech from "../../img/tech.png"
import developer from "../../img/developer.png"
import Avatar from '../../img/avatar.png'
import code from '../../img/code.png'

function Intro() {
  const transition = {duration:3, type:'spring'}
  const transition2 = {duration:4, type:'spring'}
  return (
    <div className='intro' id='home'>

        <div className='i-left'>
        <div className='i-name'>
        <span>Hi, I am</span>
        <span>Manish Bharambe</span>
        <span className='text'>
        I
        <Typical 
          loop={Infinity}
          wrapper='b'
          steps={[
            ' am a Web Developer',
            2000,
            ' am a Sophomore',
            2000,
            ' am a Vibrant learner',
            2000,
            ' love music',
            2000
          ]}
        />
        </span>
        <span>
        "I am a 19-year-old Web Developer with a passion for creating modern and visually appealing websites. My goal is to help businesses and individuals achieve their online goals through beautiful and functional websites. Thanks for visiting ,feel free to reach out to me with any questions or projects you may have."


        </span>
        <br></br>
        </div>
        <a href='#contact'>
        <button className='button i-button' href="#contact"> Hire me</button>
        </a>

        {/* <div className='i-icons'>
          <img src={Github} alt="Github account"></img>
          <img src={linkedin} alt="Linkedin account"></img> 
          <img src={instagram} alt="Github account"></img>
  
        </div> */}
      <div className='blur2'></div>
    </div>

    <div className='i-right'>

       <motion.div 
        initial={{left:'-20%'}}
       whileInView={{left:'-5%'}}
       transition={transition}
       className='tech'>
        <Floatingdiv img={tech} txt1="Tech" txt2="Enthusiast" /> 
        </motion.div>

       <motion.img
        initial={{left:'30%'}}
       whileInView={{left:'15%'}}
       transition={transition2}
        src={Avatar} alt='Avatar'/>

       <motion.div
        initial={{left:'100%'}}
       whileInView={{left:'70%'}}
       transition={transition}
       className='floating-div'
        >
        <Floatingdiv img={developer} txt1="full stack" txt2="Developer" /> 
        </motion.div>

      <motion.img
      initial={{left:'-20%',top:'10%'}}
      whileInView={{left:'0%'}}
      transition = {transition}
       src={code} alt='code'
       className='floating-div'
       ></motion.img>

      {/* {blur divs} */}
      <div className='blur1'></div>

    </div>
        
    </div>

  )
}

export default Intro