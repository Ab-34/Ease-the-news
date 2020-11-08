import React from 'react';
import './App.css';
import './assets/title'
import SimpleSlide from './assets/title';
import './index.css';
import Entertainment_background from './assets/Entertainment_background.mp4';
import { NewsContextProvider } from "./assets/Get_News";
import News from "./assets/news";

function Science() {
  return (
    <div>
      <div class="fullscreen-bg">
    <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" id="myVideo" style={{height: '130%', width: 'auto'}}>
      <source src={Entertainment_background} type="video/mp4"/>
    </video>
  </div>
    <div>
      <SimpleSlide title={'Entertainment'} titleColor = {'Black'}></SimpleSlide>
      <NewsContextProvider category='entertainment'>
      <News />
    </NewsContextProvider>
    </div>
  </div>
  );
}

export default Science;