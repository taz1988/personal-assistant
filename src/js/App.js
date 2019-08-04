import React from 'react';
import ReactDOM from "react-dom";
import logo from '../images/logo.svg';
import SVG from 'react-inlinesvg';
import '../css/index.less';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <SVG src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React, test release
        </a>
      </header>
    </div>
  );
}

export default App;
