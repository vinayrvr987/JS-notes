# JavaScript

### Agenda

1. **Introduction**
2. **Basics of Javascript**:
      + Variables and Data Types
      + Operators
      + Control Flow (if statements, loops)
      + Functions
      + Arrays
      + Objects
3. **Accessing HTML elements**
4. **ES6 + Features**:
      + Arrow Functions
      + Template Literals
      + Destructuring
      + Spread/Rest Operators
5. **Error Handling**:
      + Try...Catch Blocks
      + Handling Errors with Promises
6. **Working with Browsers**:
      + Local Storage
      + Fetch API (HTTP Requests)
      + Working with Cookies
7. **Module and Scopes**:
      + Module Import/Export
      + Scope (Global vs. Local)
8. **Functional Programming**:
      + Higher-Order Functions
      + Map, Filter, and Reduce
9. **Asynchronous JavaScript**:
      + Local Storage
      + Callbacks
      + Async/Await
10. **Assignment**

    
---


### 1. Introduction

JavaScript is a scripting language commonly used for web development. It's a versatile tool allowing for dynamic content creation, user interaction, and manipulation of web page elements. Initially executed on the client side within web browsers, it has expanded to server-side environments through platforms like Node.js. JavaScript's key features include its event-driven nature, asynchronous capabilities, and support for various frameworks and libraries, empowering developers to build robust and responsive web applications.

**Keywords in JS**:

+ ### var
`var` was the original way to declare variables in JavaScript before ES6. Variables declared with `var` have function-level scope or global scope if declared outside a function. They can be redeclared and updated within their scope.

Example:
```javascript
function varExample() {
    if (true) {
        var x = 10;
        console.log(x); // Output: 10
    }
    console.log(x); // Output: 10 - accessible due to function-level scope
}
varExample();

console.log(x); // Throws ReferenceError: x is not defined - not accessible outside the function
```

+ ### let
`let` was introduced in ES6 and allows block-scoped variables. Variables declared with `let` can be reassigned but not redeclared within the same scope.

Example:
```javascript
function letExample() {
    if (true) {
        let y = 20;
        console.log(y); // Output: 20
    }
    // console.log(y); // Throws ReferenceError: y is not defined - y is not accessible here due to block scope
}
letExample();

// Example of reassignment
let z = 30;
z = 40;
console.log(z); // Output: 40 - reassignment of let is allowed
```

+ ### const
`const` is used to declare constants. Variables declared with `const` cannot be reassigned to a new value after the initial assignment. However, for complex types like arrays or objects, the properties or elements within these types can still be changed.

Example:
```javascript
const PI = 3.14159;
// PI = 3.14; // Throws TypeError: Assignment to constant variable - reassignment of const is not allowed

const obj = { key: 'value' };
obj.key = 'new value';
console.log(obj); // Output: { key: 'new value' } - modifying object properties is allowed
```

Using `var`, `let`, or `const` depends on your specific needs for variable scoping and mutability. `const` is preferred when the variable should not be reassigned, `let` is used when reassignment is needed, and `var` is generally avoided due to its less predictable scoping behavior.


### 2. Basics of JavaScript 

+ **Variables and Data Types**

Variables are containers for storing data values. JavaScript has several data types:

1. Numbers: Used for numeric values.
2. Strings: Used for text.
3. Booleans: Represents true/false values.
4. Undefined: Default value when a variable is declared but not assigned.
5. Null: Represents an empty or non-existent value.
6. Objects: Used to store collections of data and more complex entities.
7. Arrays: Special kinds of objects used to store ordered collections of data.

Here are examples demonstrating variable declaration and different data types:

```javascript
// Numbers
let numberExample = 42;
let floatExample = 3.14;

// Strings
let stringExample = 'Hello, JavaScript!';
let anotherString = "Double quotes also work.";

// Booleans
let isTrue = true;
let isFalse = false;

// Undefined and Null
let uninitializedVariable; // undefined
let nullValue = null;

// Objects and Arrays
let person = { name: 'John', age: 30 };
let colors = ['red', 'green', 'blue'];
```

+ **Operators**

JavaScript supports various operators for performing operations on variables and values:

1. **Arithmetic Operators**: Addition, subtraction, multiplication, division, modulus (%), increment (++), decrement (--), etc.
2. **Comparison Operators**: Equal to (==), not equal to (!=), greater than (>), less than (<), etc.
3. **Logical Operators**: AND (&&), OR (||), NOT (!), etc.

