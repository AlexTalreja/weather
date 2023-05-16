import React, { useState } from "react";
import {useEffect} from "react";

function Forecast({latitude, longitude}) {

    const[weatherData, setWeatherData] = useState([]);

    

      useEffect(() => {
        async function fetchWeatherData() {
        try{
          const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_key}`);
         
          const data = await response.json();
          setWeatherData(data);
        }
        catch (error){
            console.log("There was an error: " + error);
        }
        }
        fetchWeatherData();
      }, [latitude, longitude]);
      


    return (
        
        <div>
            
            <h1>Today's Hourly Forecast!</h1>
            
            {weatherData.length === 0 || !weatherData.list ? <p> No data. </p> :
      (
        <div>

            {weatherData?.list.slice(0, 8).map((item, index) => (
            <p key={index}>
            <img src={`https://openweathermap.org/img/wn/${item.weather[0]?.icon}@2x.png`}
            alt="Weather Icon" />
            {item.dt_txt.toString().slice(-8)} Average Temperature: {item.main?.temp} K<br>
            </br>
            {item.weather[0]?.description} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Humidity: {item.main?.humidity}
            </p>
            
            ))}

            
            <h1> This Upcoming Week:</h1>
            <p>{weatherData?.list[8]?.dt_txt.toString().substring(0, 10)} Average Temperature: {weatherData?.list[8]?.main?.temp} K </p>
            <p>{weatherData?.list[16]?.dt_txt.toString().substring(0, 10)} Average Temperature: {weatherData?.list[16]?.main?.temp} K</p>
            <p>{weatherData?.list[24]?.dt_txt.toString().substring(0, 10)} Average Temperature: {weatherData?.list[24]?.main?.temp} K </p>
            <p>{weatherData?.list[32]?.dt_txt.toString().substring(0, 10)} Average Temperature: {weatherData?.list[32]?.main?.temp} K</p>
            <p>{weatherData?.list[39]?.dt_txt.toString().substring(0, 10)} Average Temperature: {weatherData?.list[39]?.main?.temp} K</p>
            
        </div>
      )}
            
            

        </div>


    );
}

export default Forecast;