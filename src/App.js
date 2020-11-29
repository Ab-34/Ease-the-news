import React from 'react';
import './pages/App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Business from './pages/business';
import Sports from './pages/sports';
import Politics from './pages/health';
import Entertainment from './pages/entertainment';
import Science from './pages/science';
import Home from './components/index';
import Signin from './components/signin';
import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>
({
 
    signIn: {
        width: '450px',
        margin: '0px auto 50px auto',
        background: '#ffffff',
        padding: '40px 55px 45px 55px',
        border: '15px',
        
    },
}));

class FixedTopComponent extends React.Component {
  render() {
    
      const vert_align = {
      display: 'flex',
      flexDirection: 'column'
  };
    return(
    <div id='fixed-top' style={vert_align} fixed='top'>
        <Navbar />
    </div>
    );
  }
}

function App() {
  const classes = useStyles();
    const [checked, setChecked]=useState(false);
    useEffect(()=> {
        setChecked(true);
    },[]);
  return (
    <div>
    <Router>
      <div style={{display:'flex',flexDirection:'column'}} >
     <FixedTopComponent />
     </div>
     <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/business' component={Business} />
        <Route path='/sports' component={Sports} />
        <Route path='/politics' component={Politics} />
        <Route path='/entertainment' component={Entertainment} />
        <Route path='/science' component={Science} />
        <div className={classes.signIn}>
        <Route path='/signin' component={Signin}/>
        </div>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