```javascript
// Arithmetic Operators
let sum = 5 + 10;
let product = 3 * 7;

// Comparison Operators
let isEqual = 10 === 10; // true
let isGreater = 20 > 10; // true

// Logical Operators
let andOperator = (true && false); // false
let or Operator = (true || false); // true
```



+ **Control Flow (if statements, loops)**:

Control flow statements allow you to control the execution flow in your code.

1. **If Statements**: Used to make decisions based on conditions.
2. **Loops**: Repeat code blocks multiple times.
3. **for loop**: Executes a block of code a specified number of times.
4. **while loop**: Executes a block of code while a specified condition is true.

```javascript
// If Statements
let num = 10;
if (num > 0) {
    console.log('Number is positive');
} else if (num === 0) {
    console.log('Number is zero');
} else {
    console.log('Number is negative');
}

// Loops
// For Loop
for (let i = 0; i < 5; i++) {
    console.log('Count: ' + i);
}

// While Loop
let x = 0;
while (x < 5) {
    console.log('Count: ' + x);
    x++;
}
```

+ **Functions**

Functions in JavaScript are blocks of reusable code designed to perform a particular task. They can take parameters (inputs) and return values.

1. Function Declaration:

```javascript
// Function declaration
function greet(name) {
    return 'Hello, ' + name + '!';
}

// Function call
let greeting = greet('Alice');
console.log(greeting); // Output: Hello, Alice!
```

2. **Parameters**: name is a parameter that the greet function expects.

3. **Return Statement**: return specifies the value the function produces.

4. **Arrow Functions (Introduced in ES6)**:

```javascript
// Arrow function
const square = (num) => {
    return num * num;
};

let result = square(5);
console.log(result); // Output: 25
```

+ **Arrays**

Arrays are used to store multiple values in a single variable. They can hold various data types and are accessed via indexes (position numbers).

Array Declaration and Manipulation:

```javascript
// Array declaration
let fruits = ['Apple', 'Banana', 'Orange'];

// Accessing elements
console.log(fruits[0]); // Output: Apple

// Adding elements
fruits.push('Grapes'); // Adds 'Grapes' to the end of the array

// Iterating through an array
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

+ **Objects**

Objects are containers for named values, called properties and methods. They group related data and functionality together.

1. **Object Declaration and Usage**:

```javascript
// Object declaration
let person = {
    name: 'John',
    age: 30,
    greet: function() {
        console.log('Hello!');
    }
};

// Accessing object properties
console.log(person.name); // Output: John

// Calling object method
person.greet(); // Output: Hello!

```
2. **Properties**: name and age are properties of the person object.

3. **Method**: greet is a method, a function attached to an object.

Adding and Modifying Object Properties:

```javascript
// Adding new property
person.location = 'New York';

// Modifying property
person.age = 31;

console.log(person.location); // Output: New York
console.log(person.age); // Output: 31
```


### 3. Accessing HTML elements

Accessing HTML elements refers to using JavaScript to select and manipulate elements from an HTML document. This can be achieved using various methods like getElementById, getElementsByClassName, querySelector, querySelectorAll, etc.

+ **Modifying HTML/CSS through JavaScript**:

Modifying HTML/CSS through JavaScript involves changing the content, styles, attributes, or structure of HTML elements dynamically using JavaScript code. It includes altering text, modifying CSS properties, adding/removing classes, or manipulating the DOM structure.

+ **Event handling**:

Event handling in JavaScript involves capturing and responding to user interactions (like clicks, mouse movements, keyboard inputs) or browser actions (like page loading, resizing). This is achieved by attaching event listeners to HTML elements to execute specific functions when events occur.

Code Examples:


**Accessing HTML elements**:


```javascript
<!DOCTYPE html>
<html>
<head>
  <title>Accessing HTML Elements</title>
</head>
<body>

<p id="demo">Hello, World!</p>

<script>
// Accessing an element by ID
const elementById = document.getElementById('demo');
elementById.innerHTML = 'Hello, Updated!'; // Modifying element content
</script>

</body>
</html>
```

**Modifying HTML/CSS through JavaScript**:

```javascript
<!DOCTYPE html>
<html>
<head>
  <title>Modifying HTML/CSS through JavaScript</title>
  <style>
    .modified-style {
      color: red;
      font-weight: bold;
    }
  </style>
