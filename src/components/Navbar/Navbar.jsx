import React from 'react';
import "./Navbar.css"
import {motion} from "framer-motion";
import { type } from 'os';

function Navbar() {
  return (
    <div className='n-wrapper'>
        <div className='n-left'> 
          <div className='n-name'>Manish</div> 
        </div>

        <div className='n-right'> 
        <div className='n-list'>
            <ul>
                <motion.li
               whileHover={{scale:1.6}}
               whileTap={{scale:0.8}}
               transition={{type:"spring",stiffness:400,damping:10}}

                ><a  className='a'href='#skills'>Skills</a></motion.li>

                <motion.li
                whileHover={{scale:1.6}}
               whileTap={{scale:0.8}}
               transition={{type:"spring",stiffness:400,damping:10}}
               ><a className='a' href='#projects'>Projects</a></motion.li>

                <motion.li
                whileHover={{scale:1.6}}
               whileTap={{scale:0.8}}
               transition={{type:"spring",stiffness:400,damping:10}}>
                <a
                 className='a' href='#find-me'>Find me</a></motion.li>

                <motion.li
                whileHover={{scale:1.6}}
               whileTap={{scale:0.8}}
               transition={{type:"spring",stiffness:400,damping:10}}
               ><a className='a' href='#contact'>Contact</a></motion.li>
            </ul>
        </div>

        {/* <a href='#contact' className='n-button'><button>Contact me</button></a> */}
        </div>
    </div>
    
  )
}

export default Navbar;