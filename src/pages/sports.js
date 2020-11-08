import React from 'react';
import './App.css';
import './assets/title'
import SimpleSlide from './assets/title';
import './index.css';
import Sports_background from './assets/Sports_background.mp4';
import { NewsContextProvider } from "./assets/Get_News";
import News from "./assets/news";

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
      <NewsContextProvider category='sports'>
      <News />
    </NewsContextProvider>
    </div>
  </div>
  );
}

export default Sports;