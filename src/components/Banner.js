import React from 'react';
import { Carousel } from 'react-bootstrap';
import { listBanner } from '../services';
import './Banner.css';

function Banner() {
  return (
    <Carousel id='home-area'>
      { listBanner.map((banner, index) =>
        <Carousel.Item key={ index }>
          <img
            className='d-block w-100'
            src={ banner.img }
            alt={ banner.alt }
          />
          <Carousel.Caption>
            <h2>{ banner.title }</h2>
            <p>{ banner.description }</p>
            <a href='#' className='main-btn'>{ banner.link }</a>
          </Carousel.Caption>
        </Carousel.Item>
      ) }
    </Carousel>
  );
}

export default Banner;