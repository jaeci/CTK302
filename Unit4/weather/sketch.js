var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var windspeed = 0;
var temp = 0;
var pressure = 0;
var desc;
let f1;


function setup() {
  createCanvas(windowWidth, windowHeight);
  // createCanvas(600, 800);

  // HERE is the call to get the weather.

  var myCityString = 'https://api.openweathermap.org/data/2.5/weather?q=Boston,MA,US&units=imperial&';

  //You can also use "zipcode" - var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';

  var myIDString = 'appid=906a0a61ece766bfc319bcdd4bc29b88'; // USE YOUR ID HERE, take out the x's!!!

  var myBigString = myCityString + myIDString;

  loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.

  f1 = loadFont("assets/IndieFlowerRegular.ttf");
}


function gotData(data) {

  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temp = weather.main.temp;
  pressure = weather.main.pressure;
  desc = weather.weather[0].description;
  //weather.main.temp


}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
      background("#88d4eb");
      fill('black');
      textFont(f1);
      text("What is the weather in " + weather.name + "?", 20, 20);
      text("windspeed is " + windspeed, 20, 40);
      text("temperature is " + temp, 20, 60);
      text("pressure is " + pressure, 20, 80);
      text("description is " + desc, 20, 100);


      // cloud
      fill('white');
      noStroke();
      ellipse(x + 10, 300, 200, 100);
      ellipse(x + 30, 240, 160, 140);
      ellipse(x - 50, 250, 120, 130);
      ellipse(x - 90, 270, 120, 90);
      ellipse(x + 80, 290, 120, 90);


      //thermometer
      fill('red');
      rect(width-50,height-10, 30, -temp);

      // move the cloud's x position
      x = x + windspeed / 4;
      if (x > width) x = 0;

      break;

  }
}
