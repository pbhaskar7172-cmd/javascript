// Immediately Invoked Function Expressions (IIFE)

  //iife with normal fucntion 
// function chai(){
//     // named IIFE         //declare and then call , it takes time
//     console.log(`DB CONNECTED`);
// }
// chai()

    

// (function chai(){                   //declared and called immediately
//     // named IIFE                   //no parameters 
//     console.log(`DB CONNECTED`);
// })();
       
       
   
(function chai(num){                   //declared and called immediately
    // named IIFE
    console.log(`DB CONNECTED` , num);
})(5);            // when two iife are used the last is completed by  ; , must be added


                //iife with arrow fucntion 

// ( () => {             //no parameters
//     console.log(`DB CONNECTED TWO `);
// } )();



( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');
    


//iife is not used with the function whihc is declafred in variable