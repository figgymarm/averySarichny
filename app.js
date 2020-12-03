
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
        url: "api.openweathermap.org/data/2.5/weather?q={city name}&appid={51229e8f6a4f05869a8f3b7e4be97541}",
      }).then(
        (data) => {
          //handler for success
          console.log(data);
          // $("#title").html(data.Title);
          // $("#year").html(data.Year);
          // $("#rated").html(data.Rated);
        },
        (error) => {
          //handler for errors
          console.log(`${error.statusText.toUpperCase()}: bad url`);
       }
     );
   });


})
