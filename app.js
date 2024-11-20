
let btn = document.querySelector('#btn');
let form =document.querySelector('#weatherForm')
let userValue = document.querySelector("#userInput");
btn.addEventListener('click',(e)=>{
    
    console.log(userValue.value)

    fetch(`https://api.weatherapi.com/v1/current.json?key=52bfd4288adf4cf69b1174342241811&q=${userValue.value}&aqi=no`)
     .then((res)=>{
        return res.json()
     })
     .then((res)=>{
        console.log(res)
     })
   .catch((err)=>{
    console.log(err)
   })
})


