import React from 'react';
import './App.css';
import './assets/title'
import SimpleSlide from './assets/title';
import './index.css';
import health from './assets/health.jpeg';
import { NewsContextProvider } from "./assets/Get_News";
import News from "./assets/news";

function Politics() {
  return (
    <div>
      <img src={health} style={{
        zIndex: -50,
        position: "fixed",
        height: '140%',
        width: 'auto',
      }}></img>
    <div>
      <SimpleSlide title={'Health'} titleColor = {'Black'}></SimpleSlide>
      <NewsContextProvider category='health'>
      <News />
    </NewsContextProvider>
    </div>
  </div>
  );
}

export default Politics;