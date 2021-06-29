import React from 'react';
import OpenWeatherMap from './components/OpenWeatherMap'

function App() {
  const [currentWeather, setCurrentWeather] = React.useState(null);
  
  React.useEffect(() => {
    const openWeatherMap = new OpenWeatherMap("70e65c74d11f3c6e1b136bfd6b4944cb");

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
