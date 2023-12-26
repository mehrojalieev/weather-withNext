import "./Weather.scss"
import getWeatherData from "../lib/getWeatherData"

const Weather = async () => {
  const data = await getWeatherData()


  return (
    <div className="wrapper">

      <h1>{data.location.country}, {data.location.region}</h1>
      <h3>{data.current.temp_c}°C</h3>
      <p>{data.current.condition.text}</p>
      <div className="currently__weather-info">
        <div className="current-card">
          <span>{data.forecast.forecastday[0].hour[0].time.slice(10, 20)}</span>
          <img width={100} height={100} src={data.forecast.forecastday[0].hour[0].condition.icon} />
          <strong>{data.forecast.forecastday[0].hour[0].temp_c}°C</strong>
        </div>
        <div className="current-card">
          <span>{data.forecast.forecastday[0].hour[1].time.slice(10, 20)}</span>
          <img width={100} height={100} src={data.forecast.forecastday[0].hour[1].condition.icon} />
          <strong>{data.forecast.forecastday[0].hour[1].temp_c}°C</strong>
        </div>
        <div className="current-card">
          <span>{data.forecast.forecastday[0].hour[2].time.slice(10, 20)}</span>
          <img width={100} height={100} src={data.forecast.forecastday[0].hour[2].condition.icon} />
          <strong>{data.forecast.forecastday[0].hour[2].temp_c}°C</strong>
        </div>
        <div className="current-card">
          <span>{data.forecast.forecastday[0].hour[3].time.slice(10, 20)}</span>
          <img width={100} height={100} src={data.forecast.forecastday[0].hour[3].condition.icon} />
          <strong>{data.forecast.forecastday[0].hour[3].temp_c}°C</strong>
        </div>
        <div className="current-card">
          <span>{data.forecast.forecastday[0].hour[4].time.slice(10, 20)}</span>
          <img width={100} height={100} src={data.forecast.forecastday[0].hour[4].condition.icon} />
          <strong>{data.forecast.forecastday[0].hour[4].temp_c}°C</strong>
        </div>
      </div>
    </div>
  )
}

export default Weather