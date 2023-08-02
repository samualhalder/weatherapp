const apikey="d750010dae19fc48195cde07a186c260";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const cityname=document.querySelector(".search input");
const search=document.querySelector(".search button");
 
async function weatherupdate(city){
    const response=await fetch(apiurl+ city + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°C";
    document.querySelector(".humidityvl").innerHTML= data.main.humidity +"%";
    document.querySelector(".windsp").innerHTML= data.wind.speed +"kmph";
    document.querySelector(".maxtmp").innerHTML= data.main.temp_max +"°C";
    document.querySelector(".feelslike").innerHTML= data.main.feels_like +"°C";
    document.querySelector(".mintmp").innerHTML= data.main.temp_min +"°C";
    const icon=(data.weather[0].main).toLowerCase();
     document.querySelector(".icon").src="images/" + icon +".png";
    const img="images/" + data.weather[0].description +".png";

 } 
search.addEventListener("click",()=>{
    weatherupdate(cityname.value);
})
 