const initialState = {
    weather_data: null
}

const weatherReducer = (state = initialState, action) => {
    console.log(action)
    switch(action.type){
        case "CURRENT_WEATHER":
            return{
                state: action.weather
            }
            default: return state
    }
}

export default weatherReducer