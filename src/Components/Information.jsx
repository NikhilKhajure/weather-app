import React, { useContext } from 'react'
import { NewsDataContext } from '../NewData';
import TimeDate from './TimeDate';
function Information() {
    const { data, toogleComponentValue, DefaultData } = useContext(NewsDataContext);
    const weatherData = Object.entries(data);
    const DefaultDataEntries = Object.entries(DefaultData);
    const HandleToogleComp = () => {
        toogleComponentValue(true);
    }
    const units = ["%", "\u00B0C", "\u00B0C", "%", "\u00B0C", "\u00B0C", "M/S", "\u00B0C"]
    return (
        <>
            <div className="info">
                <div className="infoBox">
                    <TimeDate />
                    {(weatherData.length === 1 ? DefaultDataEntries : weatherData).slice(0, 12 - 1).map(([key, value], index) => {
                        if (key === "sunrise") {
                            return;
                        }
                        return <div className="box">
                            <h5>{key}</h5>
                            <span>{value}{units[index]} </span>
                            <h5>East</h5>
                        </div>
                    })}
                </div>

                <button className='btn' onClick={HandleToogleComp}>Search</button>

            </div>
        </>
    )
}

export default Information
