import React from 'react';
import '../css/weather.scss'

class Weather extends React.Component {
  render() {
    return <div class="box weather-box">
    <p>Weather {this.props.location}</p>
    </div>;
  }
}

export default Weather;