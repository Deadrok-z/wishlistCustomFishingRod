import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import MainPage from './components/MainPage/MainPage';
import NewRodPage from './components/NewRodPage/NewRodPage';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<MainPage/>} />
          <Route path="/newRod" element={<NewRodPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}
