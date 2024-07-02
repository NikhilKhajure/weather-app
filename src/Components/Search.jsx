import React, { useContext, useRef, useState, useEffect } from 'react'
import { FaCloudShowersHeavy } from "react-icons/fa6";
import { NewsDataContext } from '../NewData';
import TimeDate from './TimeDate';
import img1 from '../../public/cloud.png'
import img2 from '../../public/temp.png'
import img3 from '../../public/wind.png'
function Search() {
    const { getInput, city, data, DefaultData, toogleComponentValue } = useContext(NewsDataContext);
    const [weatherCondition, setWeatherCondition] = useState("");
    const [img, setImg] = useState(img1);
    useEffect(() => {
        // Determine the weather condition
        if (data.temp >= 30) {
            setWeatherCondition("Hot and sunny");
            setImg(img1)
        } else if (data.temp >= 15 && data.temp < 30) {
            setWeatherCondition("Overcast");
            setImg(img3)
        } else if (data.temp >= 0 && data.temp < 15) {
            setWeatherCondition("Light rain");
            setImg(img2)
        } else {
            setWeatherCondition("Cold");
        }
    }, [data.temp]);

    const getvalue = useRef();
    const HandleOnClick = () => {
        getInput(getvalue.current.value);
    }
    const HandleOnKeyDown = (event) => {
        if (event.key === "Enter") {
            getInput(getvalue.current.value);
        }
    }
    const HandleToogleComponent = () => {
        toogleComponentValue(false);
    }
    return (
        <>
            <div className="search">
                <TimeDate />
                <input type="text" placeholder='..Search City' ref={getvalue} onKeyDown={HandleOnKeyDown} name="" id="" />
                <button className='btn' onClick={HandleOnClick}>Search</button>
                <h3><img src={img} style={{ width: "11rem" }} alt="" /></h3>
                <span>{(data.length === 1 ? DefaultData : data).temp}&deg;C</span>
                <h2>{weatherCondition}</h2>
                <span><hr /></span>
                <h4>{city}</h4>
                <button className='btn' onClick={HandleToogleComponent}>See More Details</button>
            </div>
        </>
    )
}

export default Search
