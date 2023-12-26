"use client"
import React from 'react'
import getWeatherData from '../lib/getWeatherData'
import { useState } from 'react'


const Nav = () => {
    const [getCountry, setGetCountry] = useState("");
  console.log(getCountry);

  const handleGetWeatherData = async (e) => {
    e.preventDefault()
      const data = getCountry && await getWeatherData(getCountry);
        console.log(data)
    }
  return (
    <form className='search-form' onSubmit={handleGetWeatherData} >
    <input type="text" value={getCountry} placeholder="Search..." onChange={(e) => setGetCountry(e.target.value)} />
    <button type="submit">Search</button>
  </form>
  )
}

export default Nav