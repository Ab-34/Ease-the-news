
import React from 'react';
import './App.css';
import './assets/title'
import SimpleSlide from './assets/title';
import NewsBox from './assets/news_box';
import './index.css';
import Sports_background from './assets/Sports_background.mp4';

function Sports() {
  return (
    <div>
      <div class="fullscreen-bg">
    <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" id="myVideo" style={{height: '130%', width: 'auto'}}>
      <source src={Sports_background} type="video/mp4"/>
    </video>
  </div>
    <div>
      <SimpleSlide title={'Sports'} titleColor = {'White'}></SimpleSlide>
      <NewsBox></NewsBox>
    </div>
  </div>
  );
}

export default Sports;