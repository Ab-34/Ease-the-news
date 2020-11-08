import React from 'react';
import Slide from '@material-ui/core/Slide';
import Fade from '@material-ui/core/Fade';

export default function SimpleSlide(props) {
    return(
        <Slide direction="up" in={true} timeout={{enter: 1500}} mountOnEnter unmountOnExit>
          <div style={{textAlign: "center", fontSize: "8vw", fontFamily: "Abril Fatface, cursive", color: props.titleColor}}>
              {props.title}
          </div>
        </Slide>
    );
}