function PrintDate() {
    const date = new Date();
    const today = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    const DATE = date.toLocaleString("ru", today);
    document.getElementById("date").innerHTML = DATE;
}

function main() 
{
PrintDate();
    let city_name = city.value === "" ? "Тамбов" : encodeURIComponent(city.value);
    const apiKEY = "966bf7ad5546988cbf3cf262134e944b";
const weather = fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city_name + '&lang=ru&appid=' + apiKEY)
.then(function(resp) {return resp.json() })

weather.then(data => {
    if(data.cod === "404")
        alert("Город не найден")
    else{
    document.querySelector('.town').innerHTML = data.name;
    document.querySelector('.Temperature').innerHTML = ((Math.round(data.main.temp - 273)) > 0 ? '+' + 
    (Math.round(data.main.temp - 273)) : (Math.round(data.main.temp - 273))) + '&deg;';
    document.querySelector('.description').innerHTML = data.weather[0].description[0].toUpperCase()
     + data.weather[0].description.substr(1);
     document.querySelector('.icon').innerHTML = '<img src="http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png">';
     document.querySelector('.feelings').innerHTML = 'Ощущается как: ' + ((Math.round(data.main.feels_like - 273)) > 0 ? '+' + 
     (Math.round(data.main.feels_like - 273)) : (Math.round(data.main.feels_like - 273))) + '&deg;';
    }},
    error => alert("Ошибка!")
)};
