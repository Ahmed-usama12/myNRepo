var x = [];
var finalRes = [];
async function getWeather(city) {
    var res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=c8c79a92aa9e4159ab2184502230308&q=${city}&days=3`);

    finalRes = await res.json();

    console.log(finalRes);

    var locName = finalRes.location.name;
    var temp = finalRes.current.temp_c;
    var speed = finalRes.current.gust_kph;
    var wStatus = finalRes.current.condition.text;
    var windDir = finalRes.current.wind_dir;


    console.log(locName);
    console.log(temp, "C");
    console.log(speed, "Km");
    console.log(wStatus);
    console.log(windDir);

    if (windDir == 'N') {
        console.log('Nourth')
    }

    if (temp > 20) {
        wStatus = 'Sunny'
        console.log(wStatus);
    }
    console.log(finalRes.location.localtime);

    // console.log(finalRes.day);
    // displayWeather()
    // console.log(finalRes.location.name);//london
    // console.log(finalRes.current.temp_c);//temp
    // console.log(finalRes.current.gust_kph);//Km
    // console.log(finalRes.current.condition.text);// Sunny
    // console.log(finalRes.current.wind_dir);// N-W-E-S


    // let date = new Date(finalWeather.forecast.forecastday[0].date)


    // console.log(finalRes.forecast.forecastday[0].date);
    
    // console.log(finalRes.forecast.forecastday.hour.time);
}

getWeather('cairo')

function displayWeather() {
    var cartona;

    for (var i = 0; i < finalRes.length; i++) {
        cartona += `          
    <div class="head d-flex justify-content-between align-items-center py-2 bg-dark w-100">

        <h4>Friaday</h4>
        <h4>4August</h4>
    </div>
    <div class="temp">
        <h4>${locName}</h4>
        <h1>${temp} C</h1>
        <img src="images/113.png" alt="">
    </div>
    <div class="weatherStatus">

    </div>
    <div class="down d-flex justify-content-evenly align-items-center py-3">
        <span>20%</span>
        <span>15Km/h</span>
        <span>East</span>
    </div>`
    }
    document.querySelector('.today').innerHTML = cartona;
}
