import 'react-slideshow-image/dist/styles.css';
import { css } from '@emotion/react';
import React from 'react';
import { Slide } from 'react-slideshow-image';

const sliderStyle = css`
  .each-slide > div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    height: 350px;
  }

  .each-slide span {
    padding: 20px;
    font-size: 20px;
    background: #efefef;
    text-align: center;
  }
`;

const slideImages = [
  'images/logo1.jpg',
  'images/logo2.jpg',
  'images/logo1.jpg',
];

const Slideshow = () => {
  return (
    <div css={sliderStyle}>
      <Slide easing="ease">
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
            <span>Slide 1</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
            <span>Slide 3</span>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Slideshow;
