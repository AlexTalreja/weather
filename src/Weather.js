import React, { useState } from "react";
import './Forecast.js';
import Forecast from './Forecast.js';


function Weather() {
    
    const [inputText, setInputText] = useState('');
    const [responseData, setResponseData] = useState([]);
    const key = process.env.REACT_APP_API_key;
    

    const handleInputChange = (event) => {
        setInputText(event.target.value);
      };

      const handleButtonClick = async () => {
        try {
          const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${inputText},&appid=${process.env.REACT_APP_API_key}`);
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
            
            <Forecast latitude={responseData[0].lat} longitude={responseData[0].lon}/>

        </div>
      )}


</div>
);
}

export default Weather;