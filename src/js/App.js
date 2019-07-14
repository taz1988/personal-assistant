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
          className="App-l  ink"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("main"));
