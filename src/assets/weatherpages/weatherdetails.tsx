import { faCloudRain } from "@fortawesome/free-solid-svg-icons/faCloudRain";
import { faDroplet } from "@fortawesome/free-solid-svg-icons/faDroplet";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons/faLocationArrow";
import { faTemperatureHigh } from "@fortawesome/free-solid-svg-icons/faTemperatureHigh";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export const WeatherDetails = (props:any) => {
    const {weatherData}=props
    const icon =weatherData.icon as keyof typeof weatherImgList;
    const [currentDate, setCurrentDate] = useState({ day: '', date: 0, month: '' })
    const weatherImgList={
        '01d':"weatherImages/01d@2x.png",
        '01n':"weatherImages/01n@2x.png",
        '02d':"weatherImages/02d@2x.png",
        '02n':"weatherImages/02n@2x.png",
        '03d':"weatherImages/03d@2x.png",
        '03n':"weatherImages/03d@2x.png",
        '04d':"weatherImages/04d@2x.png",
        '04n':"weatherImages/04d@2x.png",
        '09d':"weatherImages/09d@2x.png",
        '10d':"weatherImages/10d@2x.png",
        '13d':"weatherImages/13d@2x.png",
        '50d':"weatherImages/50d@2x.png",
        '13n':"weatherImages/13d@2x.png",
        '50n':"weatherImages/50d@2x.png",
    }  
    function gettime_date() {       
        const now = new Date();
        const day = now.toLocaleString('default', { weekday: 'long' });
        const month = now.toLocaleString('default', { month: 'long' });
        const date = now.getDate();
        setCurrentDate({ day, date, month })
    }
    useEffect(() => {
        gettime_date();
    }, [])
    return (
        <>
            <div className="weather-img mt-4">
                <img src={weatherImgList[icon]} className="w-40 h-40"></img>
            </div>
            <div className="current-date flex flex-row mt-4 justify-center text-lg">
                <span className="datetime mr-2">{currentDate.day}</span>
                <span className="datetimeline"></span>
                <span className="datetime mx-2"> {currentDate.month}</span>
                <span className="datetime">{currentDate.date}</span>
            </div>
            <div className="celcius mt-2 text-4xl font-semibold">
                <span className="">{weatherData.temperature}<sup>&deg;</sup></span>
            </div>
            <div className=" text-xl mt-2">
                <p>{weatherData.description}</p>
            </div>
            <div className="border-line w-full mt-4">
            </div>
        </>
    )
}

export const BriefDetails = (props:any) => {
    const {weatherData}=props  
    
    return (
        <>
            <div className="mt-4 grid grid-cols-2 gap-8 justify-center">
                <div className="all-data  flex flex-row items-center ">
                    <div className="text-2xl">
                        <FontAwesomeIcon icon={faLocationArrow} />
                    </div>
                    <div className="ml-3">
                    <p>{weatherData.windSpeed} km/h</p>
                        <p>Wind</p>
                    </div>
                </div>
                <div className="all-data flex flex-row items-center">
                    <div className="text-2xl">
                        <FontAwesomeIcon icon={faCloudRain} />
                    </div>
                    <div className="ml-3">
                        <p>{weatherData.seaLevel}</p>
                        <p>Sea Level</p>
                    </div>
                </div>
                <div className="all-data flex flex-row items-center ">
                    <div className="text-2xl">
                        <FontAwesomeIcon icon={faTemperatureHigh} />
                    </div>
                    <div className="ml-3">
                        <p>{weatherData.pressure} mbar</p>
                        <p>Pressure</p>
                    </div>
                </div>
                <div className="all-data flex flex-row items-center">
                    <div className="text-2xl">
                        <FontAwesomeIcon icon={faDroplet} />
                    </div>
                    <div className="ml-3">
                        <p>{weatherData.humidity}%</p>
                        <p>Humidity {weatherData.humidity}%</p>
                    </div>
                </div>
            </div>
        </>
    )
}
