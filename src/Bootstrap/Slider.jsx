import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import"./Slider.css"

export default function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img 
          className="d-block w-100 carousel-img" 
          src="https://wallpapers.com/images/hd/colorful-abstract-code-symbols-background-c6krm08psibwb08n.jpg" 
          alt="First slide" 
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100 carousel-img" 
          src="https://getwallpapers.com/wallpaper/full/5/f/5/1172796-beautiful-developer-wallpaper-hd-1920x1200-for-windows.jpg" 
          alt="Second slide" 
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100 carousel-img" 
          src="https://applescoop.org/image/wallpapers/mac/apple-logo-apple-event-developer-apple-devices-26-09-2024-1727387908-hd-wallpaper.jpg" 
          alt="Third slide" 
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
