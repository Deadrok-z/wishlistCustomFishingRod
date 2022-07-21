import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import MainPage from './components/MainPage/MainPage';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<MainPage/>} />
          <Route exact path="/newRod"/>
        </Routes>
      </div>
    </Router>
  );
}
