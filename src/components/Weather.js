import React from "react";

class Weather extends React.Component {
  render() {
    return (
      //Display on the screen the props after we click the button getWeather. Data passes from the consoleLog to the display
      <div className="weather__info">
        {/* && condition operator for react, that shows the text below(Location, Temp, Hum etc) just when we click the button getWeather: when the value of city && country && temp etc are true, so they contain a value */}
        {this.props.city && this.props.country && (
          <p className="weather__key">
            Location:
            <span className="weather__value"> {this.props.city}, {this.props.country}
            </span>
          </p>
        )}
        {this.props.temperature && (
          <p className="weather__key">
            Temperature:
            <span className="weather__value"> {this.props.temperature}</span>
          </p>
        )}
        {this.props.humidity && (
          <p className="weather__key">
            Humidity:
            <span className="weather__value"> {this.props.humidity}</span>
          </p>
        )}
        {this.props.description && (
          <p className="weather__key">
            Conditions:
            <span className="weather__value"> {this.props.description}</span>
          </p>
        )}
        {this.props.error && <p className="weather__error">{this.props.error}</p>}
      </div>
    );
  }
}

export default Weather;
