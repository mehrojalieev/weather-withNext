import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "644f6ce0ca9e401ebb891832211707"

const fetchWeatherData = createAsyncThunk(
    "CURRENT_WEATHER",
    async (value, {rejectWithValue}) => {
        try {
            const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${value ? value : "Tashkent"}&days=7&aqi=yes&alerts=yes`)
            return response.json()
        }
         catch (error) {
            return rejectWithValue("Something went error !!!")
        }
    }
)

const initialState = {
    weather_data: null,
    isLoading: false,
    isSuccess: false,
    isError: null
}


const weatherSlice = createSlice( {
    name: "weather",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchWeatherData.pending,(state, action) => {
                state.isLoading = true
        }),

        builder.addCase(fetchWeatherData.fulfilled, (state, action) => {
            state.isLoading = false,
            state.isSuccess = true,
            state.isError = null,
            state.weather_data = action.payload
       }),
       
       builder.addCase(fetchWeatherData.rejected, (state, action) => {
                    state.isLoading = true,
                    state.isSuccess = false
       })
    }
})

export const {initializeWeatherData} = weatherSlice.actions;
export {fetchWeatherData}
export default weatherSlice.reducer