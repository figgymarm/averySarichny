
//*************************
//GLOBAL VARIABLES
//*************************


//*************************
//ON CLICK API FUNCTION
//*************************


//*************************
//GLOBAL VARIABLES
//*************************


//*************************
//GLOBAL VARIABLES
//*************************


$(() => {
  $('form').on('submit', (event) => {
      event.preventDefault();

  const userInput = $('input[type="text"]').val();
  $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q=London&appid=cbd693e99b02f7879da60ac109802e62",
        type: "GET",
        dataType: "JSONp"
      }).then(
        (data) => {
          //handler for success
          // console.log(data);
          // console.log(data.weather);
          $('#weather').html(data.weather[0].description);
          $('#main').html(data.weather[0].main);
          $('#icon').html(data.weather[0].icon);
        },
        (error) => {
          //handler for errors
          console.log(`${error.statusText.toUpperCase()}: bad url`);
       }
     );
   })
});