</head>
<body>

<p id="text">Original Text</p>
<button onclick="modifyText()">Modify Text</button>

<script>
function modifyText() {
  const textElement = document.getElementById('text');
  textElement.innerHTML = 'Text Modified';
  textElement.classList.add('modified-style'); // Adding a CSS class
}
</script>

</body>
</html>
```

**Event handling**:

```javascript
<!DOCTYPE html>
<html>
<head>
  <title>Event Handling</title>
  <style>
    .highlight {
      background-color: yellow;
    }
  </style>
</head>
<body>

<button id="myButton">Click Me</button>

<script>
// Event handling - Click event
document.getElementById('myButton').addEventListener('click', function() {
  this.classList.toggle('highlight'); // Toggling CSS class on click
  console.log('Button clicked!');
});
</script>

</body>
</html>
```



### 4. ES6 + Features

+ **Arrow Functions**:

Arrow functions provide a concise way to write function expressions in JavaScript. They have a shorter syntax compared to regular function expressions and have an implicit return.

Example using Arrow Functions:

```javascript
// Regular function expression
function add(a, b) {
  return a + b;
}

// Arrow function equivalent
const add = (a, b) => a + b;
```

Arrow functions are especially useful for shortening function expressions and maintaining a concise syntax, often used in functional programming and for writing shorter, cleaner code.



+ **Template Literals**:

Template literals are a way to create strings in JavaScript, allowing embedded expressions and multi-line strings without concatenation.

Example using Template Literals:

```javascript
const name = 'Alice';
const greeting = `Hello, ${name}!
Welcome to our website.`;

console.log(greeting);
```

Template literals use backticks (``) instead of single or double quotes. They allow embedded expressions ${...} to include variables or expressions directly within the string.

+ **Destructuring**:

Destructuring is a feature that allows unpacking values from arrays or properties from objects into distinct variables.

Example using Destructuring:

```javascript
// Array destructuring
const numbers = [1, 2, 3];
const [first, second, third] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2

// Object destructuring
const person = { name: 'Alice', age: 30 };
const { name, age } = person;

console.log(name); // Output: 'Alice'
console.log(age); // Output: 30
```

Destructuring simplifies the process of extracting values from arrays or objects and assigning them to variables in a more concise and readable way.


+ **Spread/Rest Operators**:

Spread and rest operators provide three dots (...) to manipulate arrays and function arguments.

Example using Spread/Rest Operators:

```javascript
// Spread operator (arrays)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];

console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// Rest parameter (function arguments)
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // Output: 6

```

### 5. Error Handling

1. **Try...Catch Blocks**:

try...catch blocks in JavaScript are used to handle exceptions (errors) that may occur during the execution of code within the try block.

Example using Try...Catch Blocks:

```javascript
try {
  // Code that may throw an error
  const result = someUndefinedVariable + 10;
  console.log(result); // This line won't be executed
} catch (error) {
  // Handling the error
  console.error('An error occurred:', error.message);
}
```

In this example, an error will be thrown because someUndefinedVariable is not defined. The code inside the try block stops executing, and the catch block handles the error by logging the error message to the console.

2. **Handling Errors with Promises**:

When working with Promises, errors can be handled using the .catch() method to handle rejection cases.

Example handling errors with Promises:

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation that fails after a delay
    setTimeout(() => {
      reject(new Error('Failed to fetch data'));
    }, 2000);
  });
}

fetchData()
  .then(data => {
    console.log('Fetched data:', data); // This won't be executed
  })
  .catch(error => {
    console.error('Error fetching data:', error.message);
  });
```

In this example, the fetchData function returns a Promise that rejects after a delay, simulating a failed asynchronous operation. The .catch() method is used to handle the rejection and log the error message to the console.





### 6. Working with Browsers

1. **Local Storage**:

Local Storage is a part of the Web Storage API that allows storing key-value pairs in a user's browser. It provides a way to persistently store data with no expiration date.

Example using Local Storage:

```javascript
// Storing data in local storage
localStorage.setItem('username', 'Alice');

// Retrieving data from local storage
const storedUsername = localStorage.getItem('username');
console.log('Stored username:', storedUsername);

// Removing data from local storage
localStorage.removeItem('username');
```

