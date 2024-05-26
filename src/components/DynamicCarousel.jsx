import React, { useState, useEffect } from "react";
import { Carousel, Image } from 'react-bootstrap';
import './styles.css';

const DynamicCarousel = ({ challengesInfo }) => {
    // Filter out only the elements with Highlight set to true
    console.log("My highlighted challenges", challengesInfo)
    if (!challengesInfo || challengesInfo.length === 0) {
      return null; // or return a placeholder message or loading indicator
    }
    const highlightedChallenges = challengesInfo.filter(challenge => challenge.Highlight);
    return (
      <Carousel fade interval={4000} className="carousel" >
        {highlightedChallenges.map((challenge, index) => (
          <Carousel.Item key={index}>
          <Image src={challenge.ProjectPic} rounded className="carousel-image"></Image>
            {/* <ExampleCarouselImage text={challenge.ProjectName} /> */}
            <div className="black-overlay"></div>
            <Carousel.Caption>
              <h3>{challenge.ProjectName}</h3>
              <p>{challenge.ShortInfo}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
};

export default DynamicCarousel;
