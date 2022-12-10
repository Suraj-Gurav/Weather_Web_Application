import React from 'react';
import Result from './Result';
import Search from './Search';
import "./Main.css"
import { useState } from 'react';
import axios from 'axios';

const Main = () => {
    const [cityName,setCityName]=useState();
    const [weather,setWeather]=useState([]);

    const searchCityName = (value)=>{
        setCityName(value);
    }

    const getWeatherData =(e)=>{
        e.preventDefault();
        if(cityName !== ""){
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=3265874a2c77ae4a04bb96236a642d2f&units=metric`)
            .then(async (res)=>{
                const data=await res.data;
                console.log(data);
                setWeather(data);
            }).catch((err)=>{
                console.log(err);
            });
        }
       
    }

    return (
        <div className='card'>
            <Search searchData={cityName} searchCityName={searchCityName} weatherHandler={getWeatherData}/>
            <Result weatherData={weather}/>
        </div>
    );
};

export default Main;