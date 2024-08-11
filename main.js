import './style.css'
document.querySelector('#app').innerHTML = `
  <div class="logo-and-theme-btn">
        <h1 class="logo">Weather App</h1>
        <div class="theme-switcher">
            <input type="checkbox" id="theme-switcher">
            <label for="theme-switcher" class="switch">
                <span class="icon sun">
                    ☀︎  
                </span>
                <span class="icon moon">
                    <i class="fa-solid fa-moon"></i>
                </span>
            </label>
        </div>
    </div>
    <div class="container">

        <!-- search component goes here -->
        <div class="search-box" id="search-box">
            <input type="text" class="search-bar" placeholder="Search for a city...">
            <button class="search-btn">
                <i class="fa-solid fa-search"></i>
            </button>
        </div>

        <!-- Skeleton Loader -->
        <div class="skeleton-loader" id="skeleton-loader">
            <div class="skeleton search-box-skeleton"></div>
            <div class="skeleton weather-box"></div>
            <div class="skeleton forecast-title-box"></div>
            <div class="skeleton forecast-box"></div>
        </div>

        <!-- Weather Data -->
        <div class="weather-data" id="weather-data">
            <div class="current-weather">
                <div class="city-name">Medinipur</div>
                <div class="weather-icon"> <img src="https://cdn.weatherapi.com/weather/64x64/day/353.png" alt="Partly Cloudy" width="50" height="50"></div>
                <div class="weather-condition">Sunny</div>
                <div class="temperature">28°C</div>
            </div>

            <div class="forecast-container">
                <h2 class="forecast-title">5-Day Forecast</h2>
                <div class="forecast-carousel">
                    <div class="forecast-day">
                        <div class="overall-weather">
                            <div class="day">Mon</div>
                            <div class="weather-icon">
                                <img src="https://cdn.weatherapi.com/weather/64x64/day/353.png" alt="Partly Cloudy" width="40" height="40">
                            </div>
                            <div class="forecast-condition">Sunny</div>
                            <div class="forecast-temp">30°C</div>
                        </div>
                        <ul class="hourly-weather">
                            <li class="hour">
                                <div class="hour-time">12 AM</div>
                                <div class="weather-icon">
                                    <img src="https://cdn.weatherapi.com/weather/64x64/day/353.png" alt="Partly Cloudy" width="30" height="30">
                                </div>
                                <div class="forecast-condition">Sunny</div>
                                <div class="forecast-temp">30°C</div>
                            </li>
                            <li class="hour">
                                <div class="hour-time">1 AM</div>
                                <div class="weather-icon">
                                    <img src="https://cdn.weatherapi.com/weather/64x64/day/353.png" alt="Partly Cloudy" width="30" height="30">
                                </div>
                                <div class="forecast-condition">Sunny</div>
                                <div class="forecast-temp">30°C</div>
                            </li>
                            <li class="hour">
                                <div class="hour-time">1 AM</div>
                                <div class="weather-icon">
                                    <img src="https://cdn.weatherapi.com/weather/64x64/day/353.png" alt="Partly Cloudy" width="30" height="30">
                                </div>
                                <div class="forecast-condition">Sunny</div>
                                <div class="forecast-temp">30°C</div>
                            </li>
                            <li class="hour">
                                <div class="hour-time">1 AM</div>
                                <div class="weather-icon">
                                    <img src="https://cdn.weatherapi.com/weather/64x64/day/353.png" alt="Partly Cloudy" width="30" height="30">
                                </div>
                                <div class="forecast-condition">Sunny</div>
                                <div class="forecast-temp">30°C</div>
                            </li>
                            <li class="hour">
                                <div class="hour-time">1 AM</div>
                                <div class="weather-icon">
                                    <img src="https://cdn.weatherapi.com/weather/64x64/day/353.png" alt="Partly Cloudy" width="30" height="30">
                                </div>
                                <div class="forecast-condition">Sunny</div>
                                <div class="forecast-temp">30°C</div>
                            </li>
                            <li class="hour">
                                <div class="hour-time">1 AM</div>
                                <div class="weather-icon">
                                    <img src="https://cdn.weatherapi.com/weather/64x64/day/353.png" alt="Partly Cloudy" width="30" height="30">
                                </div>
                                <div class="forecast-condition">Sunny</div>
                                <div class="forecast-temp">30°C</div>
                            </li>
                            <li class="hour">
                                <div class="hour-time">1 AM</div>
                                <div class="weather-icon">
                                    <img src="https://cdn.weatherapi.com/weather/64x64/day/353.png" alt="Partly Cloudy" width="30" height="30">
                                </div>
                                <div class="forecast-condition">Sunny</div>
                                <div class="forecast-temp">30°C</div>
                            </li>
                            <li class="hour">
                                <div class="hour-time">1 AM</div>
                                <div class="weather-icon">
                                    <img src="https://cdn.weatherapi.com/weather/64x64/day/353.png" alt="Partly Cloudy" width="30" height="30">
                                </div>
                                <div class="forecast-condition">Sunny</div>
                                <div class="forecast-temp">30°C</div>
                            </li>
                            <li class="hour">
                                <div class="hour-time">1 AM</div>
                                <div class="weather-icon">
                                    <img src="https://cdn.weatherapi.com/weather/64x64/day/353.png" alt="Partly Cloudy" width="30" height="30">
                                </div>
                                <div class="forecast-condition">Sunny</div>
                                <div class="forecast-temp">30°C</div>
                            </li>
                            <li class="hour">
                                <div class="hour-time">1 AM</div>
                                <div class="weather-icon">
                                    <img src="https://cdn.weatherapi.com/weather/64x64/day/353.png" alt="Partly Cloudy" width="30" height="30">
                                </div>
                                <div class="forecast-condition">Sunny</div>
                                <div class="forecast-temp">30°C</div>
                            </li>
                            <li class="hour">
                                <div class="hour-time">1 AM</div>
                                <div class="weather-icon">
                                    <img src="https://cdn.weatherapi.com/weather/64x64/day/353.png" alt="Partly Cloudy" width="30" height="30">
                                </div>
                                <div class="forecast-condition">Sunny</div>
                                <div class="forecast-temp">30°C</div>
                            </li>
                            <li class="hour">
                                <div class="hour-time">1 AM</div>
                                <div class="weather-icon">
                                    <img src="https://cdn.weatherapi.com/weather/64x64/day/353.png" alt="Partly Cloudy" width="30" height="30">
                                </div>
                                <div class="forecast-condition">Sunny</div>
                                <div class="forecast-temp">30°C</div>
                            </li>
                            <li class="hour">
                                <div class="hour-time">1 AM</div>
                                <div class="weather-icon">
                                    <img src="https://cdn.weatherapi.com/weather/64x64/day/353.png" alt="Partly Cloudy" width="30" height="30">
                                </div>
                                <div class="forecast-condition">Sunny</div>
                                <div class="forecast-temp">30°C</div>
                            </li>
                            <li class="hour">
                                <div class="hour-time">1 AM</div>
                                <div class="weather-icon">
                                    <img src="https://cdn.weatherapi.com/weather/64x64/day/353.png" alt="Partly Cloudy" width="30" height="30">
                                </div>
                                <div class="forecast-condition">Sunny</div>
                                <div class="forecast-temp">30°C</div>
                            </li>
                            <li class="hour">
                                <div class="hour-time">1 AM</div>
                                <div class="weather-icon">
                                    <img src="https://cdn.weatherapi.com/weather/64x64/day/353.png" alt="Partly Cloudy" width="30" height="30">
                                </div>
                                <div class="forecast-condition">Sunny</div>
                                <div class="forecast-temp">30°C</div>
                            </li>
                            <li class="hour">
                                <div class="hour-time">1 AM</div>
                                <div class="weather-icon">
                                    <img src="https://cdn.weatherapi.com/weather/64x64/day/353.png" alt="Partly Cloudy" width="30" height="30">
                                </div>
                                <div class="forecast-condition">Sunny</div>
                                <div class="forecast-temp">30°C</div>
                            </li>
                            <li class="hour">
                                <div class="hour-time">1 AM</div>
                                <div class="weather-icon">
                                    <img src="https://cdn.weatherapi.com/weather/64x64/day/353.png" alt="Partly Cloudy" width="30" height="30">
                                </div>
                                <div class="forecast-condition">Sunny</div>
                                <div class="forecast-temp">30°C</div>
                            </li>
                            <li class="hour">
                                <div class="hour-time">1 AM</div>
                                <div class="weather-icon">
                                    <img src="https://cdn.weatherapi.com/weather/64x64/day/353.png" alt="Partly Cloudy" width="30" height="30">
                                </div>
                                <div class="forecast-condition">Sunny</div>
                                <div class="forecast-temp">30°C</div>
                            </li>
                            <li class="hour">
                                <div class="hour-time">1 AM</div>
                                <div class="weather-icon">
                                    <img src="https://cdn.weatherapi.com/weather/64x64/day/353.png" alt="Partly Cloudy" width="30" height="30">
                                </div>
                                <div class="forecast-condition">Sunny</div>
                                <div class="forecast-temp">30°C</div>
                            </li>
                            <li class="hour">
                                <div class="hour-time">1 AM</div>
                                <div class="weather-icon">
                                    <img src="https://cdn.weatherapi.com/weather/64x64/day/353.png" alt="Partly Cloudy" width="30" height="30">
                                </div>
                                <div class="forecast-condition">Sunny</div>
                                <div class="forecast-temp">30°C</div>
                            </li>
                            <li class="hour">
                                <div class="hour-time">1 AM</div>
                                <div class="weather-icon">
                                    <img src="https://cdn.weatherapi.com/weather/64x64/day/353.png" alt="Partly Cloudy" width="30" height="30">
                                </div>
                                <div class="forecast-condition">Sunny</div>
                                <div class="forecast-temp">30°C</div>
                            </li>
                            <li class="hour">
                                <div class="hour-time">1 AM</div>
                                <div class="weather-icon">
                                    <img src="https://cdn.weatherapi.com/weather/64x64/day/353.png" alt="Partly Cloudy" width="30" height="30">
                                </div>
                                <div class="forecast-condition">Sunny</div>
                                <div class="forecast-temp">30°C</div>
                            </li>
                            <li class="hour">
                                <div class="hour-time">1 AM</div>
                                <div class="weather-icon">
                                    <img src="https://cdn.weatherapi.com/weather/64x64/day/353.png" alt="Partly Cloudy" width="30" height="30">
                                </div>
                                <div class="forecast-condition">Sunny</div>
                                <div class="forecast-temp">30°C</div>
                            </li>
                            <li class="hour">
                                <div class="hour-time">1 AM</div>
                                <div class="weather-icon">
                                    <img src="https://cdn.weatherapi.com/weather/64x64/day/353.png" alt="Partly Cloudy" width="30" height="30">
                                </div>
                                <div class="forecast-condition">Sunny</div>
                                <div class="forecast-temp">30°C</div>
                            </li>
                            <!-- Repeat for other hours -->
                        </ul>
                    </div>
                    
                    <div class="forecast-day cloudy">
                        <div class="weather-animation cloudy-animation"></div>
                        <div class="day">Tue</div>
                        <div class="forecast-temp">29°C</div>
                        <div class="forecast-condition">Partly Cloudy</div>
                    </div>
                    <div class="forecast-day rainy">
                        <div class="weather-animation rainy-animation"></div>
                        <div class="day">Wed</div>
                        <div class="forecast-temp">27°C</div>
                        <div class="forecast-condition">Showers</div>
                    </div>
                    <div class="forecast-day cloudy">
                        <div class="weather-animation cloudy-animation"></div>
                        <div class="day">Thu</div>
                        <div class="forecast-temp">28°C</div>
                        <div class="forecast-condition">Cloudy</div>
                    </div>
                    <div class="forecast-day rainy">
                        <div class="weather-animation rainy-animation"></div>
                        <div class="day">Fri</div>
                        <div class="forecast-temp">26°C</div>
                        <div class="forecast-condition">Rain</div>
                    </div>
                </div>
                <div class="carousel-buttons">
                    <button class="carousel-button prev" id="prev-btn">❮</button>
                    <button class="carousel-button next" id="next-btn">❯</button>
                </div>
            </div>
        </div>
    </div>
`


    // JavaScript to handle theme switching and loading animation
    document.getElementById('theme-switcher').addEventListener('change', function() {
      document.body.classList.toggle('dark-mode', this.checked);
      document.body.classList.toggle('light-mode', !this.checked);
  });

  

  // Simulate loading state
  window.addEventListener('load', () => {
      setTimeout(() => {
          document.getElementById('skeleton-loader').style.display = 'none';
          document.getElementById('weather-data').style.display = 'block';
          document.getElementById('search-box').style.display = 'flex';
      }, 2000); // Simulate a 2-second loading time
  });

   // Carousel functionality
  const carousel = document.querySelector('.forecast-carousel');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  let index = 0;

  function showSlide(i) {
      const slides = document.querySelectorAll('.forecast-day');
      const totalSlides = slides.length;
      
      index = (i + totalSlides) % totalSlides;
      
      carousel.style.transform = `translateX(${-index * 100}%)`;
  }

  prevBtn.addEventListener('click', () => showSlide(index - 1));
  nextBtn.addEventListener('click', () => showSlide(index + 1));
  
  // Initialize the carousel to show the first slide
  showSlide(0);


  // location coords 

  let currentLocationPromise;

  // Function to get the current location
  function setCurrentLocation() {
      return new Promise((resolve, reject) => {
          if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(position => {
                  const latitude = position.coords.latitude;
                  const longitude = position.coords.longitude;
                  resolve(`${latitude},${longitude}`);
              }, error => {
                  console.log('Error getting location, using default location.', error);
                  resolve("Default City"); 
              });
          } else {
              console.log('Geolocation is not supported by this browser, using default location.');
              resolve("Default City"); 
          }
      });
  }
  
  currentLocationPromise = setCurrentLocation();

