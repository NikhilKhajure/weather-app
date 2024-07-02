import React, { createContext, useEffect, useReducer, useRef, useState } from "react"

const NewsDataContext = createContext({
    data: [],
    getInput: "",
    city: "",
    toogleComponent: "",
    toogleComponentValue: () => { },
    DefaultData: ""
});

const reducerData = (currentData, action) => {
    let newData = currentData;
    if (action.type === "GetData") {
        newData = action.payload.weatherData;
    }
    return newData;
}
const toogleComponentReducer = (current, action) => {
    let newValue = current;
    if (action.type === "ToogleComp") {
        newValue = action.payload.value;
    }
    return newValue;
}
const NewsDataProvide = ({ children }) => {
    const [city, setCity] = useState("Pune");
    const [toogleComponent, dispatchToogleComponent] = useReducer(toogleComponentReducer, true);
    const toogleComponentValue = (value) => {
        dispatchToogleComponent({
            type: "ToogleComp",
            payload: {
                value
            }
        })
    }
    const APIURL = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a75cb2224dmsh08c9174e873e43ep174b39jsn3f37c09e8ae1',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    const [DefaultData, setDefaultData] = useState({
        "cloud_pct": 27,
        "temp": 30,
        "feels_like": 29,
        "humidity": 32,
        "min_temp": 30,
        "max_temp": 30,
        "wind_speed": 4.3,
        "wind_degrees": 110,
        "sunrise": 1708910785,
        "sunset": 1708952951
    });

    const [data, dispatchData] = useReducer(reducerData, []);

    const getInput = (value) => {
        setCity(value);
    }



    const FetchData = async (apiurl) => {
        try {
            const response = await fetch(apiurl, options);
            const result = await response.text();
            const weatherData = JSON.parse(result);
            dispatchData({
                type: "GetData",
                payload: {
                    weatherData
                }
            })

        } catch (error) {
            console.error(error);
        }

    }
    useEffect(() => {
        FetchData(APIURL);
    }, [city])
    return <NewsDataContext.Provider value={{ data: data, getInput: getInput, city: city, toogleComponent: toogleComponent, toogleComponentValue: toogleComponentValue, DefaultData: DefaultData }} > {children} </NewsDataContext.Provider>
}
export default NewsDataProvide;
export { NewsDataContext };