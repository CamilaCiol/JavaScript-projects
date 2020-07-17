
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

//02. IMAGE SLIDER

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
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  
}


//03. MODAL

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//04. Tetimonials

var testimonialIndex = 1;
showTestimonials(testimonialIndex);

// Next/previous controls
function plusTestimonial(n) {
  showTestimonials(testimonialIndex += n);
}

// Thumbnail image controls
function currentTestimonial(n) {
  showTestimonials(testimonialIndex = n);
}

function showTestimonials(n) {
  var i;
  var testimonials = document.getElementsByClassName("testimonials");
  
  if (n > testimonials.length) {testimonialIndex = 1}
  if (n < 1) {testimonialIndex = testimonials.length}
  for (i = 0; i < testimonials.length; i++) {
      testimonials[i].style.display = "none";
  }
  
  testimonials[testimonialIndex-1].style.display = "block";
  
}



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
    ];
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
  }



//07. Word Counter

function wordCounter () {

 var text = document.getElementById("input").value;
 var words = text.split(' ');
 document.getElementById('count').innerHTML = words.length;

 }

 //06. Calculator

 class Calculator {
  
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clear()
  }

  clear(){
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
  }

  delete(){
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
  }

  appendNumber(number){
   if (number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }

  chooseOperation(operation){
    if(this.currentOperand === '') return
    if (this.previousOperand !== '') {
      this.compute()
    }  
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
  }

  compute() {
  
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return
     switch (this.operation) {
      case '+':
        computation = prev + current
        break
      case '-':
        computation = prev - current
        break
      case 'x':
        computation = prev * current
        break
      case '÷':
        computation = prev / current
        break
      default: return 
    }

    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''
    
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}` 
    } else {
      return integerDisplay
    }
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText =
      this.getDisplayNumber(this.currentOperand)
    if (this.operation != null) {
      this.previousOperandTextElement.innerText =
        `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    } else {
      this.previousOperandTextElement.innerText = ''
    }
  }
}

 const numberButtons = document.querySelectorAll('[data-number]')
 const operationButtons = document.querySelectorAll('[data-operation]')
 const equalsButton = document.querySelector('[data-equals]')
 const deleteButton = document.querySelector('[data-delete]')
 const allClearButton = document.querySelector('[data-all-clear]')
 const previousOperandTextElement = document.querySelector('[data-previous-operand]')
 const currentOperandTextElement = document.querySelector('[data-current-operand]')

 const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)


 operationButtons.forEach(button => {
  button.addEventListener('click', () => {   
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()

  })
 })

 numberButtons.forEach(button => {
  button.addEventListener('click', () => {   
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()

  })
 })
 
 equalsButton.addEventListener('click', button => {
  calculator.compute()
  calculator.updateDisplay()
})

 allClearButton.addEventListener('click', button => {
  calculator.clear()
  calculator.updateDisplay()
})

 deleteButton.addEventListener('click', button => {
  calculator.delete()
  calculator.updateDisplay()
})
