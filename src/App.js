import React from 'react';
// import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
// import Home from './components/Home';
// import About from './components/About';
// import Online from './components/Online';
// import Offline from './components/Offline';
// import Contact from './components/Contact';
// import Navbarmenu from './components/menu/Navbarmenu';
import Homepage from './Homepage'
function App() {
  return (
    <div>
      <Homepage/>
      {/* <Router basename="/">
   
        <Navbarmenu />
        <Switch> 
          <Route exact path="/" component={Home}/>
          <Route path="/About" component={About}/>
          <Route path="/Online" component={Online}/>
          <Route path="/Offline" component={Offline}/>
          <Route path="/Contact" component={Contact}/>
        </Switch>
      </Router> */}
    </div>
  );
}
export default App;