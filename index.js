// Variable:
function varExample() {
    if (true) {
        var x = 10;
        console.log(x);
    }
    console.log(x);
}
varExample();


// Let:
function letExample() {
    if (true) {
        let z = 30;
    }
    // console.log(z); // no error but throws undefined
}
letExample();

// redefine is allowed in var
var x = 100;
var x = 150;
console.log(x);

// redefine is not allowed in let
let v = "vinay";
// let v = "kushal";
v = "kushal";
console.log(v);

// Constant:
const PI = 3.14159;
// const can't be updated
// PI = 3.14;
console.log(PI);

// ------------------------------
// DATA TYPES:
// ------------------------------
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

// ------------------------------
// OPERATORS
// ------------------------------
// Arithmetic Operators
let sum = 5 + 10;
let product = 3 * 7;

// Comparison Operators
let isEqual = 10 === 10; // true
let isGreater = 20 > 10; // true

// Logical Operators
let andOperator = (true && false); // false
let orOperator = (true || false); // true



function changeText() {
    document.getElementById('demo').innerHTML = "Hello Updated"
    console.log("Button is clicked")
}

function add(a, b) {
    return a + b;
}

document.getElementById('demo1').addEventListener('click', function () {
    alert("Button clicked");
});

// arrow function
const add1 = (a, b) => a + b;

const randomtext = 'Vinay';
const greeting = `Hello, ${name}`;

console.log(greeting)

// Callback function






// ---------------
// PROMISES
// ---------------

const cart = ["shoes", "pan", "necklace"]

const promise = createOrder(cart);

promise
    .then(function (orderId) {
        proceedToPayment(orderId);
    }).then(function (paymentInfo) {
        showSummaryInfo(paymentInfo);
    }).catch(function (err) {
        console.log(err.message);
    })

function createOrder(cart) {
    return new Promise(function (resolve, reject) {
        if (!validateCart(cart)) {
            const err = new Error("Cart is not valid");
            reject(err);
        }

        const orderId = 12345

        if (orderId) {
            setTimeout(() => {
                resolve(orderId);
            }, 3000);
        }
    })
}

function validateCart(cart) {
    return true;
}

function proceedToPayment(orderId) {
    console.log(orderId + "-> do the payment");
    return 11
}

function showSummaryInfo(paymentInfo) {
    console.log("this is your summary");
}