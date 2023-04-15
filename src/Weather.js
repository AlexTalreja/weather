import React, { useState } from "react";
import './Forecast.js';
import Forecast from './Forecast.js';


function Weather() {
    console.log(process.env.REACT_APP_API_key)
    const [inputText, setInputText] = useState('');
    const [responseData, setResponseData] = useState([]);
    const key = process.env.REACT_APP_API_key;
    

    const handleInputChange = (event) => {
        setInputText(event.target.value);
      };

      const handleButtonClick = async () => {
        try {
          const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${inputText},&appid=020f2520d02672d0b58299a4ea52d2ac`);
          const data = await response.json();
          setResponseData(data);
    
          console.log(`http://api.openweathermap.org/geo/1.0/direct?q=${inputText},&appid=${key}`);
        } catch (error) {
          console.log("There was an error: " + error);
        }
      };


return (
<div>

<input type="text" value ={inputText} onChange={handleInputChange} />
<button onClick={handleButtonClick}>Check the Weather!</button>
{responseData.length === 0? (<p>No weather for that city available.</p>) : 
      (
        <div>
            <p> Stats for: {responseData[0].name}, {responseData[0].country}</p>
            <p>
            Latitude: {responseData[0].lat}  Longitude: {responseData[0].lon}
            </p>
            
            <Forecast/>
        </div>
      )}


</div>
);
}

export default Weather;