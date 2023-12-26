"use client"
import { useEffect, useState } from 'react'
import styles from './page.module.css'
import Weather from './weather/Weather'
import getWeatherData from './lib/getWeatherData'

export default function Home() {
  const [getCountry, setGetCountry] = useState("")
  console.log(getCountry);

  useEffect(() => {
    console.log(getCountry);
  }, [getCountry])

  const handleGetWeatherData =  (e) => {
    e.preventDefault()
    console.log(getCountry);
    getWeatherData(getCountry)
  }
  return (
    <main className={styles.main}>
      <form className='search-form' onSubmit={handleGetWeatherData} >
        <input type="text" value={getCountry} placeholder="Search..." onChange={(e) => setGetCountry(e.target.value)} />
        <button type="submit">Search</button>
      </form>
          <Weather/>
    </main>
  )
}
