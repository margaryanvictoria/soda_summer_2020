class OpenWeatherMap {
    constructor(appid) {
        /**
         * @private
         */
        this.appid = appid;
    }

    async currentWeather(cityName) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.appid}&units=imperial`)
        const json = await response.json();

        return json;
    }
}

export default OpenWeatherMap;