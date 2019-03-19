import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "9353922029a30cfb4937ae8e6de2e6d2";

//***********************************************Function GetWeather */https://www.youtube.com/watch?v=204C9yNeOYI
class App extends React.Component {
  //state is an object that lives within a component and is responsible for keeping track  or changing data within a component. That change could be the result of the user interaction maybe using a button or a user submitting a form but generally is just some sort of interaction with the application that causes the data to change. In the old version of react it was like that
  //constructor(props) {
  //      super(props);
  //      this.state = {
  //      }
  //}
  //Now we write just state={}
  //It's the initial state of the object

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };

  getWeather = async e => {
    //e in the argument of the function and e.preventDefault() prevents the default behaviour (full page refresh) when we press the button, so in the consolelog we should see the object back
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    //We've made a constant that takes a function, makes the API call and converts the API calling the json method and assings it to a const called "data"

    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`
    );
    //Passing the variable api_call and calling the Json method. Json (JavaScript Object notation) converts the data that it gets from the API to a readable format that any programming language can understand.
    const data = await api_call.json();

    //To avoid that our app breaks and it return an ERROR temperature: undefined (as setted in the App.js in the "state" object) if the users click the button without entering values (writing a city and a country) we need to set this check. If city===true and country===true then show the values
    if (city && country) {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        //we need to access the array[0]
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values!"
      });
    }
  };
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather
                    //Defined all these props here it means that we have access of them in the weather.js
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
