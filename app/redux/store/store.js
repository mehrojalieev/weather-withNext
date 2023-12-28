import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../api-slices/weather-slice"
const store = configureStore({
    reducer: {
        weather: weatherReducer
    }

})


export default store