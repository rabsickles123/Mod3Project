import picture from "./assets/weather-app.png"

export default function WeatherDisplay({city, state, country, temperature, description, summary, high, low, feelslike, alert}) {
    return (
      <div className = "container">
        <img className = "image" src = {picture} alt = "weather icon"/>
        <h1 className = "city">{city}</h1>
        <h1 id = "currenttemp">{Math.round(temperature)}°F</h1>
        <h3 className = "high-low">H:{Math.round(high)}°F L:{Math.round(low)}°F</h3>
        <h3 className="state-country">{state}, {country}</h3>       
           {temperature !== null && (
                <>
                    <h3>Feels like: {Math.round(feelslike)}°F </h3>
                    <p id = "description">{description}</p> 
                    <p id = "summary">{summary}</p>
                </>
            )}
                  
      </div>
    );
  };