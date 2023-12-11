let loc = document.querySelector("#location");
let location_value = document.querySelector(".location");
let button = document.querySelector("#button");
let sun = document.querySelector("#sun");
let storm = document.querySelector("#storm");
let rainy_day = document.querySelector("#rainy_day");
let cloudy = document.querySelector("#cloudy");
let clouds = document.querySelector("#clouds");
let fog = document.querySelector("#fog");
let tempcvalue = document.querySelector(".tempcvalue");
let tempfvalue = document.querySelector(".tempfvalue");
let windkmphvalue = document.querySelector(".windkmphvalue");
let windmphvalue = document.querySelector(".windmphvalue");
let winddirectionvalue = document.querySelector(".winddirectionvalue");
let winddegreevalue = document.querySelector(".winddegreevalue");
let displayer = document.querySelector(".having");

// https://api.openweathermap.org/data/2.5/weather?q=kerala&appid=4ee63614fb7c0c6d56805c75acc5c90e


let key = "4ee63614fb7c0c6d56805c75acc5c90e";

button.addEventListener("click", () => {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${loc.value}`;
  const fetchAPI = async (url) => {
    const response = await fetch(url + `&appid=${key}`);
    const data = await response.json();
    console.log(data);

    

    if(data.message === "city not found"){
      location_value.innerHTML = data.message;
    }

    else{
      location_value.innerHTML = data.name;
    tempcvalue.innerHTML = data.main.temp_min;
    tempfvalue.innerHTML = data.main.temp_max;
    windkmphvalue.innerHTML = data.wind.speed + " kmph";
    windmphvalue.innerHTML = data.wind.gust + " kt";
    winddirectionvalue.innerHTML = data.main.humidity + " %";
    winddegreevalue.innerHTML = data.wind.deg + "°";
    displayer.innerHTML = "having " + data.weather[0].main + " weather";

    if(data.weather[0].main === "Haze"){
      fog.style.display = "block";
      cloudy.style.display = "none";
      sun.style.display = "none";
      storm.style.display = "none";
      rainy_day.style.display = "none";
      clouds.style.display = "none";
    }
    else if(data.weather[0].main === "Clear"){
      cloudy.style.display = "block";
      sun.style.display = "none";
      storm.style.display = "none";
      rainy_day.style.display = "none";
      clouds.style.display = "none";
      fog.style.display = "none";
    }
    else if(data.weather[0].main === "Clouds"){
      clouds.style.display = "block";
      fog.style.display = "none";
      cloudy.style.display = "none";
      sun.style.display = "none";
      storm.style.display = "none";
      rainy_day.style.display = "none";
    }
    else if(data.weather[0].main === "Rain"){
      rainy_day.style.display = "block";
      clouds.style.display = "none";
      fog.style.display = "none";
      cloudy.style.display = "none";
      sun.style.display = "none";
      storm.style.display = "none";
    }
    else{
      storm.style.display = "block";
      rainy_day.style.display = "none";
      clouds.style.display = "none";
      fog.style.display = "none";
      cloudy.style.display = "none";
      sun.style.display = "none";
    }
    }

  };
  fetchAPI(url);
});

loc.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${loc.value}`;
    const fetchAPI = async (url) => {
    const response = await fetch(url + `&appid=${key}`);
    const data = await response.json();
    console.log(data);

    location_value.innerHTML = data.name;
    tempcvalue.innerHTML = data.main.temp_min;
    tempfvalue.innerHTML = data.main.temp_max;
    windkmphvalue.innerHTML = data.wind.speed + " kmph";
    windmphvalue.innerHTML = data.wind.gust + " kt";
    winddirectionvalue.innerHTML = data.main.humidity + " %";
    winddegreevalue.innerHTML = data.wind.deg + "°";
    displayer.innerHTML = "having " + data.weather[0].main + " weather";

    
    if(data.weather[0].main === "Haze"){
      fog.style.display = "block";
      cloudy.style.display = "none";
      sun.style.display = "none";
      storm.style.display = "none";
      rainy_day.style.display = "none";
      clouds.style.display = "none";
    }
    else if(data.weather[0].main === "Clear"){
      cloudy.style.display = "block";
      sun.style.display = "none";
      storm.style.display = "none";
      rainy_day.style.display = "none";
      clouds.style.display = "none";
      fog.style.display = "none";
    }
    else if(data.weather[0].main === "Clouds"){
      clouds.style.display = "block";
      fog.style.display = "none";
      cloudy.style.display = "none";
      sun.style.display = "none";
      storm.style.display = "none";
      rainy_day.style.display = "none";
    }
    else if(data.weather[0].main === "Rain"){
      rainy_day.style.display = "block";
      clouds.style.display = "none";
      fog.style.display = "none";
      cloudy.style.display = "none";
      sun.style.display = "none";
      storm.style.display = "none";
    }
    else{
      storm.style.display = "block";
      rainy_day.style.display = "none";
      clouds.style.display = "none";
      fog.style.display = "none";
      cloudy.style.display = "none";
      sun.style.display = "none";
    }

    };
    fetchAPI(url);

}
});

