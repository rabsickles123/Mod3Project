import { useEffect } from 'react'
import { useState } from 'react'
import './WeatherApp.css'
import CityInput from './CityInput'
import WeatherDisplay from './WeatherDisplay'

let key = import.meta.env.VITE_API_KEY

function WeatherApp() {

  let [city, setCity] = useState("Detroit")
  let [state, setState] = useState("Michigan")
  let [country, setCountry] = useState("US")
  let [latitude, setLatitude] = useState(null)
  let [longitude, setLongitude] = useState(null)
  let [temperature, setTemperature] = useState(null)
  let [description, setDescription] = useState(null)
  let [feelslike, setFeelslike] = useState(null)
  let [high, setHigh] = useState(null)
  let [low, setLow] = useState(null)
  let [summary, setSummary] = useState(null)
  let [alert, setAlert] = useState(null)
  let [event, setEvent] = useState(null)
  let [sender, setSender] = useState(null)


  async function getCoordinates() {    
      try { 
          const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${key}`)
          const data = await response.json()
          console.log(data)
          setState(data[0].state)
          setCountry(data[0].country)
          setLatitude(data[0].lat)
          setLongitude(data[0].lon)         
      } catch(error) {
          console.log(error)
      }
  }

  useEffect(()=>{getCoordinates()}, [city])

  async function getWeather() {
    try {
      if (latitude && longitude) {
        const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&units=imperial&lang=en&appid=${key}`)
        const data = await response.json()
        console.log(data)
        setTemperature(data.current.temp)
        setDescription(data.current.weather[0].description)
        setFeelslike(data.current.feels_like)
        setHigh(data.daily[0].temp.max)
        setLow(data.daily[0].temp.min)
        setSummary(data.daily[1].summary)
        setAlert(data.alerts[0]?.description)
        setEvent(data.alerts[0]?.event)
        setSender(data.alerts[0]?.sender_name)
      }
  } catch(error) {
    console.log(error.message)
    } 
  }

useEffect(()=>{getWeather()}, [latitude, longitude])

useEffect(() => {
  if (latitude !== null && longitude !== null) {
    getWeather();
  }
}, [latitude, longitude]);


  return (
    <>
    <CityInput onCityChange = {setCity}/>
    <WeatherDisplay city={city} state ={state} country={country} temperature= {temperature} description = {description} summary = {summary} high={high} low={low} feelslike = {feelslike} alert = {alert}/>
    </>
  )
}

export default WeatherApp