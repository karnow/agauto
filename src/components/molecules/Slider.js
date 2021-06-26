import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/src/styles.js';
import zdj1 from '../../assets/img/war.jpg';
import zdj2 from '../../assets/img/war2.jpg';
import zdj3 from '../../assets/img/war3.jpg';

function Slider() {
  return (
    <AwesomeSlider className='slider' cssModule={AwsSliderStyles}>
      <div data-src={zdj1} />
      <div data-src={zdj2} />
      <div data-src={zdj3} />
    </AwesomeSlider>
  );
}

export default Slider;
