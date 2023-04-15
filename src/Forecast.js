import React, { useState } from "react";
import useEffect from "react";

function Forecast({latitude, longitude}) {

    const[weatherData, setWeatherData] = useState([]);

    
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=020f2520d02672d0b58299a4ea52d2a`)
          .then((response) => response.json())
          .then((data) => setWeatherData(data))
          .catch((error) => console.error(error));
      }, []);
      


    return (
        
        <div>
            
            <h1>This is the forecast!</h1>
            Temperature: {weatherData.main.temp}
            

        </div>


    );
}

export default Forecast;