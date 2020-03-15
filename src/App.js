import React from 'react';
import logo from './logo.svg';
import './App.css';
import './App.scss';

import Sidebar from './comps/sidebar';
import Card from './comps/cards';
import CardItem from './comps/card_item';
import PlanCardHolder from './comps/planCardHolder';

function App() {
  return (
    <div className="App">
        <Sidebar />
    </div>
  );
}

export default App;
