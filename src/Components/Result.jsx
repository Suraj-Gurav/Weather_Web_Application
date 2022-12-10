import React from 'react';
import "./Result.css"

const Result = ({weatherData}) => {
    return (
        <div className='margin'>
                <h1>{weatherData.name} : {weatherData.main.temp}</h1>
                 <div className='flex'> 
                      <div>
                          <p>{weatherData.weather[0].main}</p>
                          <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="" />
                         
                      </div>
                      <div >
                          <p>Max-Temp : {weatherData.main.temp_max}</p>
                          <p className='margin'>Min-Temp : {weatherData.main.temp_min}</p>
                      </div>
                  </div>
          </div>
       
    );
};

export default Result;