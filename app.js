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
        if(data.weather[0].icon === "01d" || data.weather[0].icon === "02d"){
          body.attr('style','background-image: url(imgs/sunny.jpg);')
          $('background-image').css('background-repeat', 'repeat');
          $('.wrapper').css('background-image','linear-gradient(orangered, pink)');
          $('.data').css('background-color','peachpuff');
        }else if(data.weather[0].icon === "03d" ||data.weather[0].icon === "04d" || data.weather[0].icon === "50d"){
          body.attr('style','background-image: url(imgs/clouds.jpg);')
          $('background-image').css('background-repeat', 'repeat');
          $('.wrapper').css('background-image','linear-gradient(grey, whitesmoke)');
          $('.data').css('background-color','darkgray');
        }else if(data.weather[0].icon === "11d" ||data.weather[0].icon === "10d" || data.weather[0].icon === "09d"){
          body.attr('style','background-image: url(imgs/rain.jpg);')
          $('background-image').css('background-repeat', 'repeat');
          $('.wrapper').css('background-image','linear-gradient(chocolate, thistle)');
          $('.data').css('background-color','rosybrown');
        }
      (error) => {
        //handler for errors
        console.log(`${error.statusText.toUpperCase()}: bad url`);
      }
  });
});
});
