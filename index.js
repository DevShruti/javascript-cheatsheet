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

  /*                 Functions Assigned to Variables 


                     let plusFive = (number) => {
                     return number + 5;  
                      };
                  
                  
                      // f is assigned the value of plusFive
                   let f = plusFive;
 
                   
                      plusFive(3); // 8
                  
                      // Since f has a function value, it can be invoked. 
                    f(9); // 14

 */


/*                   Callback Functions


                 const isEven = (n) => {
                 return n % 2 == 0;
                  }
 
                    let printMsg = (evenFunc, num) => {
                     const isNumEven = evenFunc(num);
                   console.log(`The number ${num} is an even number: ${isNumEven}.`)
                       }
 
            // Pass in isEven as the callback function
                  printMsg(isEven, 4); 
             // Prints: The number 4 is an even number: True.

  */
 
   /*                 Higher-Order Functions
   
                      Array Method .forEach() 

                      const numbers = [28, 77, 45, 99, 27];
 
                     numbers.forEach(number => {  
                   console.log(number);
                      });
   */
  
    //                  Array Method .map()
                     
                      const finalParticipants = ['Taylor', 'Donald', 'Don', 'Natasha', 'Bobby'];
 
                       const announcements = finalParticipants.map(member => {
                       return member + ' joined the contest.';
                        })
 
                       console.log(announcements);


  //                   Array Method .filter()                    

                       const randomNumbers = [4, 11, 42, 14, 39];
                       const filteredArray = randomNumbers.filter(n => {  
                         return n > 5;
                       });         
                       
                       console.log(filteredArray)


 //                      Array Method .reduce()
 
 
                        const arrayOfNumbers = [1, 2, 3, 4];
 
                        const sum1 = arrayOfNumbers.reduce((accumulator, currentValue) => {  
                        return accumulator + currentValue;
                        });
                         
                        console.log(sum1); // 10

 //                     Dot Notation for Accessing Object Properties
 
                      const apple = { 
                       color: 'Green',
                       price: {
                       bulk: '$3/kg',
                       smallQty: '$4/kg'
                      }
                        };
                     console.log(apple.color); // 'Green'
                     console.log(apple.price.bulk); // '$3/kg'

  //                 Accessing non-existent JavaScript properties
  
                    const classElection = {
                    date: 'January 12'
                    };
   
                   console.log(classElection.place); // undefined

 
 //                 JavaScript Objects are Mutable
 
                   const student = {
                   name: 'Sheldon',
                   score: 100,
                   grade: 'A',
                     }
   
                  console.log(student)
              // { name: 'Sheldon', score: 100, grade: 'A' }
   
                   delete student.score
                   student.grade = 'F'
                  console.log(student)
                 // { name: 'Sheldon', grade: 'F' 
                          
          
          
                  // JavaScript for...in loop

  
                  let mobile = {
                 brand: 'Samsung',
                model: 'Galaxy Note 9'
                };
   
             for (let key in mobile) {
             console.log(`${key}: ${mobile[key]}`);
              }

  
              // Delete operator

  
             const person = {
             firstName: "Matilda",
             age: 27,
             hobby: "knitting",
             goal: "learning JavaScript"
              };
   
           delete person.hobby; // or delete person[hobby];
   
         console.log(person);
 
         /*
 
           {
              firstName: "Matilda"
              age: 27
              goal: "learning JavaScript"
           }
  */
    
  
  
              //javascript passing objects as arguments

            const origNum = 8;
            const origObj = {color: 'blue'};
 
            const changeItUp = (num, obj) => {
            num = 7;
            obj.color = 'red';
             };
 
           changeItUp(origNum, origObj);
 
          // Will output 8 since integers are passed by value.
          console.log(origNum);
 
          // Will output 'red' since objects are passed 
          // by reference and are therefore mutable.
          console.log(origObj.color);



          // JavaScript Object Methods


          const engine = {
         // method shorthand, with one argument
          start(adverb) {
         console.log(`The engine starts up ${adverb}...`);
         },  
       // anonymous arrow function expression with no arguments
        sputter: () => {
        console.log('The engine sputters...');
       },
        };
   
        engine.start('noisily');
        engine.sputter();
   
            /* Console output:
          The engine starts up noisily...
         The engine sputters...
            */



  // JavaScript destructuring assignment shorthand syntax


  const rubiksCubeFacts = {
    possiblePermutations: '43,252,003,274,489,856,000',
    invented: '1974',
    largestCube: '17x17x17'
  };
  const {possiblePermutations, invented, largestCube} = rubiksCubeFacts;
  console.log(possiblePermutations); // '43,252,003,274,489,856,000'
  console.log(invented); // '1974'
  console.log(largestCube); // '17x17x17'




  // shorthand property name syntax for object creation


  const activity = 'Surfing';
