import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';

function App() { 
  const [data, setData] = useState(null);
  const [test, setTest] = useState(1);

    useEffect(() => {
      fetch("/api")
        .then((res) => res.json())
        .then((data) => setData(data.message));
    }, []);
    

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          test: {test.abc}
        </p>
        <button onClick={()=> setTest({abc: 'abc'})} >Click me!</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <p>{!data ? "Loading...." : data} </p>
      </header>
    </div>
  );
}

export default App;
