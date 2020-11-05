
import React from 'react';
import './App.css';
import './assets/title'
import SimpleSlide from './assets/title';
import NewsBox from './assets/news_box';
import './index.css';
import Background from './assets/Background.mp4';

function Business() {
  return (
    <div>
      <div class="fullscreen-bg">
    <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" id="myVideo">
      <source src={Background} type="video/mp4"/>
    </video>
  </div>
    <div>
      <SimpleSlide title={'Business'} titleColor = {'White'}></SimpleSlide>
      <NewsBox></NewsBox>
    </div>
  </div>
  );
}

export default Business;