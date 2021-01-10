import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Homepage from './pages/Homepage';
import HomeAbout from './components/HomeAbout/HomeAbout';

function App() {
  return (
    
      <Router>
        <Navbar />
        
          <Route path='/' component={Homepage} />
          
        <br/><br/><br/><br/><br/>
      </Router>
    
  );
}

export default App;
