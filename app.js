$(() => {
//**********************************
//     ON CLICK API FUNCTION
//**********************************
  const body = $('body');

  $("form").on("submit", (event) => {
    event.preventDefault();

    let $userInput = $('input[type="text"]').val();
    $.ajax({
      url: `https://api.openweathermap.org/data/2.5/weather?q=${$userInput}&appid=cbd693e99b02f7879da60ac109802e62`,
      type: "GET",
      dataType: "JSONp",
    }).then(
      (data) => {
//***********************************
//     DATA ELEMENT
//***********************************
        const $cityInfo = $("#description").html(data.weather[0].description);
        const $icon = $("<img>", {
          src: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        });
        const $city = $('#cityName').html(data.name)
        console.log($cityInfo);
        $('#icon').html($icon);
        $('#input-box').val('');

//************************************
//     CONDITIONALS
//************************************
        // if(data.weather[0].icon === "01d" || data.weather[0].icon === "02d"){
        //   body.attr('style','background-image: url(https://i.pinimg.com/564x/d8/22/9f/d8229fa0904d498d137950875ebc935e.jpg);')
        //   $('background-image').css('width','100%');
        //   }
      (error) => {
        //handler for errors
        console.log(`${error.statusText.toUpperCase()}: bad url`);
      }
  });
});
});
