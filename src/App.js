import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import './App.css';
import Abouts from './components/pages/About';
import Careers from './components/pages/Careers';
import News from './components/pages/News';
import Contact from './components/pages/Contact';
import GMTP from './components/pages/GMTP';
import Search from './components/pages/Search';

function App() {
  return (
<>
<Router>
    <Navbar />
  <Switch>
      <Route path='/' exact component={Home} />   
      <Route path='/about' exact component={Abouts} />   
      <Route path='/careers' exact component={Careers} />   
      <Route path='/news' exact component={News} />   
      <Route path='/contact' exact component={Contact} />   
      <Route path='/careers/traniees' exact component={GMTP} />   
      <Route path='/search' exact component={Search} />   
y
     </Switch>
   </Router>
</>
  );
}

export default App;
