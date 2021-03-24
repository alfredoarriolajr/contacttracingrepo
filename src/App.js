import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './components/Home';
import Passport from './components/Passport';
import History from './components/History';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <div className="App-header">
      <Navbar />
      <br/>
      <Route path="/" exact component={Home} />
      <Route path="/passport" exact component={Passport} />
      <Route path="/history" exact component={History} />
      <Route path="/profile" exact component={Profile} />
      </div>
    </Router>
  );
}

export default App;
