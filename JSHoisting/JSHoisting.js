// Assignment: JavaScript Hoisting
// Objectives:
    // 1. Practice reading JavaScript the same way as the interpreter reads it.

// Rewrite the code the way it would be seen by the interpreter and predict the output. An example is shown here:

// GIVEN:
console.log(example);
var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER:
var example;
console.log(example); // logs undefined
example = "I'm the example!";
// After you've made your prediction, run the original code to find out if you were right! If your predictions were incorrect, 
// look back at how the code is hoisted by the interpreter.

// Note
// Run the same code as above with ES6 syntax and compare your results:
console.log(example);
let example = "I'm the example!"; // logs error
// Even if let and const prevent a lot of the confusing behavior of JavaScript's hoisting, these are ES6 constructs and a huge 
// amount of the world's live JavaScript code is still ES5. Understanding how ES5 hoists var and the rules of scoping are 
// important for every JavaScript developer!

// 1.
// GIVEN:
console.log(hello);                                   
var hello = 'world';                                 
// AFTER HOISTING BY THE INTERPRETER:
var hello = 'world';        
console.log(hello); 
// OUTPUT: 
undefined

// 2.
// GIVEN:
var needle = 'haystack';
test();
function test(){
	var needle = 'magnet';
	console.log(needle);
}
// AFTER HOISTING BY THE INTERPRETER:
var needle = 'haystack';
var needle = 'magnet';
test();
function test(){
	console.log(needle);
}
// OUTPUT: 
'magnet'

// 3.
// GIVEN:
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);
// AFTER HOISTING BY THE INTERPRETER:
var brendan = 'super cool';
console.log(brendan); // 'super cool'
// OUTPUT: 
'super cool'

// 4.
// GIVEN:
var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}
// AFTER HOISTING BY THE INTERPRETER:
var food = 'chicken';
console.log(food);
function eat(){
    var food = 'gone';
	food = 'half-chicken';
	console.log(food);
}
eat();
// OUTPUT: 
'chicken'
'half-chicken'

// 5.
// GIVEN:
mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);
// AFTER HOISTING BY THE INTERPRETER:
var mean = function() {
    var food = "fish";
	food = "chicken";
	console.log(food);
	console.log(food);
}
console.log(food);
mean();
console.log(food);
// OUTPUT: 
error

// 6.
// GIVEN:
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);
// AFTER HOISTING BY THE INTERPRETER:
var genre = "disco";
function rewind() {
    var genre = "r&b";
	genre = "rock";
	console.log(genre);
	console.log(genre);
}
rewind();
console.log(genre);
// OUTPUT: 
'rock'
'rock'
'disco'

// 7.
// GIVEN:
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);
// AFTER HOISTING BY THE INTERPRETER:
dojo = "san jose";
console.log(dojo);
function learn() {
    var dojo = "burbank";
	dojo = "seattle";
	console.log(dojo);
	console.log(dojo);
}
learn();
console.log(dojo);
// OUTPUT: 
'san jose'
'seattle'
'seattle'
'san jose'








// 8.
// GIVEN:
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}
// AFTER HOISTING BY THE INTERPRETER:
// OUTPUT: 

