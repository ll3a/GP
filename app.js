const descriptions = {
0: 'Clear sky', 1: 'Mainly clear', 2: 'Partly cloudy', 3: 'Overcast',
45: 'Fog', 48: 'Depositing rime fog',
51: 'Light drizzle', 53: 'Moderate drizzle', 55: 'Dense drizzle',
56: 'Light freezing drizzle', 57: 'Dense freezing drizzle',
61: 'Slight rain', 63: 'Moderate rain', 65: 'Heavy rain',
66: 'Light freezing rain', 67: 'Heavy freezing rain',
71: 'Slight snowfall', 73: 'Moderate snowfall', 75: 'Heavy snowfall',
77: 'Snow grains',
80: 'Slight rain showers', 81: 'Moderate rain showers', 82: 'Violent rain
showers',
85: 'Slight snow showers', 86: 'Heavy snow showers',
95: 'Thunderstorm', 96: 'Thunderstorm with slight hail',
97: 'Heavy thunderstorm', 99: 'Thunderstorm with heavy hail'
};


async function loadData() {

  const url= 'https://api.open-meteo.com/v1/forecast?latitude=36.75&longitude=3.06&current=temperature_2m,weather_code&hourly=temperature_2m,precipitation&timezone=auto'

  const response = await fetch(url);
  const data = await response.json();

  document.getElementById("temp").textContent = data.current.temperature_2m +' C';
  document.getElementById("feels").textContent = data.current.;
  document.getElementById("humidity").textContent = data.current.re;


  document.getElementById("precipitation").textContent = data.current.precipitation + ' mm';
  document.getElementById("wind").textContent = data.current.wind_speed_10m + ' km/h';



} 

loadData();