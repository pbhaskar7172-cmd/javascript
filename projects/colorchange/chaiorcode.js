// const buttons = document.querySelector('.canvas')

// console.log(buttons)
// const c = buttons.children

// console.log(c)

// for(let i = 0 ; i<c.length ; i++){
//     console.log(c[i])
// }

console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);   
    console.log(e.target);    // will point to where the click came for entire info about the target , its like the buttons[0] , buttons[1] etc
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});

