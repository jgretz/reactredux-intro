// imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../actions/index';

// class
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  render() {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input className="form-control"
          placeholder="Get a five-day forecast in your favorite cities"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button className="btn btn-secondary" type="submit">Submit</button>
        </span>
      </form>
    );
  }

  onInputChange(event) {
    this.setState({
      term: event.target.value
    });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }
}

// maps
const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchWeather }, dispatch);
}

// export
export default connect(null, matchDispatchToProps)(SearchBar);
