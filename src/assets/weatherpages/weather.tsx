import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { BriefDetails, WeatherDetails } from "./weatherdetails";

export const Weathersearch = () => {
    const APIKey = '332bde9d3784f6a23429ad13956a4999';
    const [cityname, setcityName] = useState("Chennai");
    const [weatherdetails, setWeatherDetails] = useState({
        description: '',
        temperature: null,
        pressure: null,
        humidity: null,
        windSpeed: null,
        seaLevel: null,
        longitude: null,
        latitude: null,
        icon:null
    });

    //  get call Weather Details
    async function getWeatherDetails() {
        let weatherEndPoint = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIKey}`;
        try {
            let response = await fetch(weatherEndPoint);
            let data = await response.json();
            if (data.cod == "404") {
                alert(data.message);
            }
            else {
                const weatherData = {
                    description: data.weather[0].description,
                    temperature: data.main.temp,
                    pressure: data.main.pressure,
                    humidity: data.main.humidity,
                    windSpeed: data.wind.speed,
                    seaLevel: data.main.sea_level,
                    longitude: data.coord.lon,
                    latitude: data.coord.lat,
                    icon:data.weather[0].icon
                  };
                  setWeatherDetails(weatherData);

            }
        }
        catch (err: any) {
            alert(err.message);
        }
    }
    //  set input Value
    function getDistrictName(e: any) {
        setcityName(e.target.value)
    }
    //  when Enter jey is pressed
    const handleButtonEvent = (e: any) => {
        if (e.key === 'Enter') {
            getWeatherDetails();
        }
    }
    useEffect(() => {
        getWeatherDetails();
    }, [])
    return (
        <>
            <div className="weather-blocks">
                <div className="searchplace w-80">
                    <label className="relative block">
                        <span className="sr-only">Search</span>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 text-black" onClick={() => getWeatherDetails()}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </span>
                        <input className="placeholder:italic placeholder:text-slate-400
                               block bg-white w-full
                               border border-slate-300 rounded-md
                               py-2 pl-4 pr-3
                               shadow-sm text-black font-semibold
                               focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                               sm:text-sm" placeholder="Search for places..." type="text" name="search" onChange={(event) => getDistrictName(event)} value={cityname} onKeyDown={handleButtonEvent} />
                    </label>
                </div>
            </div>
            <WeatherDetails weatherData={weatherdetails} ></WeatherDetails>
            <BriefDetails weatherData={weatherdetails}></BriefDetails>
        </>
    )
}
