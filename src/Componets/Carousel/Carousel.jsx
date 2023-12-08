import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";

export default function CarouselComponent () {
    
  return (
     <Carousel>
      <div >
        <img src="https://i.pinimg.com/236x/21/67/49/2167490c59fd9a189b0c47c4a31d8bb1.jpg" alt="Imagen 1" />
      </div>
      <div>
        <img src="https://i.pinimg.com/564x/d9/64/32/d96432a7a5b3b20ffaa0088c050ca2c6.jpg" alt="Imagen 2" />
      </div>
      <div>
        <img src="https://i.pinimg.com/564x/5d/40/31/5d403101a4682faa86a62e60befa08bc.jpg" alt="Imagen 3" />
      </div>

    </Carousel>
  );
};