const beach = { activity };
console.log(beach); // { activity: 'Surfing' }



// this Keyword

const cat = {
    name: 'Pipey',
    age: 8,
    whatName() {
      return this.name  
    }
  };
   
  console.log(cat.whatName()); 
  // Output: Pipey

  
  
  // javascript function this

  
const restaurant = {
    numCustomers: 45,
    seatCapacity: 100,
    availableSeats() {
      // this refers to the restaurant object
      // and it's used to access its properties
      return this.seatCapacity - this.numCustomers;
    }
  }
 
  
  
  //JavaScript Arrow Function this Scope

  
const myObj = {
    data: 'abc',
    loggerA: () => { console.log(this.data); },
    loggerB() { console.log(this.data); },
};
 
myObj.loggerA();    // undefined
myObj.loggerB();    // 'abc




// getters and setters intercept property access

const myCat = {
    _name: 'Snickers',
    get name(){
      return this._name
    },
    set name(newName){
      //Verify that newName is a non-empty string before setting as name property
      if (typeof newName === 'string' && newName.length > 0){
        this._name = newName; 
      } else {
        console.log("ERROR: name must be a non-empty string"); 
      }
    }
  }

 
 
 
  // javascript factory functions

  // A factory function that accepts 'name', 
// 'age', and 'breed' parameters to return 
// a customized dog object. 
const dogFactory = (name, age, breed) => {
    return {
      name: name,
      age: age,
      breed: breed,
      bark() {
        console.log('Woof!');  
      }
    };
  };

  
  
  
  // javascript getters and setters restricted

  const myCat = {
    _name: 'Dottie',
    get name() {
      return this._name;  
    },
    set name(newName) {
      this._name = newName;  
    }
  };
   
  // Reference invokes the getter
  console.log(myCat.name);
   
  // Assignment invokes the setter
  myCat.name = 'Yankee';


  
  
  
  // Class

  class Song {
    constructor() {
      this.title;
      this.author;
    }
    
    play() {
      console.log('Song playing!');
    }
  }
   
  const mySong = new Song();
  mySong.play();


  
  
  // Class Constructor

  class Song {
    constructor(title, artist) {
      this.title = title;
      this.artist = artist;
    }
  }
   
  const mySong = new Song('Bohemian Rhapsody', 'Queen');
  console.log(mySong.title);

  
  
  // Class Methods

  class Song {
    play() {
      console.log('Playing!');
    }
    
    stop() {
      console.log('Stopping!');
    }
  }

 
  
 
  //extends

   // Parent class
class Media {
    constructor(info) {
      this.publishDate = info.publishDate;
      this.name = info.name;
    }
  }
   
  // Child class
  class Song extends Media {
    constructor(songData) {
      super(songData);
      this.artist = songData.artist;
    }
  }
   
  const mySong = new Song({ 
    artist: 'Queen', 
    name: 'Bohemian Rhapsody', 
    publishDate: 1975
  });

  
  
  
  // Static Methods

  class Dog {
    constructor(name) {
      this._name = name;  
    }
    
    introduce() { 
      console.log('This is ' + this._name + ' !');  
    }
    
    // A static method
    static bark() {
      console.log('Woof!');  
    }
  }
   
  const myDog = new Dog('Buster');
  myDog.introduce();
   
  // Calling the static method
  Dog.bark();

