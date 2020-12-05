$(() => {
//**********************************
//     ON CLICK API FUNCTION
//**********************************
  $("form").on("submit", (event) => {
    event.preventDefault();

    const $userInput = $('input[type="text"]').val();
    $.ajax({
      url: `https://api.openweathermap.org/data/2.5/weather?q=${$userInput}&appid=cbd693e99b02f7879da60ac109802e62`,
      type: "GET",
      dataType: "JSONp",
    }).then(
      (data) => {
//***********************************
//     FUNCTIONS
//***********************************
        const $noRain = () => {
        const $smiley = $("<img>", {
          src: "imgs/smiley.png",
        });
        $smiley.attr("width", "70px").attr("height", "100px");
        $smiley.appendTo('#rainAnswer');
      };

        const $someRain = () => {
        const $raindrop = $("<img>", {
          src: "imgs/raindrop.png",
        });
        $raindrop.attr("width", "70px").attr("height", "100px");
        $raindrop.appendTo('#rainAnswer');
      };
        const $alert = () => {
          alert(
            `It's looking like ${data.weather[0].description} in ${$userInput} today.`)
      };
//************************************
//     CONDITIONALS
//************************************
        const $cityInfo = $("#description").html(data.weather[0].description);
        //condition for 50/50
        if (
          $cityInfo.text() === "cloudy" ||
          "broken clouds" ||
          "scattered clouds" ||
          "overcast" ||
          "mist" ||
          "clouds"
        ) {
            $someRain();
            $alert();
          }
        //condition for sun
        else if($cityInfo.text() === "sunny"
          || "partly sunny" || "clear sky" || "clear"
        ) {
            $noRain();
            $alert();
        };
      (error) => {
        //handler for errors
        console.log(`${error.statusText.toUpperCase()}: bad url`);
      }
  });
});
});
