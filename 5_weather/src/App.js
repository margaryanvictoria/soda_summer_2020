import React from 'react';
import OpenWeatherMap from './components/OpenWeatherMap'
import privateData from './data/private'

function App() {
  const [currentWeather, setCurrentWeather] = React.useState(null);
  
  React.useEffect(() => {
    const openWeatherMap = new OpenWeatherMap(privateData.key);

    (async () => {
        const result = await openWeatherMap.currentWeather("Sacramento");

        setCurrentWeather(result)

        console.log(result);
    })();
  }, [])

  

  return (
    <div>
      {
        currentWeather ? currentWeather.main.temp : "No Report"
      }
    </div>
  );
}

export default App;
