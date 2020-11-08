import React from 'react';
import './App.css';
import './assets/title'
import SimpleSlide from './assets/title';
import './index.css';
import politicsBackground from './assets/politics_background.png'
import Bag2 from './assets/taxi-3.png';
import { NewsContextProvider } from "./assets/Get_News";
import News from "./assets/news";

function Politics() {
  return (
    <div>
      <img src={politicsBackground} style={{
        zIndex: -50,
        position: "absolute",
        height: '70%',
        width: 'auto',
        left: '65%'
      }}></img>
      <img src={Bag2} style={{
        zIndex: -50,
        position: "absolute",
        height: '70%',
        width: 'auto',
        left: '-1%'
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