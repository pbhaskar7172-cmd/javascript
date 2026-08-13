const random = parseInt((Math.random()*100) + 1)
console.log(random)

const input = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const guessSlot = document.querySelector('.guesses')
const result = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas');


const p = document.createElement('p')

let gn = 1 ;
let pg = []
 let play = true;


 if(play){
  submit.addEventListener('click' , function(e) {
     e.preventDefault();
     const guess = parseInt(input.value)
     validate(guess);
  })
 }


 function validate(guess){
  if(isNaN(guess)){
    alert('Please enter a valid number')
     input.value = ''
  }
  else if(guess<1){
    alert('Please enter a valid number greater then 1')
     input.value = ''
  }

   else if(guess>100){
    alert('Please enter a valid number less then 100')
     input.value = ''
  }
  else{
    if(gn==10) {
    //  displayguess(guess)
     displaymessages(`Game over , The number was ${random}`)
     endgame()
    }
    else{
      check(guess)
      displayguess(guess)

    }
  }


 }


 function check(guess){
      if(guess==random) {
        displaymessages(`You Guessed number ${random} is right BRO  `)
         endgame()
      }
      else if(guess>random){
        displaymessages('Be Down Man')
      }
      else{
        displaymessages('increase the number')
      }
 }
 

 function displayguess(guess) {
  input.value = ''
  guessSlot.textContent += `${guess} , `
  gn++;
  result.textContent = 11 - gn
 }


 function displaymessages(message){
 lowOrHi.innerHTML = `<h2>${message}</h2>`;
 }



 function endgame() {
    play = false;
    input.setAttribute('disabled' , '')
    p.setAttribute('id' , 'para')
   p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p);
    start()

 }


 
 function start() {
   const newGameButton = document.querySelector('#newGame');
  newGameButton.style.cursor = 'pointer';
  p.addEventListener('click', function (e) {
    input.value = ''
    guessSlot.textContent = ``
    gn = 1;
    result.textContent = 11 - gn
    play = true;
    input.removeAttribute('disabled');
    startOver.removeChild(p);
   

  });
 }

 