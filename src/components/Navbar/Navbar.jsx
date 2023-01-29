import React from 'react';
import "./Navbar.css"

function Navbar() {
  return (
    <div className='n-wrapper'>
        <div className='n-left'> 
          <div className='n-name'>Manish</div> 
        </div>

        <div className='n-right'> 
        <div className='n-list'>
            <ul>
                <li><a href='#skills'>Skills</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#find-me'>Find me</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
        </div>

        {/* <a href='#contact' className='n-button'><button>Contact me</button></a> */}
        </div>
    </div>
    
  )
}

export default Navbar;