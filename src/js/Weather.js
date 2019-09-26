import React from 'react';
import '../css/weather.scss'
import loading from '../images/loading.png';

class Weather extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = {
        loading : true,
        temperature : 0,
        icon : null,
        description: null
    }
  }

  componentDidMount() {
        this.loadWeatherData();
        setInterval(() => this.loadWeatherData(), 5 * 60000);
  }

    loadWeatherData()
    {
        fetch("https://api.openweathermap.org/data/2.5/weather?units=metric&q=" + this.props.location + "&APPID=" + OPEN_WEATHER_MAP_API_KEY)
              .then(res => res.json())
                    .then(
                      (result) => {
                        this.setState({
                           isLoaded: true,
                           temperature : result.main.temp,
                           icon : "https://openweathermap.org/img/wn/" + result.weather[0].icon + "@2x.png",
                           description: result.weather[0].description
                        });
                      },
                      // Note: it's important to handle errors here
                      // instead of a catch() block so that we don't swallow
                      // exceptions from actual bugs in components.
                      (error) => {
                        this.setState({
                          isLoaded: true,
                          error
                        });
                      }
                    );
    }

  render() {
    return <div class="box weather-box">
            {this.state.isLoaded? this.renderWeatherStatus() : this.loading() }
    </div>;
  }

  renderWeatherStatus()
  {
    return <div class="container container-weather">
                <img src={this.state.icon} />
                <p>{this.state.description}</p>
                <p>{this.state.temperature} Celsius</p>
                <p>Weather of {this.props.location}</p>
            </div>
  }

  loading() {
    return <div class="container container-weather-loader">
            <span class="loader">
                <img src={loading} />
            </span>
        </div>
  }
}

export default Weather;