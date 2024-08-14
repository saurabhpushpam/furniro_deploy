import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap';

import './Home.css';

import img1 from "../../images/image 1.png";
import img2 from "../../images/image 2 (1).png";
import img3 from "../../images/image 3.png";
import img4 from "../../images/image 4.png";
import img5 from "../../images/Image 5.png";
import { Link } from 'react-router-dom';


const ExploreMore = () => {



  const images = [img1, img2, img3, img4, img5];
  const captions = [
    { title: "First Image", description: "Description of the first image." },
    { title: "Second Image", description: "Description of the second image." },
    { title: "Third Image", description: "Description of the third image." },
    { title: "Fourth Image", description: "Description of the fourth image." },
    { title: "Fifth Image", description: "Description of the fifth image." },
  ];

  const [visibleImages, setVisibleImages] = useState([0, 1, 2]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleImages((prevVisibleImages) => [
        (prevVisibleImages[0] + 1) % images.length,
        (prevVisibleImages[1] + 1) % images.length,
        (prevVisibleImages[2] + 1) % images.length,
      ]);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);


  return (
    <>
      <div className='explore-main'>
        <div className='explore-title'>
          <div className='explore-title-text'>
            <p className='explore-title-headline'>  50+ Beautiful rooms inspiration </p>
            <p className='explore-title-desc'>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
          </div>
          <div className='explore-title-btn'>
            <button className='explore-btn'>Explore More</button>
          </div>
        </div>


        {/* 
        <div className="custom-carousel">
          <div className="carousel-images">
            <div className="carousel-item first-image">
              <img src={images[visibleImages[0]]} alt={captions[visibleImages[0]].title} />
              <div className="carousel-caption">
                <h3>{captions[visibleImages[0]].title}</h3>
                <p>{captions[visibleImages[0]].description}</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={images[visibleImages[1]]} alt={captions[visibleImages[1]].title} />
            </div>
            <div className="carousel-item">
              <img src={images[visibleImages[2]]} alt={captions[visibleImages[2]].title} />
            </div>
          </div>
        </div>
 */}




        <div className="custom-carousel">
          <div className="carousel-images">
            <img src={images[visibleImages[0]]} alt="First slide" className="full-image" />
            <img src={images[visibleImages[1]]} alt="Second slide" className="full-image" />
            <img src={images[visibleImages[2]]} alt="Third slide" className="partial-image" />

          </div>
        </div>

      </div>
    </>
  )
}

export default ExploreMore