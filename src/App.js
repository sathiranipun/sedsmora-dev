import './App.scss';
import { Route, Switch, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Homepage from './pages/Homepage';
import Eventspage from './pages/Eventspage';
import ConnectUs from './components/contactUs/ContactUs';
import ScrollToTop from './components/ScrollToTop';
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react';

const App =() => {

  let location = useLocation();
  return (
    
      <div >
        <ScrollToTop/>
        <Navbar /> 
        <AnimatePresence >
          <Switch >
            <Route path='/' exact component={Homepage} />
            <Route path='/events' component={Eventspage} />
          </Switch>
        </AnimatePresence>
        <br/><br/><br/><br/><br/>
        <ConnectUs/>
     
    </div>
  );
}

export default App;
