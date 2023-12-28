"use client"
import { useSelector } from "react-redux"
import "./Weather.scss"

const Weather =  () => {
  
  const {weather_data} = useSelector(state => state.weather)
  console.log(weather_data)

  return (  
    <div className="wrapper">

       <h1>{weather_data?.location.country}, {weather_data?.location.region}</h1> 
      <h3>{weather_data?.current.temp_c}°C</h3>
      <p>{weather_data?.current.condition.text}</p>
      <div className="currently__weather-info">
        <div className="current-card">
          <span>{weather_data?.forecast.forecastday[0].hour[0].time.slice(10, 20)}</span>
          <img width={100} height={100} src={weather_data?.forecast.forecastday[0].hour[0].condition.icon} />
          <strong>{weather_data?.forecast.forecastday[0].hour[0].temp_c}°C</strong>
        </div>
        <div className="current-card">
          <span>{weather_data?.forecast.forecastday[0].hour[1].time.slice(10, 20)}</span>
          <img width={100} height={100} src={weather_data?.forecast.forecastday[0].hour[1].condition.icon} />
          <strong>{weather_data?.forecast.forecastday[0].hour[1].temp_c}°C</strong>
        </div>
        <div className="current-card">
          <span>{weather_data?.forecast.forecastday[0].hour[2].time.slice(10, 20)}</span>
          <img width={100} height={100} src={weather_data?.forecast.forecastday[0].hour[2].condition.icon} />
          <strong>{weather_data?.forecast.forecastday[0].hour[2].temp_c}°C</strong>
        </div>
        <div className="current-card">
          <span>{weather_data?.forecast.forecastday[0].hour[3].time.slice(10, 20)}</span>
          <img width={100} height={100} src={weather_data?.forecast.forecastday[0].hour[3].condition.icon} />
          <strong>{weather_data?.forecast.forecastday[0].hour[3].temp_c}°C</strong>
        </div>
        <div className="current-card">
          <span>{weather_data?.forecast.forecastday[0].hour[4].time.slice(10, 20)}</span>
          <img width={100} height={100} src={weather_data?.forecast.forecastday[0].hour[4].condition.icon} />
          <strong>{weather_data?.forecast.forecastday[0].hour[4].temp_c}°C</strong>
        </div>
      </div> 
     </div>
  )
}

export default Weather