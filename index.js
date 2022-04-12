var cityVar;
var p1 = "https://api.weatherbit.io/v2.0/current?&city=";
var p2 = "&key=0bf451f91ff64705bc45ce2a4c766587&include=minutely";
const settings = {
  async: true,
  crossDomain: true,
  url: cityVar,
  method: "GET",
  headers: {
    "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
    "x-rapidapi-key": "bf639f53admshf988df62756c1bcp1279a6jsn1e08bd79566b",
  },
};

$("#search_btn").on("click", function (event) {
  console.log($("#searchbox").val());
  cityVar = p1 + $("#searchbox").val() + p2;

  $.ajax(cityVar).done(function (response) {
    console.log(response);
    $(".wind-speed").html(response.data[0].wind_spd + " m/s");
    $(".pressure").html(response.data[0].pres + "mb");
    $(".current-temp").html(response.data[0].temp + "&deg;C");
    $(".location").html(
      response.data[0].city_name + ", " + response.data[0].country_code
    );
    $(".weather-desc").html(response.data[0].weather.description);
    $(".uvi").html(response.data[0].uv + "UVI");
    if(response.data[0].uv<=5)
    {
        $(".uvi_desc").html("Low risk of UV rays");
    }
    else{
        $(".uvi_desc").html("Moderate risk of UV rays");
    }
    $(".prec").html( response.data[0].precip+ "%");
    $(".wind-deg").html( response.data[0].wind_dir+ "&deg; wind");
    
  });
});
