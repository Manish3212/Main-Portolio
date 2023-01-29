import React from 'react';
import './portfolio.css';
import Bootstrapcarouse from '../Carousel/Bootstrapcarousel';
// import {Swiper,SwiperSlide} from "swiper/react";

import Bootstrapcarousel from '../Carousel/Bootstrapcarousel';
// import 'swiper/css'

function Portfolio() {
return(
 <div className='portfolio' id='projects'>
  <span>My Recent</span>
  <span>PROJECTS !</span>


<Bootstrapcarousel/>
</div> 
)



  


}

export default Portfolio;
// 

{/* <Swiper
        spacebetween={5}
        slidePerView={2}
        grabCursor={true}
        className='portfolio-slider'
        >
            <SwiperSlide>
                <a href='https://manish3212.github.io/tindog-project.github.io/'>
                <img src={web1} alt='tindog'/>
                </a>
            </SwiperSlide>

            <SwiperSlide>
             <a href='https://manish3212.github.io/relaxing-website.github.io/'>
                 <img src={web2} alt='relaxing-web'/>
             </a>
            </SwiperSlide>

            <SwiperSlide>
            <a href='https://manish3212.github.io/project-drum-kit.github.io/'>
                <img src={drumkit} alt='drumkit'/>
            </a>
            </SwiperSlide>
        </Swiper> */}