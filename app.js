
let btn = document.querySelector('#btn');
let form =document.querySelector('#weatherForm')
let userValue = document.querySelector("#userInput");
let container = document.querySelector('.container');
btn.addEventListener('click',(e)=>{
    console.log(userValue.value)
    fetch(`https://api.weatherapi.com/v1/current.json?key=52bfd4288adf4cf69b1174342241811&q=${userValue.value}&aqi=no`)
     .then((res)=>{
        return res.json()
     })
     .then((res)=>{
        console.log(res)
        container.innerHTML = `
                <div class="card">
                    <h2 id="city-name">${res.location.name}</h2>
                    <div class="temp">
                        <span id="temperature">${res.current.temp_c}°C</span>
                    </div>
                    <div class="details">
                        <p>Feels Like: <span>${res.current.feelslike_c}°C</span></p>
                        <p>Humidity: <span>${res.current.humidity}%</span></p>
                        <p>Wind Speed: <span>${res.current.wind_kph} km/h</span></p>
                    </div>
                </div>
            
        `
        userValue.value  = ""
     })
   .catch((err)=>{
    console.log(err)
   })
})


