import React, { Component } from 'react';
import './App.css';
import Table from './components/table/table';
import ButtonTabBar from './components/buttonTabBar/buttonTabBar';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <h3 className='d-flex justify-content-left'>Main Page</h3>
        <ButtonTabBar/>
        <p className="Table-header">Wide range of available products</p>
        <Table/>
      </div>
    );
  }
}
 
export default App;
