import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import MainPage from './components/MainPage/MainPage';
import NewRodPage from './components/NewRodPage/NewRodPage';
import DetailPage from './components/DetailPage/DetailPage';
import { Routings }  from './Routes/routes';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path={Routings.INDEX} element={<MainPage/>} />
          <Route path={Routings.NEWROD_PAGE} element={<NewRodPage/>}/>
          <Route path={Routings.DETAIL_PAGE} element={<DetailPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}
