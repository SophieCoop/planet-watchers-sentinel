import React from 'react';
import './App.css';
import DisplayImages from './components/DisplayImages';

function App() {
  
  return (
    <div className="App">
      <header className="App-header" >
        2 random Sentinel-2 images over Israel, with less than 30% clouds
      </header>
      <DisplayImages/>
    </div>
  );
}

export default App;
