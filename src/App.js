import React from 'react';
import logo from './logo.svg';
import './App.css';
import './App.scss';

import Sidebar from './comps/sidebar';
import Card from './comps/cards';
import CardItem from './comps/card_item';

function App() {
  return (
    <div className="App">
        <Sidebar />
        <div style={{width:'100%', marginTop:'20px'}}>
        <Card />
        </div>
    </div>
  );
}

export default App;
