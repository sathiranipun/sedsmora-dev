import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Homepage from './pages/Homepage';
import Eventspage from './pages/Eventspage';
import ConnectUs from './components/contactUs/ContactUs'

function App() {
  return (
    
      <Router>
        <Navbar />
        
          <Route path='/' exact component={Homepage} />
          <Route path='/events' component={Eventspage} />
          
        <br/><br/><br/><br/><br/>
        <ConnectUs/>
      </Router>
    
  );
}

export default App;
