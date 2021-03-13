import React from 'react';
import { MagicButton, Input, Textarea } from './components/Form';
import { Card } from './components/Card';
import { Menu } from './components/Menu/Menu.js';
import './App.css';
import Employees from './components/Employees/Employees';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Menu />
      </div>
      <div className="content">
        <div className="title">Szkoła Reacta - moduł 3</div>
        <Input bgColor="white"
          color="turquise"
          borderSize="6"
          borderColor="red"
          borderRadius="3" />
        <Textarea bgColor="white" />
        <MagicButton icon="user" bgColor="turquise" color="white" label="aaa" />
        <div>
          <Card
            title="Shrimp and Chorizo Paella"
            intro="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like." />
        </div>
        <div>
          <Employees />
        </div>
      </div>
    </div>
  );
}


export default App;