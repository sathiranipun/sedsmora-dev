import './App.scss';
import { Route, Switch, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Homepage from './pages/Homepage';
import Eventspage from './pages/Eventspage';
import ConnectUs from './components/contactUs/ContactUs';
import ScrollToTop from './components/ScrollToTop';
import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react';
import Insights from './pages/Insights';
import AboutUs from './pages/AboutUs'; 
import Aos from 'aos';
import "aos/dist/aos.css"
import Blogs from './pages/Blogs';
import QRCode from './pages/QRCode';

const App =() => {

  useEffect(() => {
    Aos.init({
      easing: 'ease-in-sine',
    });
    }, []);

  return (
    
      <div >
        <ScrollToTop/>
        <Navbar /> 
        <AnimatePresence >
          <Switch >
            <Route path='/' exact component={Homepage} />
            <Route path='/events' component={Eventspage} />
            <Route path='/insights' component={Insights} />
            <Route path='/blogs' component={Blogs} />
            <Route path='/contactus' component={QRCode} />
            <Route path='/about' component={AboutUs} />
          </Switch>
        </AnimatePresence>
        
        <ConnectUs/>
     
    </div>
  );
}

export default App;
