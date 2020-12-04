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
        $("#weather").html(data.weather[0].description);
        $("#icon").html(data.main.temp);
      },
      (error) => {
        //handler for errors
        console.log(`${error.statusText.toUpperCase()}: bad url`);
      }
    );
  });
});