In this example, localStorage.setItem() stores a key-value pair in local storage, localStorage.getItem() retrieves the stored value, and localStorage.removeItem() removes the item associated with the specified key.

2. **Fetch API (HTTP Requests)**:

The Fetch API provides an interface for making HTTP requests, enabling fetching resources asynchronously across the network.

Example using Fetch API:

```javascript
// Fetching data from an API
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Fetched data:', data);
  })
  .catch(error => {
    console.error('Error fetching data:', error.message);
  });

```

Here, fetch() is used to make a GET request to an API endpoint. The promise chain handles the response, checking for errors, parsing JSON data, and logging the fetched data or handling errors.



3. **Working with Cookies**:

Cookies are small pieces of data stored in the user's browser. They can be set, retrieved, and deleted using JavaScript.

Example working with Cookies:

```javascript
// Setting a cookie
document.cookie = 'username=Alice; expires=Fri, 31 Dec 2023 23:59:59 GMT; path=/';

// Retrieving a specific cookie
const cookies = document.cookie.split('; ');
const usernameCookie = cookies.find(cookie => cookie.startsWith('username'));
const username = usernameCookie ? usernameCookie.split('=')[1] : null;
console.log('Retrieved username from cookie:', username);

// Deleting a cookie
document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
```

In this example, document.cookie is used to set, retrieve, and delete cookies. Cookies are stored as a single string, and manipulation involves parsing the string to get or modify specific cookies.


### 7. Module and Scope

1. **Module Import/Export**:

Modules in JavaScript allow code to be organized into separate files, with export and import statements used to define and use functionalities across different files.

Example using Module Import/Export:
File 1 (module1.js):

```javascript
// module1.js
export const greeting = 'Hello';

export function sayHello(name) {
  return `${greeting}, ${name}!`;
}
```


File 2 (module2.js):

```javascript
// module2.js
import { greeting, sayHello } from './module1.js';

const message = sayHello('Alice');
console.log(message); // Output: Hello, Alice!
```

Here, export is used in module1.js to export the greeting variable and sayHello function. In module2.js, the import statement is used to bring in those exported functionalities, allowing their use within the file.

2. **Scope (Global vs. Local)**:

Scope in JavaScript refers to the accessibility of variables, where they are declared, and where they can be accessed within the code.

Example demonstrating Scope:

```javascript
// Global scope variable
let globalVar = 'I am global';

function scopeExample() {
  // Local scope variable
  let localVar = 'I am local';
  
  console.log(globalVar); // Accessible within function (Global scope)
  console.log(localVar); // Accessible within function (Local scope)
}

console.log(globalVar); // Accessible outside function (Global scope)
console.log(localVar); // Throws ReferenceError (Local variable not accessible globally)
```

In this example, globalVar is declared outside the function and thus is globally accessible. localVar is declared within the scopeExample function and is accessible only within that function's scope, throwing an error when accessed outside it.


### 8. Functional Programming 

1. **Higher-Order Functions**:

Higher-order functions are functions that either take one or more functions as arguments or return a function as a result.

Example of Higher-Order Function:

```javascript
// Higher-order function taking another function as an argument
function operate(func, num) {
  return func(num);
}

function double(x) {
  return x * 2;
}

const result = operate(double, 3); // Passes the function double and the number 3
console.log(result); // Output: 6
```

In this example, operate is a higher-order function that takes a function (func) and a number (num) as arguments. It then calls the passed function (func) with the provided number (num).

2. **Map, Filter, and Reduce**:

map, filter, and reduce are higher-order functions built into JavaScript that allow for functional programming paradigms, often used when dealing with arrays.

Example using Map, Filter, and Reduce:

```javascript
// Map: Modifying each element in an array
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(num => num ** 2);
console.log(squared); // Output: [1, 4, 9, 16, 25]

// Filter: Filtering elements based on a condition
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// Reduce: Reducing elements to a single value
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // Output: 15 (sum of all numbers)
```

+ **‘map’** applies a function to each element of an array and returns a new array with modified elements.
+ **‘filter’** creates a new array with elements that pass a certain condition.
+ **‘reduce’** iterates through an array, accumulating values to produce a single result.



### 9. Asynchronous JavaScript

Asynchronous JavaScript is a crucial part of web development, especially when dealing with tasks that might take time, like fetching data from a server or reading files. There are several methods to handle asynchronous operations:

