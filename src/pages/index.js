import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';
import Header from 'C:/Users/abhij/react-navbar/src/components/Header.js';
const useStyles = makeStyles((theme)=>({
  root : {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL +'/assets/bg.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',

  },
}));


function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
    </div>
  
  );
}

export default Home;