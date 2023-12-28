"use client"
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherData } from '../redux/api-slices/weather-slice';


const Nav = () => {
    const [getCountry, setGetCountry] = useState("");
     const dispatch = useDispatch();
     const data = useSelector(state => state.weather)

    const loadData = async (e) => {
      e.preventDefault()
      dispatch(fetchWeatherData(getCountry))
      console.log(data);
    }

  return (
    <form className='search-form' onSubmit={loadData}  >
    <input type="text" value={getCountry} placeholder="Search..." onChange={(e) => setGetCountry(e.target.value)} />
    <button type="submit">Search</button>
  </form>
  )
}

export default Nav