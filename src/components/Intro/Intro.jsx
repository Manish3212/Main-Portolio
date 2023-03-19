import React, { useRef } from 'react'
import "./Intro.css"
import Floatingdiv from "../floatingdiv/Floatingdiv"
// import linkedin from "../../img/linkedin.png";
// import instagram from "../../img/instagram.png";
import Typical from 'react-typical'
import {animate, motion} from 'framer-motion'
import tech from "../../img/tech.png"
import developer from "../../img/developer.png"
import Avatar from '../../img/avatar.png'
import code from '../../img/code.png'
// import { useFollowPointer } from "../../use-follow-pointer";



function Intro() {
  const transition = {duration:5, type:'spring'}
  const transition2 = {duration:3, type:'spring'}

  var box =  document.getElementById(".box");
  document.addEventListener("mousemove",function (e) {
    var x = e.clientX;
    var y = e.clientY;
    console.log(x)
    console.log(y)

    box.style.left=  x + "px";
    box.style.top=  y + "px";

    })
  // document.addEventListener((".box").mousemove(function (e) { 
  //   // values: e.clientX, e.clientY, e.pageX, e.pageY
  //   var x = e.clientX;
  //   var y = e.clientY;
  //   box.style.left= x + "px";
  //   box.style.top=  y + "px";
    
  // }))
  return (
    <div className='intro' id='home'>
    <div className='box'></div>
    {/* <div class="box"></div> */}

    {/* <motion.div 
    // ref={ref}
    // animate={{x,y}}
    transition={{
      type:"spring",
      stiffness:20,
      damping:10
    }}
    className='box'></motion.div> */}

        <div className='i-left'>
        <div className='i-name'>
        <motion.span
        initial={{opacity:0}}
        animate={{opacity:1}}
        
        >Hi, I am</motion.span>

        <motion.span
        //  initial={{
        //   opacity:0,
        //  scale:1}}
        //  animate={{opacity:0.7,
        //  scale:1.2}}
        // transition={{
        //     duration:3,
        //     scale:1,
        //     type:"spring",
        //     stiffness:200,
        //     damping:10
        //  }}
        initial={{opacity:0}}
    animate={{
      opacity:1,
      scale:[1,1.1,1,1.1,1,1.1,1],
    opacity:1}}
    transition={{
      duration:2,
      ease:"easeInOut" }}
     
        >Manish Bharambe</motion.span>
        <span className='text'>
        I
        <Typical 
          loop={Infinity}
          wrapper='b'
          steps={[
            ' am a Full Stack Web-Developer',
            2000,
            ' am a Content Writer',
            2000,
            ' am a Blogger',
            2000,
            ' love music',
            2000
          ]}
        />
        </span>
        <span>
        "I am a 20-year-old Web Developer with a passion for creating modern and visually appealing websites. My goal is to help businesses and individuals achieve their online goals through beautiful and functional websites. Thanks for visiting ,feel free to reach out to me with any questions or projects you may have."


        </span>
        <br></br>
        </div>

        <div className='a-button'>
        <a href='#contact'>
        <motion.button
        whileHover={{scale:1.2}}
        whileTap={{scale:0.9}}
        transition={{type:"spring",stiffness:400,damping:5}}

         className='button i-button' href="#contact"> Hire me</motion.button>
        </a>
        </div>
        

        {/* <div className='i-icons'>
          <img src={Github} alt="Github account"></img>
          <img src={linkedin} alt="Linkedin account"></img> 
          <img src={instagram} alt="Github account"></img>
  
        </div> */}
      <div className='blur2'></div>
    </div>

    <div className='i-right'>

       <motion.div 
        initial={{left:'-20%',opacity:0}}
       whileInView={{left:'-5%'}}
       transition={transition}
       animate={{opacity:1}}
       className='tech'>
        <Floatingdiv img={tech} txt1="Tech" txt2="Enthusiast" /> 
        </motion.div>

       <motion.img
        initial={{left:'30%',opacity:0}}
       whileInView={{left:'15%'}}
       transition={transition2}
       animate={{opacity:1}}
        src={Avatar} alt='Avatar'/>

       <motion.div
        initial={{left:'100%',opacity:0}}
       whileInView={{left:'70%'}}
       transition={transition}
       animate={{opacity:1}}
       className='floating-div'
        >
        <Floatingdiv img={developer} txt1="full stack" txt2="Developer" /> 
        </motion.div>

      <motion.img
      initial={{left:'-20%',top:'10%',opacity:0}}
      whileInView={{left:'0%'}}
      transition = {transition}
      animate={{opacity:1}}
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