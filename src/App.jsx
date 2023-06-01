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
        const [lat, long] = searchData.value.split(' ');

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

    // Change background color based on weather

    if (currentWeather) {
        let background = document.getElementById('body');

        switch (currentWeather.weatherResponse.weather[0].main) {
            case 'Clear':
                background.style.backgroundColor = 'lightblue';
                break;
            case 'Clouds':
                background.style.backgroundColor = 'grey';
                break;
            case 'Rain':
                background.style.backgroundColor = 'blue';
                break;
            case 'Snow':
                background.style.backgroundColor = 'white';
                break;
            case 'Thunderstorm':
                background.style.backgroundColor = 'purple';
                break;
            case 'Drizzle':
                background.style.backgroundColor = 'lightblue';
                break;
            case 'Mist':
                background.style.backgroundColor = 'lightgrey';
                break;
            case 'Smoke':
                background.style.backgroundColor = 'grey';
                break;
            case 'Haze':
                background.style.backgroundColor = 'lightgrey';
                break;
            case 'Dust':
                background.style.backgroundColor = 'lightgrey';
                break;
            case 'Fog':
                background.style.backgroundColor = 'lightgrey';
                break;
            case 'Sand':
                background.style.backgroundColor = 'lightbrown';
                break;
            case 'Ash':
                background.style.backgroundColor = 'grey';
                break;
            case 'Squall':
                background.style.backgroundColor = 'grey';
                break;
            case 'Tornado':
                background.style.backgroundColor = 'grey';
                break;
            default:
                background.style.backgroundColor = 'white';
        }
    }


    return (
        <div className='container'>
            <h1>Weather App</h1>
            <h4>Search for weather by typing the name of any major city</h4>
            <div>
                <Search onSearchChange={handleOnSearchChange} />
                {currentWeather && <CurrentWeather data={currentWeather} />}
                {forecast && <Forecast data={forecast} />}
            </div>
        </div>
    )
}

export default App;
