import React, { useEffect, useState } from 'react';
import { NewsContextProvider } from "../pages/assets/Get_News";
import News from "../pages/assets/news";
import homepage from '../pages/assets/homepage.mp4';
import SimpleSlide from '../pages/assets/title';

export default function Header() {
    // useEffect(() => {
    //     setChecked(true);
    // }, []);
    return (
        <div>
            <div class="fullscreen-bg">
        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" id="myVideo">
          <source src={homepage} type="video/mp4" />
        </video>
      </div>
      <SimpleSlide title={'Subscribe now!'} titleColor={'White'}></SimpleSlide>
        <div>
                    <NewsContextProvider category='general'>
          <News />
        </NewsContextProvider>
        </div>
        </div>
    );
}