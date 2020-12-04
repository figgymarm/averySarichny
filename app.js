
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
          console.log(data);
          $('#weather').html(data.coord);
          // $("#year").html(data.Year);
          // $("#rated").html(data.Rated);
        },
        (error) => {
          //handler for errors
          console.log(`${error.statusText.toUpperCase()}: bad url`);
       }
     );
   })
});
