import React from 'react';
import './App.css';
import GoatPics from "./components/GoatPics";



function App() {
  return (
    <div className="App">
      <h1 className="header-style">Activity Generator</h1>
      <div className="ques">
                <p>Are you bored and need something to do?</p>
                <p>Well just click this button and then actually do something!</p>
            </div>
      <GoatPics />
    </div>
  );
}

export default App;
