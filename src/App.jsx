import './App.css';
import Search from './components/search/search';
import CurrentWeather from './components/search/current-weather/CurrentWeather';
import { WEATHER_API_URL, WEATHER_API_KEY } from './services/api';
import { useState } from 'react';

function App() {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState(null);

    const handleOnSearchChange = (searchData) => {
        const [lat, long ] = searchData.value.split(' ');

        const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=metric`);

        const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=metric`);

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
        <div>
            <Search onSearchChange={handleOnSearchChange}/>
            { currentWeather && <CurrentWeather data={ currentWeather } /> } 
        </div>
    </div>
  )
}

export default App;
