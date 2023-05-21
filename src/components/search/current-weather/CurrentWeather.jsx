import "./currentWeather.css";

const CurrentWeather = ({ data }) => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{data.city}</p>
                    <p className="weatherDescription">{data.weatherResponse.weather[0].main}</p>
                </div>
                <img alt="weather" className="weatherIcon" src={`icons/${data.weatherResponse.weather[0].icon}.png`} />
            </div>
            <div className="bottom">
                <p className="temperature">{Math.round(data.weatherResponse.main.temp)}°F</p>
                <div className="details">
                    <div className="parameterRow">
                        <span className="parameterLabel">Details</span>
                    </div>
                    <div className="parameterRow">
                        <span className="parameterLabel">Feels like</span>
                        <span className="parameterValue">{Math.round(data.weatherResponse.main.feels_like)}°F</span>
                    </div>
                    <div className="parameterRow">
                        <span className="parameterLabel">Wind</span>
                        <span className="parameterValue">{Math.round(data.weatherResponse.wind.speed)} m/s</span>
                    </div>
                    <div className="parameterRow">
                        <span className="parameterLabel">Humidity</span>
                        <span className="parameterValue">{data.weatherResponse.main.humidity}%</span>
                    </div>
                    <div className="parameterRow">
                        <span className="parameterLabel">Pressure</span>
                        <span className="parameterValue">{data.weatherResponse.main.pressure} hPa</span>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default CurrentWeather;