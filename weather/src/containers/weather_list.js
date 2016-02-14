// imports
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import Map from '../components/map';

// class
class WeatherList extends Component {
  constructor(props) {
    super(props);

    this.renderWeather = this.renderWeather.bind(this);
  }

  render() {
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          { this.renderWeather() }
        </tbody>
      </table>
    )
  }

  renderWeather() {
    return this.props.weather.map(({city, list}) => {
      const temps = list.map(weather => weather.main.temp);
      const pressures = list.map(weather => weather.main.pressure);
      const humidities = list.map(weather => weather.main.humidity);
      const { lat, lon } = city.coord;

      return (
        <tr key={city.id}>
          <td>
            <Map lat={lat} lon={lon} />
          </td>
          <td>
            <Chart data={temps} color='red' units="K" />
          </td>
          <td>
            <Chart data={pressures} color='orange' units="hPa" />
          </td>
          <td>
            <Chart data={humidities} color='green' units="%" />
          </td>
        </tr>
      );
    });
  }
}

// maps
const mapStateToProps = ({weather}) => {
  return { weather };
}

// export
export default connect(mapStateToProps)(WeatherList);
