import React from 'react';
import { MagicButton, Input, Textarea } from './components/Form';
import { Card } from './components/Card';
import './App.css';

function App() {
  return (
    <div>
      <div className="title">Szkoła Reacta - moduł 3</div>
      <Input bgColor="white" color="turquise" borderSize="6" borderColor="red" borderRadius="3" />
      <Textarea bgColor="white"></Textarea>
      <MagicButton icon="user" bgColor="turquise" color="white" label="aaa" />
      <div>
        <Card title="Shrimp and Chorizo Paella"
        intro="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like." />
      </div>
    </div>
  );
}

export default App;