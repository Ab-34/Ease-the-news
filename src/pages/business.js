import React from 'react';
import './App.css';
import './assets/title'
import SimpleSlide from './assets/title';
import { NewsContextProvider } from "./assets/Get_News";
import News from "./assets/news";
import './index.css';
import Background from './assets/Background.mp4';

function Business() {
  return (
    <div>
      <div class="fullscreen-bg">
        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" id="myVideo">
          <source src={Background} type="video/mp4" />
        </video>
      </div>
      <div>
        <SimpleSlide title={'Business'} titleColor={'White'}></SimpleSlide>
        <NewsContextProvider category='business'>
          <News />
        </NewsContextProvider>
      </div>
    </div>
  );
}

export default Business;