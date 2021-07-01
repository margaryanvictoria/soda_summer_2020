import React from 'react';
import OpenWeatherMap from './components/OpenWeatherMap'
import privateData from './data/private'
import CurrentWeather from './components/CurrentWeather';

function App() {
  const [currentWeather, setCurrentWeather] = React.useState({"coord":{"lon":-121.3177,"lat":38.4666},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"base":"stations","main":{"temp":87.85,"feels_like":88.54,"temp_min":78.78,"temp_max":99.28,"pressure":1008,"humidity":43},"visibility":10000,"wind":{"speed":5.01,"deg":252,"gust":13},"clouds":{"all":1},"dt":1625103538,"sys":{"type":2,"id":2002655,"country":"US","sunrise":1625057074,"sunset":1625110391},"timezone":-25200,"id":5389519,"name":"Sacramento","cod":200});
  
  /* React.useEffect(() => {
    const openWeatherMap = new OpenWeatherMap(privateData.key);

    (async () => {
        const result = await openWeatherMap.currentWeather("Sacramento");

        setCurrentWeather(result)

        console.log(result);
    })();
  }, []) */

  return (
    <CurrentWeather
      current={currentWeather.main.temp}
      minTemp={currentWeather.main.temp_min}
      maxTemp={currentWeather.main.temp_max}
      iconUrl={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
      state={currentWeather.name}
      country={currentWeather.sys.country} />
  );
}

export default App;
