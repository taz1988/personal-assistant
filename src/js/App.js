import React from 'react';
import ReactDOM from "react-dom";
import logo from '../images/logo.svg';
import SVG from 'react-inlinesvg';
import '../css/index.scss';
import '../css/bulma.sass';
import Weather from './Weather.js'
import TaskList from './TaskList.js'

function App() {
  return (
    <div class="columns">
      <div class="column is-one-third">
        <Weather location="Szeged" />
        <Weather location="Kecskemét" />
        <Weather location="Helvécia" />
      </div>
      <div class="column is-two-third">
          <TaskList title="Daily tasks" />
      </div>
    </div>
  );
}

export default App;