+ **Callbacks**: They were one of the initial ways to manage asynchronous code in JavaScript. A callback is a function passed as an argument to another function, and it gets executed after the completion of a particular task. However, callback-based code can lead to "callback hell" when dealing with multiple nested asynchronous operations, making code hard to read and maintain.

```javascript
function fetchData(callback) {
  setTimeout(() => {
    const data = 'Callback Data';
    callback(data);
  }, 2000);
}

function processData(data) {
  console.log('Callback Result:', data);
}

fetchData(processData);
// Output after 2 seconds: Callback Result: Callback Data
```

+ **Promises**: Promises were introduced to mitigate the issues with callbacks. A Promise is an object representing the eventual completion or failure of an asynchronous operation and its resulting value. It has methods like .then() to handle success and .catch() to handle errors. Promises offer better readability and are easier to manage than callbacks.

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = 'Promise Data';
      resolve(data);
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log('Promise Result:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
// Output after 2 seconds: Promise Result: Promise Data
```

+ **Async/Await**: Async/Await is a more recent addition to JavaScript that provides a syntactic sugar on top of promises, making asynchronous code look more synchronous and easier to understand. The async keyword is used to declare an asynchronous function, and the await keyword is used within that function to pause execution and wait for a promise to resolve before continuing. Async/Await makes asynchronous code more readable and maintainable, especially when dealing with multiple asynchronous operations.

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = 'Async/Await Data';
      resolve(data);
    }, 2000);
  });
}

async function processData() {
  try {
    const data = await fetchData();
    console.log('Async/Await Result:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

processData();
// Output after 2 seconds: Async/Await Result: Async/Await Data
```

Each of these methods has its strengths and use cases. Async/Await, in particular, is widely favored due to its simplicity and readability, but understanding all three is beneficial for effective JavaScript development, as different scenarios might call for different approaches.




### 10. Assignment: 

For the following assignments use the given Figma link:

[Figma Link for assignments](https://shorturl.at/clP68)


+ **Task 1**: Hover on the like button, and display a mini dialog box indicating ‘I like this”

**Desired Result**:

![Alt image](https://i.postimg.cc/Df1VXqjg/JS-task1.jpg)



**Code**:

```javascript
<!DOCTYPE html>
<html lang="en">


<head>
  <meta charset="UTF-8">
  <title>Video Card with Like Image</title>
  <style>
    /* CSS styles here */
    .video-card {
      width: 300px;
      border: 1px solid #ccc;
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 20px;
    }


    .video-container {
      position: relative;
    }


    .video-container iframe {
      width: 100%;
      height: auto;
    }


    .content {
      padding: 10px;
      position: relative;
    }


    h2 {
      margin-top: 0;
    }


    .like-image {
      width: 30px;
      height: auto;
      cursor: pointer;
      display: block;
      margin: 0 auto;
    }


    .like-dialog {
      display: none;
      position: absolute;
      top: 15px;
      left: 50%;
      transform: translateX(-50%);
      background-color: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 6px 10px;
      border-radius: 4px;
      pointer-events: none;
    }
  </style>
</head>


<body>
  <div class="video-card">
    <div class="video-container">
      <!-- Embed your video here -->
      <iframe width="560" height="315" src="https://www.youtube.com/embed/jCD1JkDp_BQ?si=TW12TuNk8eVRK_9n" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="content">
      <h2>Bosscoder Academy</h2>
      <div class="like-dialog">I like this</div>
      <!-- thumbs-up image -->
      <img class="like-image" src="like.png" alt="Thumbs Up">
    </div>
  </div>


  <script>
    // JavaScript code here
    const likeImages = document.querySelectorAll('.like-image');


    likeImages.forEach((likeImage) => {
      const likeDialog = likeImage.previousElementSibling;


      likeImage.addEventListener('mouseover', () => {
        likeDialog.style.display = 'block';
      });


      likeImage.addEventListener('mouseout', () => {
        likeDialog.style.display = 'none';
      });
    });
  </script>
</body>


</html>

```





+ **Task 2**: On clicking the like button, the like button must change if clicked odd number of times.


**Desired Output**:

![Alt image](https://i.postimg.cc/fyNrKr2v/JS-Task2.jpg)




+ **Task 3**: When pressed even number of times, the like button must return to its default state


**Desired Output**:

![Alt image](https://i.postimg.cc/GpTg1C6Q/JS-task3.jpg)
