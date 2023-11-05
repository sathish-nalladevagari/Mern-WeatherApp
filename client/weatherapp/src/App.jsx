import { useState } from 'react';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const baseUrl  = "https://weatherapp-ayn9.onrender.com"
  const fetchWeatherData = async () => {
    try {
      const response = await fetch(baseUrl`/weather?city=${city}`);
      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
      } else {
        console.log('Error fetching in  weather data');
      }
    } catch  {
      console.log('Error fetching consle weather data');
    }
  };

  return (
    <div className="App">
      <h1 className='"font-medium text-6xl text-center'>Weather App</h1>
      <div className='text-center mt-5'>
        <label >Enter City: </label>
        <input
        className='rounded border ml-5 mt-5  w-full max-w-xs'
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          
        />
        <button className='rounded p-4 mt-4 w-full max-w-xs' onClick={fetchWeatherData}>Get Weather</button>
      </div>
      {weatherData && (
        <div class=" flex items-center justify-center border mt-5">
        <div class="flex flex-col bg-white rounded p-4 w-full max-w-xs">
                    <div class="font-bold text-xl">{weatherData.location.name}</div>
                    <div class="text-sm text-gray-500">{weatherData.location.localtime}</div>
                    <div class="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
                      <img src="//cdn.weatherapi.com/weather/64x64/night/296.png" alt="" />
                    </div>
                    <div class="flex flex-row items-center justify-center mt-6">
                    <div class="font-medium text-6xl">{weatherData.current.temp_c}°C</div>
                      <div class="flex flex-col items-center ml-6">
                        <div>{weatherData.current.condition.text}</div>
                        
                      </div>
                    </div>
                    <div class="flex flex-row justify-between mt-6">
                      <div class="flex flex-col items-center">
                        <div class="font-medium text-sm">Wind</div>
                        <div class="text-sm text-gray-500">{weatherData.current.wind_kph}kph</div>
                      </div>
                      <div class="flex flex-col items-center">
                        <div class="font-medium text-sm">Humidity</div>
                        <div class="text-sm text-gray-500">{weatherData.current.humidity}</div>
                      </div>
                      <div class="flex flex-col items-center">
                        <div class="font-medium text-sm">Visibility</div>
                        <div class="text-sm text-gray-500">{weatherData.current.vis_km}km</div>
                      </div>
                    </div>
                  </div>
        </div>
      )}
    </div>
  );
}

export default App;
