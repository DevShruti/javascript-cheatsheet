//Including JavaScript in an HTML Page
//To include JavaScript inside a page, you need to wrap it in <script> tags:

<script type="text/javascript">

//JS code goes here

</script>



//Call an External JavaScript File
//You can also place JavaScript in its own file and name it inside your HTML. 
//That way, you can keep different types of code separate from one another,
// making for better-organized files. 
// If your code is in a file called myscript.js, you would call it:

<script src="myscript.js"></script>


//Including Comments
//Comments are important because they help other people understand what is going on in your code or remind you if you forgot something yourself.
//  Keep in mind that they have to be marked properly so the browser won’t try to execute them.

// In JavaScript you have two different options:

// Single-line comments — To include a comment that is limited to a single line, precede it with //
// Multi-line comments — In case you want to write longer comments between several lines, wrap it in /* and */ to avoid it from being executed




// Variables in JavaScript
// Variables are stand-in values that you can use to perform operations. You should be familiar with them from math class.

// var, const, let
// You have three different possibilities for declaring a variable in JavaScript, each with their own specialties:

// var — The most common variable. It can be reassigned but only accessed within a function. Variables defined with var move to the top when the code is executed.
// const — Can not be reassigned and not accessible before they appear within the code.
// let — Similar to const, the let variable can be reassigned but not re-declared.




// Data Types
// Variables can contain different types of values and data types. You use = to assign them:

// Numbers — var age = 23
// Variables — var x
// Text (strings) — var a = "init"
// Operations — var b = 1 + 2 + 3
// True or false statements — var c = true
// Constant numbers — const PI = 3.14
// Objects — var name = {firstName:"John", lastName:"Doe"}
// There are more possibilities. Note that variables are case sensitive. That means lastname and lastName will be handled as two different variables.



// Objects
// Objects are certain kinds of variables. They are variables that can have their own values and methods. The latter are actions that you can perform on objects.

var person = {
    firstName:"John",
    lastName:"Doe",
    age:20,
    nationality:"German"
};



// The Next Level: Arrays
// Next up in our JavaScript cheat sheet are arrays. Arrays are part of many different programming languages.
// They are a way of organizing variables and properties into groups. Here’s how to create one in JavaScript:


var fruit = ["Banana", "Apple", "Pear"];

//Now you have an array called fruit which contains three items that you can use for future operations.



// Array Methods
// Once you have created arrays, there are a few things you can do with them:

// concat() — Join several arrays into one
// indexOf() — Returns the first position at which a given element appears in an array
// join() — Combine elements of an array into a single string and return the string
// lastIndexOf() — Gives the last position at which a given element appears in an array
// pop() — Removes the last element of an array
// push() — Add a new element at the end
// reverse() — Sort elements in a descending order
// shift() — Remove the first element of an array
// slice() — Pulls a copy of a portion of an array into a new array
// sort() — Sorts elements alphabetically
// splice() — Adds elements in a specified way and position
// toString() — Converts elements to strings
// unshift() —Adds a new element to the beginning
// valueOf() — Returns the primitive value of the specified object


// Operators
// If you have variables, you can use them to perform different kinds of operations. To do so, you need operators.

// Basic Operators
// + — Addition
// - — Subtraction
// * — Multiplication
// / — Division
// (...) — Grouping operator, operations within brackets are executed earlier than those outside
// % — Modulus (remainder )
// ++ — Increment numbers
// -- — Decrement numbers


// Comparison Operators
// == — Equal to
// === — Equal value and equal type
// != — Not equal
// !== — Not equal value or not equal type
// > — Greater than
// < — Less than
// >= — Greater than or equal to
// <= — Less than or equal to
// ? — Ternary operator


// Logical Operators
// && — Logical and
// || — Logical or
// ! — Logical not