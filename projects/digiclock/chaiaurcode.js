const p = document.querySelector('#clock');



setInterval(function(){
  let date  = new Date();
 //console.log(date.toLocaleTimeString);
 p.textContent = date.toLocaleTimeString()

} , 1000)