async function searchCity(name = null) {

  if (!name) {
      name = await currentLocationPromise;
  }
  console.log(`Searching weather for: ${name}`);
  
  fetch(`https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_API_KEY}&q=${name}&days=5&aqi=no&alerts=no`)
      .then(response => {
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
      })
      .then(data => {
          displayCurrentWeather(data);
      })
      .catch(error => {
          console.log("ERROR:", error.message);
      });
}


searchCity();


// Search method

document.querySelector(".search-btn").addEventListener('click', () =>{
  let searchValue = document.querySelector('.search-bar')
  if (searchValue.value !== '') {
      console.log(searchValue.value);
      
      searchCity(searchValue.value.trim())
  } else {
      searchCity()
  }
  searchValue.value = ''
})

// searchCity("Kolkata");

  function displayCurrentWeather (data) {
      console.log(data);
      
      document.querySelector('.city-name').textContent = data.location.name
      document.querySelector('.weather-icon').innerHTML = `<img src="${data.current.condition.icon}" alt="${data.current.condition.text}" width="50" height="50">`
      document.querySelector('.weather-condition').textContent = data.current.condition.text
      document.querySelector('.temperature').textContent = `${Math.floor(data.current.feelslike_c)}°C`

      displayForecast(data.forecast.forecastday)
      
  }

  
  function displayForecast(data){
      let forecastDays = ''
      
      data.forEach(element => {
          forecastDays +=  `<div class="forecast-day">
                      <div class="overall-weather">
                          <div class="day">${getDay(`${element.date}`)}</div>
                          <div class="weather-icon">
                              <img src="${element.day.condition.icon}" alt="${element.day.condition.text}" width="40" height="40">
                          </div>
                          <div class="forecast-condition">${element.day.condition.text}</div>
                          <div class="forecast-temp">${Math.floor(element.day.avgtemp_c)}°C</div>
                      </div>
                      <ul class="hourly-weather">
                          ${getHours(element.hour)}
                      </ul>
                  </div>`
          
          getDay(`${element.date}`)
          console.log(element);
          
      });
      document.querySelector('.forecast-carousel').innerHTML = forecastDays
  }

  function getHours(hour){
      let hours = ''
          hour.forEach(element => {
              hours += `<li class="hour">
                              <div class="hour-time">${getTime(`${element.time}`)}</div>
                              <div class="weather-icon">
                                  <img src="${element.condition.icon}" alt="Partly Cloudy" width="30" height="30">
                              </div>
                              <div class="forecast-condition">${element.condition.text}</div>
                              <div class="forecast-temp">${Math.floor(element.temp_c)}°C</div>
                      </li>`
          })
          return hours
  }

  function getDay(forecastDate){
      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
      const date = new Date(forecastDate);
      const day = date.getDay();
      console.log(days[day]);
      return days[day]
  }

  function getTime(time){
      const now = new Date(time);
      let hours = now.getHours();
      let period = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      return `${hours} ${period}`;
  }



