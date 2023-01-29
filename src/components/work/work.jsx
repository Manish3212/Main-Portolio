import React from 'react'
import "./work.css"
import fiverr from "../../img/logos/fiverr.png";
import upwork from "../../img/Upwork.png";
import linkedin from "../../img/linkedin.png";
import insta from "../../img/instagram.png";
import Github from "../../img/github.png";
import {motion} from 'framer-motion'
// import freelancer from "../../img/logos/freelancer.png";

function work() {
  const transition={duration:2,type:'spring'}
  return (
    <div
     className='work' id='find-me'>
        <div className='w-left'>
        <span>Find me on</span>
        </div>

        <div  className='w-right'>
            <motion.div
             initial={{left:'-20%'}}
        whileInView={{left:'0%'}}
        transition={transition}
             className='p-circle'>
                <div className='s-circle'> <a href='https://www.fiverr.com/mansih_bharambe?up_rollout=true'><img src={fiverr} alt="fiverr"/></a></div>
                <div className='s-circle'> <a href=''><img src={upwork} alt="upwork"/></a></div>
                <div className='s-circle'> <a href='https://www.instagram.com/?next=https%3A%2F%2Fwww.instagram.com%2Fdirect%2Ft%2F340282366841710300949128202505809042309%2F%3F__coig_login%3D1'><img src={insta} alt="instagram"/></a></div>
                <div className='s-circle'> <a href='https://github.com/Manish3212'><img src={Github} alt="github"/></a></div>
                <div className='s-circle'> <a href='https://www.linkedin.com/in/manish-bharambe-095485231/'><img src={linkedin} alt="linked-in"/></a></div>

            </motion.div>
        </div>
    </div>
  )
}

export default work