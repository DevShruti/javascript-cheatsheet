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