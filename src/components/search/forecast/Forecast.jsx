import './forecast.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from "react-accessible-accordion";

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {
    const dayOfWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayOfWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayOfWeek));

    return (
        <>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, index) => (
                    <AccordionItem key={index}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="dailyItem">
                                    <img alt='weather' className="iconSmall" src={`icons/${item.weather[0].icon}.png`} />
                                    <label className="day">{forecastDays[index]}</label>
                                    <label className="description">{item.weather[0].description}</label>
                                    <label className="minMax">High: {Math.round(item.main.temp_max)}°F </label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className='dailyDetailsGrid'>
                                <div className='dailyDetailsGridItem'>
                                    <label>Pressure</label>
                                    <label>{item.main.pressure} hPa</label>
                                </div>
                                <div className='dailyDetailsGridItem'>
                                    <label>Humidity</label>
                                    <label>{item.main.humidity}%</label>
                                </div>
                                <div className='dailyDetailsGridItem'>
                                    <label>Clouds</label>
                                    <label>{item.clouds.all}%</label>
                                </div>
                                <div className='dailyDetailsGridItem'>
                                    <label>Wind Speed</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div className='dailyDetailsGridItem'>
                                    <label>Sea Level</label>
                                    <label>{item.main.sea_level}m</label>
                                </div>
                                <div className='dailyDetailsGridItem'>
                                    <label>Feels Like</label>
                                    <label>{Math.round(item.main.feels_like)}°F</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    )
}

export default Forecast;