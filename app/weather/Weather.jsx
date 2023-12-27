"use client"
import "./Weather.scss"
import getWeatherData from "../lib/getWeatherData"
import { useDispatch, useSelector } from "react-redux"

const Weather = () => {
  const data =  getWeatherData()
  console.log(data);
  const {state} = useSelector(state => state);
  console.log(state);

  return (
    <div className="wrapper">

      <h1>{state?.location.country}, {state?.location.region}</h1>
      <h3>{state?.current.temp_c}°C</h3>
      <p>{state?.current.condition.text}</p>
      <div className="currently__weather-info">
        <div className="current-card">
          <span>{state?.forecast.forecastday[0].hour[0].time.slice(10, 20)}</span>
          <img width={100} height={100} src={state?.forecast.forecastday[0].hour[0].condition.icon} />
          <strong>{state?.forecast.forecastday[0].hour[0].temp_c}°C</strong>
        </div>
        <div className="current-card">
          <span>{state?.forecast.forecastday[0].hour[1].time.slice(10, 20)}</span>
          <img width={100} height={100} src={state?.forecast.forecastday[0].hour[1].condition.icon} />
          <strong>{state?.forecast.forecastday[0].hour[1].temp_c}°C</strong>
        </div>
        <div className="current-card">
          <span>{state?.forecast.forecastday[0].hour[2].time.slice(10, 20)}</span>
          <img width={100} height={100} src={state?.forecast.forecastday[0].hour[2].condition.icon} />
          <strong>{state?.forecast.forecastday[0].hour[2].temp_c}°C</strong>
        </div>
        <div className="current-card">
          <span>{state?.forecast.forecastday[0].hour[3].time.slice(10, 20)}</span>
          <img width={100} height={100} src={state?.forecast.forecastday[0].hour[3].condition.icon} />
          <strong>{state?.forecast.forecastday[0].hour[3].temp_c}°C</strong>
        </div>
        <div className="current-card">
          <span>{state?.forecast.forecastday[0].hour[4].time.slice(10, 20)}</span>
          <img width={100} height={100} src={state?.forecast.forecastday[0].hour[4].condition.icon} />
          <strong>{state?.forecast.forecastday[0].hour[4].temp_c}°C</strong>
        </div>
      </div>
     </div>
  )
}

export default Weather