import React from 'react';
import './Banner.css'
import banner from '../../../images/rashedul.png'
const Banner = () => {
    return (
        <div className="container-fluid total" >
        <div class="row ">
          <div class="col-sm-12 col-md-6 col-lg-6 content">
            <div>
            <h1 style={{color:"black"}}>Hey, I am Rashedul islam Mamun </h1><br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores neque deserunt eligendi. Voluptas, labore vero sed itaque, laudantium quaerat facere molestias placeat debitis officia provident, deleniti reprehenderit fugit maiores cum.</p>
            <br />
            <a className="btn btn-primary" href="https://drive.google.com/uc?export=download&id=1k55AWdXxiXw4wzy5vMQYmia_CjS_rWyj" > Download Resume </a>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-6">
           <img src={banner} alt="" />
          </div>
          
        </div>
        </div>
        
      
        
    );
};

export default Banner;