function getWeather(id) {
  fetch(
    "https://api.allorigins.win/get?url=https://www.metaweather.com/api/location/" +
      id +
      "/"
  )
    .then((result) => {
      return result.json();
    })
    .then((r) => {
      let data = JSON.parse(r.contents);
      //console.log(data);
      let today = data.consolidated_weather[0];
      console.log(
        "Өнөөдрийн температур " +
          data.title +
          " Хот " +
          today.min_temp +
          " аас " +
          today.max_temp +
          "  хооронд байна."
      );
    });
}

async function getWeatherAsync(id) {
  const result = await fetch(
    "https://api.allorigins.win/get?url=https://www.metaweather.com/api/location/" +
      id +
      "/"
  );

  const json = await result.json();
  data = JSON.parse(json.contents);
  //console.log(data);
  let today = data.consolidated_weather[0];
  console.log(
    "Өнөөдрийн температур " +
      data.title +
      " Хот " +
      today.min_temp +
      " аас " +
      today.max_temp +
      "  хооронд байна."
  );
}

getWeatherAsync(2487956);
getWeatherAsync(44418);

getWeather(2487956);
getWeather(44418);
