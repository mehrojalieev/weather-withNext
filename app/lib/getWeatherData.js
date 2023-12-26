const API_KEY = "644f6ce0ca9e401ebb891832211707";

async function getWeatherData(getCountry) {
    console.log(getCountry);
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${getCountry ? getCountry : "Tashkent"}&days=7&aqi=yes&alerts=yes`);
    const data = await response.json()
    return data
}

export default getWeatherData