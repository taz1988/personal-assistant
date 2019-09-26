import React from 'react';
import ReactDOM from "react-dom";
import logo from '../images/logo.svg';
import SVG from 'react-inlinesvg';
import '../css/index.scss';
import '../css/bulma.sass';
import Weather from './Weather.js'

function App() {
  return (
    <div class="columns">
      <div class="column is-one-third">
        <Weather location="Szeged" />
        <Weather location="Kecskemét" />
        <Weather location="Helvécia" />
      </div>
      <div class="column is-one-third">
          //TODO daily tasks
      </div>
      <div class="column is-one-third">
         //TODO Upcoming events
      </div>
    </div>
  );
}

export default App;
