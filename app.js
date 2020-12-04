//*************************
//GLOBAL VARIABLES
//*************************

//*************************
//ON CLICK API FUNCTION
//*************************

$(() => {
  $("form").on("submit", (event) => {
    event.preventDefault();

    const $userInput = $('input[type="text"]').val();

    $.ajax({
      url: `https://api.openweathermap.org/data/2.5/weather?q=${$userInput}&appid=cbd693e99b02f7879da60ac109802e62`,
      type: "GET",
      dataType: "JSONp",
    }).then(
      (data) => {
        //handler for success
        const $weather = data.weather[0].description;
        $("#weather").html(data.weather[0].description);
        $("#canvas").html(data.name);
        if(weather.indexOf("rain") >= 0) {
          skycons.set("animated-icon", Skycons.RAIN);
        }
      },
      (error) => {
        //handler for errors
        console.log(`${error.statusText.toUpperCase()}: bad url`);
      }
    );
  });
});
