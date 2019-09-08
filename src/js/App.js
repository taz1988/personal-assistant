import React from 'react';
import ReactDOM from "react-dom";
import logo from '../images/logo.svg';
import SVG from 'react-inlinesvg';
import '../css/index.scss';
import '../css/bulma.sass';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <article class="message is-dark">
          <div class="message-header">
            <p>Dark</p>
            <button class="delete" aria-label="delete"></button>
          </div>
          <div class="message-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
          </div>
      </article>
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
