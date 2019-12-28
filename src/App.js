import React from 'react';
// import ReactDOM from "react-dom";
import Routes from './Components/Routes/Routes'
import Navbar from './Components/Navbar/Navbar'
// import { Router, Route, Switch, Redirect } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
