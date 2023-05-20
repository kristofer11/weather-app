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
                <p className="temperature">18°C</p>
                <div className="details">
                    <div className="parameterRow">
                        <span className="parameterLabel">Details</span>
                    </div>
                    <div className="parameterRow">
                        <span className="parameterLabel">Feels like</span>
                        <span className="parameterValue">22°C</span>
                    </div>
                    <div className="parameterRow">
                        <span className="parameterLabel">Wind</span>
                        <span className="parameterValue">2 m/s</span>
                    </div>
                    <div className="parameterRow">
                        <span className="parameterLabel">Humidity</span>
                        <span className="parameterValue">15%</span>
                    </div>
                    <div className="parameterRow">
                        <span className="parameterLabel">Pressure</span>
                        <span className="parameterValue">15 hPa</span>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default CurrentWeather;