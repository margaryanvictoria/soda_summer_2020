import React from 'react';

export default function CurrentWeather({ current, minTemp, maxTemp, iconUrl, state, country }) {
    return (
        <div className="flex flex-row divide-x min-h-screen bg-blue-900 text-white py-10">
            <div className="px-10 flex-grow-0 w-2/5">
                <p className="p-4 text-left text-2xl">The weather today in...</p>
                <div className="text-center py-32">
                    <h2 className="font-bold text-4xl">{state}, {country}</h2>
                    <img className="mx-auto py-32" src={iconUrl} />
                    <h2 className="text-8xl">{current}</h2>
                    <p className="text-4xl pt-8">{Math.round(maxTemp)} / {Math.round(minTemp)}</p>
                </div>
            </div>
            <div className="px-10 flex-grow">
                <p className="p-4 text-left text-2xl">Hourly Forecast</p>

            </div>
        </div>
    );
}
