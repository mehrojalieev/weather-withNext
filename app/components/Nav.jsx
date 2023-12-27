"use client"
import React from 'react'
import getWeatherData from '../lib/getWeatherData'
import { useState } from 'react'
import { useDispatch } from 'react-redux'


const Nav = () => {
    const [getCountry, setGetCountry] = useState("");
    const dispatch = useDispatch()
    
  const handleGetWeatherData = async (e) => {
    e.preventDefault()
      const data = getCountry && await getWeatherData(getCountry);
        console.log(data)
        dispatch({type: "CURRENT_WEATHER", weather: data})
    }
  return (
    <form className='search-form' onSubmit={handleGetWeatherData} >
    <input type="text" value={getCountry} placeholder="Search..." onChange={(e) => setGetCountry(e.target.value)} />
    <button type="submit">Search</button>
  </form>
  )
}

export default Nav