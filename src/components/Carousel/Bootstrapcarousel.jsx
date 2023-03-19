import React from 'react'
import web1 from "../../img//logos/tindog-website.png"
import web2 from "../../img/logos/relaxing-website.png"
import drumkit from "../../img/logos/drumkit.png"
import weatherimg from "../../img/weatherimg.jpg"
import "./Bootstrapcarousel.css"
function Bootstrapcarousel() {
return(
//     <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
//   <ol class="carousel-indicators">
//     <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
//     <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//     <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//   </ol>
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img class="d-block w-100" src={weatherimg} alt="First slide"/>
//       <div class="carousel-caption d-none d-md-block">
//     <h5>Weather Project</h5>
//     <p>Backend project(Node.js , express.js , API is used) </p>
//   </div>
//     </div>
//     <div class="carousel-item">
//       <img class="d-block w-100" src={web1} alt="Second slide"/>
//       <div class="carousel-caption d-none d-md-block">
//     <h5 >First-website</h5>
//     <p>html,css,bootstrap is used</p>
//   </div>
//     </div>
//   <div class="carousel-item">
//       <img class="d-block w-100" src={drumkit} alt="third slide"/>
//       <div class="carousel-caption d-none d-md-block">
//     <h5>Drum kit</h5>
//     <p>html,css,javascript</p>
//   </div>
//     </div>
// </div>


//   <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="sr-only">Previous</span>
//   </a>
//   <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="sr-only">Next</span>
//   </a>
// </div>

<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">

 

    <div class="carousel-item active">
    <a href='https://manish3212.github.io/tindog-project.github.io/' target="_blank" rel="noopener noreferrer">
      <img class="d-block w-100" src={web1} alt="first slide"/>
    </a>
    </div>

    <div class="carousel-item">
    <a href='https://weather-project-99dx.onrender.com/' target="_blank" rel="noopener noreferrer">
      <img class="d-block w-100" src={weatherimg} alt="second slide"/>
    </a>
    </div>

    <div class="carousel-item">
    <a href='https://manish3212.github.io/project-drum-kit.github.io/' target="_blank" rel="noopener noreferrer">
      <img class="d-block w-100" src={drumkit} alt="Third slide"/>
    </a>
    </div>

  {/* <div className='carousel-item'>
  <a href='https://manish3212.github.io/relaxing-website.github.io/' target="_blank" rel="noopener noreferrer">
    <img class="d-block w-100" src={web2} alt="fourth slide"/>
  </a>
  </div> */}

</div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
)
}
export default Bootstrapcarousel