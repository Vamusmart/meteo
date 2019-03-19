import React from "react";

class Form extends React.Component {
  render() {
    return (
      //Clicking the button Get Weather we want that the app run the function getWeather with the react attribute onSubmit that it's going to call this.props.getWeather from the App.js
      <form onSubmit={this.props.getWeather}>
        <input type="text" name="city" placeholder="City..." />
        <input type="text" name="country" placeholder="Country..." />
        <button>Get Weather</button>
      </form>
    );
  }
}

export default Form;
