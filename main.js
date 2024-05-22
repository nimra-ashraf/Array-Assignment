//  ARRAY   ASSIGNMENT
// Question#01
//Create an array named fruits that contains the following string elements: "apple", "banana", "mango", "orange".
var fruits = ["apple", "banana", "mango", "orange"];
console.log(fruits, "fruits");
//Question#02
//Declare an array named numbers that can contain only number elements and initialize it with the values 10, 20, 30, and 40.
var numbers = [10, 20, 30, 40];
console.log("numbers", numbers);
//Question#03
//Access the third element of the fruits array and assign it to a variable named thirdFruit.
var thirdFruit = fruits[2];
console.log("Third fruit is", thirdFruit);
//Question#04
//Change the second element of the numbers array to 25.
console.log("Numbers before:", numbers);
numbers[1] = 25;
console.log("Numbers after:", numbers);
//Question#05
//Add the element "grape" to the end of the fruits array using the method.
fruits.push("grape");
console.log("Fruits:", fruits);
//Question#06
//Remove the last element from the fruits array using the method and assign it to a variable named lastFruit.
var lastFruit = fruits;
lastFruit.pop();
console.log("last fruits:", lastFruit);
//Question#07
//Remove the first element from the fruits array using the method and assign it to a variable named firstFruit.
var firstFruit = fruits;
firstFruit.shift();
console.log("first fruit:", firstFruit);
//Question#08
//Add the element "kiwi" to the beginning of the fruits array using the method.
fruits.unshift("kiwi");
console.log("Fruits:", fruits);
