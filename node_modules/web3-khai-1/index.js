import React from 'react';
import { Carousel } from 'react-bootstrap';

const CustomCarousel = ({ items }) => {
  return (
    <Carousel>
      {items.map((item, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-blockgit w-100"
            src={item.imageUrl}
            alt={item.caption}
          />
          <Carousel.Caption>
            <h3>{item.caption}</h3>
            <p>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
