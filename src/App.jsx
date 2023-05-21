import './App.css';
import Search from './components/search/search';
import CurrentWeather from './components/search/current-weather/CurrentWeather';
import Forecast from './components/search/forecast/Forecast';
import { WEATHER_API_URL, WEATHER_API_KEY } from './services/api';
import { useState } from 'react';

function App() {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState(null);

    const handleOnSearchChange = (searchData) => {
        const [lat, long ] = searchData.value.split(' ');

        const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=imperial`);

        const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=imperial`);

        Promise.all([currentWeatherFetch, forecastFetch])
            .then(async (response) => {
                const weatherResponse = await response[0].json();
                const forecastResponse = await response[1].json();
                setCurrentWeather({ city: searchData.label, weatherResponse });
                setForecast({ city: searchData.label, ...forecastResponse });
            })
            .catch((err) => console.log(err));
    }

    console.log(currentWeather);
    console.log(forecast);

  return (
    <div className='container'>
        <h1>Weather App</h1>
        <h4>Search for weather by typing the name of any major city</h4>
        <div>
            <Search onSearchChange={handleOnSearchChange}/>
            { currentWeather && <CurrentWeather data={ currentWeather } /> } 
            {forecast && <Forecast data={forecast} /> }
        </div>
    </div>
  )
}

export default App;
