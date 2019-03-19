import React from "react";

class Weather extends React.Component {
  render() {
    return (
      //Display on the screen the props after we click the button getWeather. Data passes from the consoleLog to the display
      <div>
        {/* && condition operator for react, that shows the text below(Location, Temp, Hum etc) just when we click the button getWeather: when the value of city && country && temp etc are true, so they contain a value */}
        {this.props.city && this.props.country && (
          <p>
            Location: {this.props.city}, {this.props.country}
          </p>
        )}
        {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
        {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
        {this.props.description && <p>Conditions: {this.props.description}</p>}
        {this.props.error && <p>{this.props.error}</p>}
      </div>
    );
  }
}

export default Weather;
