#!/usr/bin.env node

var axios = require("axios")
let date = {}
if(process.argv[2]){
  date.params = {
    city:process.argv[2]
  }
}
axios.get('http://api.jirengu.com/weather.php',date)
.then(function(response){
  let weahter = response.data.results[0].weather_data[0]
  console.log(response.data.results[0].currentCity)
  console.log(weahter.date)
  console.log(weahter.weather)
  console.log(weahter.temperature)
  console.log(weahter.wind)
})
.catch(function (error) {
  console.log(error);
});
