// imports
import axios from 'axios';

// consts
const WEATHER_API_KEY = "4565514e8c88db119c618f97893723d6";
const ROOT_URL = `http://openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;

// exports
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  let request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
