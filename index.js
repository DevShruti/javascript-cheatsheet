// Arrow Functions (ES6)

const addMe = (a ,b) => console.log(a + b);

addMe(5 , 6)

// Arrow function with no arguments 
const printHello = () => { 
    console.log('hello'); 
  }; 
  printHello(); // Prints: hello

  // Arrow functions with a single argument 
const checkWeight = weight => { 
    console.log(`Baggage weight : ${weight} kilograms.`); 
  }; 
  checkWeight(25); // Prints: Baggage weight : 25 kilograms.

  // Defining the function:
function sum(num1, num2) {
    return num1 + num2;
  }
   
  // Calling the function:
  sum(3, 6); // 9
  
  // Named function
function rocketToMars() {
    return 'BOOM!';
  }
   
  // Anonymous function
  const rocketToMars2 = function() {
    return 'BOOM!';
  }

  // The parameter is name
function sayHello(name) {
    return `Hello, ${name}!`;
  }
  
// With return
function sum(num1, num2) {
    return num1 + num2;
  }
   
  // Without return, so the function doesn't output the sum
  function sum(num1, num2) {
    num1 + num2;
  }
  
  
  function myFunction() {
  
    var pizzaName = "Volvo";
    // Code here can use pizzaName
    
  }
   
  // Code here can't use pizzaName


  const isLoggedIn = true;
  const statusMessage = 'User is logged in.';
   
  function loveMessage() {
     if (isLoggedIn == true) {
        return statusMessage
  }
}
   console.log (loveMessage())
  
   
  // Uncaught ReferenceError: statusMessage is not defined if not outside the if loop

// Variable declared globally
const color = 'blue';
 
function printColor() {
  console.log(color);
}
 
printColor(); // Prints: blue

const numbers = [1, 2, 3, 4];
 
numbers.length // 4


// Accessing an array element
const myArray = [100, 200, 300];
 
console.log(myArray[0]); // 100
console.log(myArray[1]); // 200
console.log(myArray[2]); // 300

// Adding a single element:
const cart = ['apple', 'orange'];
cart.push('pear'); 
 
// Adding multiple elements:
const numbers1 = [1, 2];
numbers1.push(3, 4, 5);

console.log(cart)
console.log(numbers1)


const ingredients = ['eggs', 'flour', 'chocolate'];
 
const poppedIngredient = ingredients.pop(); // 'chocolate'
console.log(ingredients); // ['eggs', 'flour']



// An array containing numbers
const numberArray = [0, 1, 2, 3];
 
// An array containing different data types
const mixedArray = [1, 'chicken', false];



//        while loop

//          let i = 0;
 
//          while (i < 5) {        
 //         console.log(i);
 //         i++;
//           }



//          reverse loop 

//           const items = ['apricot', 'banana', 'cherry'];
 
//           for (let i = items.length - 1; i >= 0; i -= 1) {
 //          console.log(`${i}. ${items[i]}`);
//            }
 
// Prints: 2. cherry
// Prints: 1. banana
// Prints: 0. apricot



//         Do--While loop

//        x = 0
//        i = 0
 
//       do {
 //      x = x + i;
//       console.log(x)
//       i++;
//       } while (i < 5);
 
// Prints: 0 1 3 6 10



//        FOR LOOP

//      for (let i = 0; i < 4; i += 1) {
//      console.log(i);
//        };
   
  // Output: 0, 1, 2, 3


  
  
  //      Looping Through Arrays

  //      for (let i = 0; i < array.length; i++){
//        console.log(array[i]);
 //        }
   
  // Output: Every item in the array


  
  
  //                   Break Keyword

//               for (let i = 0; i < 99; i += 1) {
//                if (i > 5) {
 //               break;
//                 }
 //               console.log(i)
 //                 }
   
  // Output: 0 1 2 3 4 5



  //                Nested For Loop
  
  
//                for (let outer = 0; outer < 2; outer += 1){
//                for (let inner = 0; inner < 3; inner += 1) {
//                console.log(`${outer}-${inner}`);
//                 }
//                 }
   
  /* 
  Output:
  0-0
  0-1
  0-2
  1-0
  1-1
  1-2
  */

  