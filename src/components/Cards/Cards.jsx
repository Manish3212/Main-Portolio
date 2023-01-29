import React from 'react'
import "../Cards/Cards.css"
function Card(props) {
  return (

    <div className='card'>
    <img src={props.src} alt='html-5'/><br/>
    <span>{props.skill}</span><br/>
    {/* <span>{props.text}</span> */}
    </div>
  )
}

export default Card;