
import './App.css'
import { Weathersearch } from './assets/weatherpages/weather'
// import { BriefDetails, WeatherDetails } from './assets/weatherpages/weatherdetails'

function App() {

  return (
    <>
      <div className="weather-container flex justify-center items-center">
        <div className="bg-color flex flex-col w-full h-screen justify-center items-center w-100 h-100">
          <Weathersearch></Weathersearch>
        </div>
      </div>
    </>
  )
}

export default App
