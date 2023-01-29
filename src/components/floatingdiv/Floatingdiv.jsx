import React from 'react'
import './floatingdiv.css'
// import motion from 'framer-motion'
function floatingdiv(props) {
  return (
    <div className='floatingdiv'>
        <img src={props.img} alt='tech'></img>
        <span>
            {props.txt1}<br/>
            {props.txt2}
        </span>
    </div>
  )
}

export default floatingdiv