  function getLatValue(){
      var inputVallat = document.getElementById("inputlat").value;
      var inputVallon = document.getElementById("inputlon").value;
      alert(inputVallat);
      showDiv();
      getWeather(inputVallon,inputVallat);
  }
  function showDiv() {
    document.getElementById('weatherdata').style.display = "block";
 }
 function hide(){
  document.getElementById('weatherdata').style.display = "none";
 }
  function getWeather(lon,lat) {
    let temperature = document.getElementById("temperature");
    let description = document.getElementById("description");
    let location = document.getElementById("location");
    let date = document.getElementById("date");
    let humidity = document.getElementById("humidity");
    let pressure = document.getElementById("pressure");
    let clouds = document.getElementById("clouds");
    let winds = document.getElementById("winds");
    let windd = document.getElementById("windd");



    let api = "https://api.openweathermap.org/data/2.5/weather";
    let apiKey = "e5799fe6d69575dde12268e5e571c8fa";
  
    location.innerHTML = "Locating...";
  
    navigator.geolocation.getCurrentPosition(success, error);
  
    function success(position) {
      latitude=lat;
      longitude=lon;
      // latitude = position.coords.latitude;
      //latitude=getLatValue();
      // longitude = position.coords.longitude;
  
      let url =
        api +
        "?lat=" +
        latitude +
        "&lon=" +
        longitude +
        "&appid=" +
        apiKey +
        "&units=metric";


        
        
  
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          let c=new Date(data.dt*1000);
          date.innerHTML=c;
          let temp = data.main.temp;
          temperature.innerHTML = temp + "°C";
          let hum = data.main.humidity;
          humidity.innerHTML= hum + "%";
          let pres = data.main.pressure;
          pressure.innerHTML= pres+ "hPa";
          let clou = data.clouds.all;
          clouds.innerHTML= clou+ "%";
          let windsp = data.wind.speed;
          winds.innerHTML= windsp+ "km/h";
          let winddeg = data.wind.deg-273.15;
          windd.innerHTML= winddeg+ "°C";
          location.innerHTML =
            data.name + " (" + latitude + "°, " + longitude + "°)";
          description.innerHTML = data.weather[0].main;
        });
    }
  
    function error() {
      location.innerHTML = "Unable to retrieve your location";
    }
  }

  // getWeather();
  