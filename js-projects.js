//01. COUNTER

 let count = 0;
function addNumber(){
  count += 1;
  document.getElementById('newNumber').innerHTML = count;
}
  
function subNumber(){
  count -= 1;
  document.getElementById('newNumber').innerHTML = count;
}

//02. SLIDER

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


//MODAL


//05. Digital Clock

function startTime(format12) {
  var today = new Date();
  var hour = today.getHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();
  var day = today.getDay();
  var month = today.getMonth();
  var year = today.getFullYear();
  
  min = checkTime(min);
  sec = checkTime(sec);
  var midday = "";
  if(!format12)
  {
    midday = (hour >= 12) ? " PM" : " AM";
    hour = clockFormat(hour);
  }
  document.getElementById('clock').innerHTML =  hour + ":" + min + ":" + sec + midday;
  document.getElementById('date').innerHTML = day +" / "+ month +" / "+ year;
  var t = setTimeout(startTime, 1000);
}
 
function clockFormat(hour) {
  if (hour < 12){
    return hour;
  }
  else {
    return (hour - 12);
  }
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

function changeFormat() {
 startTime(true);
   
}

//06. Quote Generetor


  function newQuote() {
    var quotes = [
      ["You only live once, but if you do it right, once is enough. - Mae West"],
      ["I am so clever that sometimes I don't understand a single word of what I am saying. - Oscar Wilde"],
      ["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. - Albert Einstein"],
    ["The most beautiful experience we can have is the mysterious. It is the fundamental emotion that stands at the cradle of true art and true science. - Albert Einstein"],
    ["It is our choices, Harry, that show what we truly are, far more than our abilities. - J.K. Rowling, Harry Potter and the Chamber of Secrets"],
    ["All men who have turned out worth anything have had the chief hand in their own education.- Walter Scott"],
    ["Trust yourself. You know more than you think you do. - Benjamin Spock"],
    ["No one can make you feel inferior without your consent. - Eleanor Roosevelt, This is My Story"],
    ["To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson"],
    ["Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover. - H. Jackson Brown Jr. - P.S. I Love You"]
    ];
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
  }



//07. Word Counter

function wordConter () {

 var text = document.getElementById("input").value;
 var words = text.split(' ');
 document.getElementById('count').innerHTML = words.length;

 }