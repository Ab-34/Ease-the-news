import React from 'react';
import './pages/App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Business from './pages/business';
import Sports from './pages/sports';
import Politics from './pages/politics';
import Entertainment from './pages/entertainment';
import Science from './pages/science';
import Home from './components/index'

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
      </Switch>
    </Router>
    </div>
  );
}

export default App;
