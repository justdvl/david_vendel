import React from 'react';
import './App.css';
import Headline from './components/Headline';
import { Routes } from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
        <Headline />
        <Router >
            <Routes />
      </Router>
    </>
  );
}

export default App;
