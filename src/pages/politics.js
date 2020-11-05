
import React from 'react';
import './App.css';
import './assets/title'
import SimpleSlide from './assets/title';
import NewsBox from './assets/news_box';
import './index.css';
import politicsBackground from './assets/politics_background.png'
import Bag2 from './assets/taxi-3.png'

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
      <SimpleSlide title={'Politics'} titleColor = {'Black'}></SimpleSlide>
      <NewsBox></NewsBox>
    </div>
  </div>
  );
}

export default Politics;