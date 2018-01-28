/*----STANDARD VARIABLES----*/
var shane      = 'Shane';

/*----ARRAYS----*/
var shaneArray = new Array('Shane','Paul','Martin');
//document.getElementById grabs an id from the HTML page, .innerHTML replaces whatever HTML is in that id container with the variable after the =
function seeTheArray(){
	document.getElementById('arrays').innerHTML = shaneArray;
}

/*----Document Writing----
Can use the document.write() command inline HTML to inject a variable*/
var name          = 'Shane';
var age           = '28';
var maritalStatus = 'Married';

/*----MATH----
JavaScript follows the order of operation - PEMDAS
+ = Addition
- = Subtraction
* = Multiplication
/ = Division
*/
var math1           = 10;
var math2           = 10;
var calculationMath = math1 + math2;
// var calculationMath = math1 - math2;
// var calculationMath = math1 * math2;
// var calculationMath = math1 / math2;
alert(calculationMath);

//This will yield a result of 60 following PEMDAS
var calculate = 10 + 10 * 5;
alert(calculate);
//Paranthesis can be used to change execution order, yielding 100
var calculate1 = (10 +10) * 5;
alert(calculate1);

/*----CALCULATIONS----*/
var number1     = 500;
var number2     = 300;
var calculation = number1 + number2;
document.write(calculation);

/*-----FUNCTIONS-----
function + name (parameters) {
	
}

Call the Function via
	name();
*/
function addNumbers(){
	var calculation = number1 + number2;
	document.getElementById('calc').innerHTML = calculation;
}
//The below uses passive parameters in the paranthesis, that are gleaned from the HTML document addNumber(x, x);
function addNumber(number1,number2){
	var calculation = number1 + number2;
	document.write(calculation);
}
//Below sets two variables, calculates them, returns a calculation, assigns a variable to the result, modifies the result, then alerts the modified result out.
function complexCalculation(){
	var complex0 = 10;
	var complex1 = 20;
	var compcalc = complex0 + complex1;
return compcalc;
}
var result = complexCalculation();
var cal    = result + 1000;
alert(cal);

/*----IF ELSE STATEMENTS----
if(this condition is true) {
	do this
}

== Equal
=== Stronger version of equal, exactly the same
< Less than 
<= Less than or Equal
> Greater than
=> Greater than or Equal
!== Not Equal
*/
var numeral1 = 5;
var numeral2 = 50;

if(numeral1 === numeral2) {
	alert('Exactly Equal');
} else if(numeral1 == numeral2) {
	alert('Equal');
} else if(numeral1 < numeral2) {
	alert('Less');
} else if(numeral1 > numeral2) {
	alert('More');
} else {
	alert('Something Else');
}

/*----LOOPING----
While loops evaluate the condition before executing.
while(this condition is true) {
	repeat this over and over until condition is not met
}
*/
var counter = 0;
while(counter < 5){
	document.write("<div>" + "While Loop " + counter + "<br>" + "</div>");
	counter++;
	//The ++ indicator increments up.  Also can use the long version counter = counter + 1; 
}

//For Loops - Shorthand Version of While - Most Common
for(var f = 0; f < 5; f++){
	document.write("<div>" + "For Loop " + f + "<br>" + "</div>");
}

//Do While loops trigger before the while condition is evaluated, executed AT LEAST ONCE
var i = 0;
do {
	document.write("<div>" + "Do While Loop " + i + "<br>" + "</div>");
	i++;
} while(i < 5);

/*----EVENT HANDLING----
MOUSE EVENTS
onclick - Fires on a mouse click on the element
ondblclick - Fires on a mouse double-click on the element
onmousedown - Fires when a mouse button is pressed down on an element
onmousemove - Fires when the mouse pointer is moving while it is over an element
onmouseout - Fires when the mouse pointer moves out of an element
onmouseover - Fires when the mouse pointer moves over an element
onmouseup - Fires when the mouse button is released over an element
onwheel - Fires when the mouse wheel rolls up or down over an element

KEYBOARD EVENTS
onkeydown - Fires when a user is pressing a key
onkeypress - Fires when a user presses a key
onkeyup - Fires when a user releases a key

*/
/* Use document.getElementById to grab the id of the control, assign the onclick event handler with the dot notation (.), then place the function name in the statement.  Notice that this is a statement and therefore needs a ; at the end of the function brackets. */
document.getElementById('external').onclick = function() {
	clickFunction()
};
/* The function name used above must be created in order to do something. */
function clickFunction() {
	alert('Hello from the best function');
}
/* The function can then be repeated for use on additional id's by simply modifying the document.getElementById parameters. */
document.getElementById('external2').onclick = function() {
	clickFunction()
};
/* Accessibility Thoughts - Need to write parameters to add full keyboard support to a similar function */
document.getElementById('custom').onclick = function() {
	a11y()
};
document.getElementById('custom').onkeypress = function() {
	a11y()
};

function a11y() {
	alert('This is an accessible control');
}

//NEED TO FIGURE THIS OUT - CURRENTLY DOES NOT WORK

document.getElementById('addition').onclick = function() {
	addMe();
	returnAddition();

};

function addMe() {
	var firstNumber    = document.getElementById('form0').value;
	var secondNumber   = document.getElementById('form1').value;
	var additionResult = firstNumber + secondNumber;
return additionResult;
}

var calcresult = addMe();

function returnAddition() {
	document.getElementById('additionResults').innerHTML = calcresult;
}

// onkeypress and onkeydown keyboard character generation
function uniCharCode(event){
	var char = event.which || event.keyCode; // event.which returns the UNICODE character code, not supported in IE8 and earlier.  However, keyCode is not supported by Firefox onkeypress, therefore you use the combined event.which || event.keyCode for a cross-browser solution.
	document.getElementById('keycode0').innerHTML = 'The Unicode CHARACTER code is: ' + char;
}
function uniKeyCode(event){
	var key = event.keyCode;
	document.getElementById('keycode1').innerHTML = 'The Unicode KEY code is: ' + key;
}

/*---- JQUERY ---- */


/*----- CONSOLE OBJECT -----*/
// console.assert(Assertion, ErrorMessage)
// If the assertion is true, nothing happens.
// If the assertion is false, error message is thrown to the console.

	$.ajax({
		url: 'https://reqres.in/api/users',
		type: 'GET',
		success: function(response) {
			console.log(response);
			console.assert(response.per_page === 4, '[Error]: Item numbers per page is not true!');
		}
	});

// console.clear()
// Simply clears the console, sometimes libraries/frameworks can clutter the console
// Can be performed in the browser console, or placed explicitly in the JS file

window.onload = function() {
	console.log('Console Log 1');
	console.log('Console Log 2');
	console.log('Console Log 3');
	console.log('Console Log 4');
	console.log('Console Log 5');
	console.log('Console Log 6');
	console.log('Console Log 7');
	console.log('Console Log 8');
	console.log('Console Log 9');
	console.log('Console Log 10');
//	console.clear();

}

// console.count(label)
// Writes the number of times that count() has been invoked
var label = 'Function is called';
console.count(label);

function foo() {
	console.count(label);
}

foo();
foo();

// console.dir(object) - Displays the object in JavaScript representation
// This is similar to console.log(object), however in most browsers this will simply log an HTML object.  Notable exception is Firefox Quantum Developer Edition (which parses console.log(object) and console.dir(object) the same)
console.log(document.body);
console.dir(document.body);

// console.dirxml(object) - Displays the object in XML representation with all descendants.  Identical to console.log(object).  These do the exactly same thing.
console.log(document.body);
console.dirxml(document.body);

// console.error() - Displays an error style message to the console (with error icon) in red color text.  Also, the stack trace is shown allowing you to trace where the error occured.  This is a better method than the shown console.log(), as this simply makes another standard line item in the console.  console.error() is much more visible and easier to identify the error.
	$.ajax({
		url: 'test.url.co.uk',
		type: 'GET',
		error: function(errorResponse) {
			console.log(errorResponse.statusText);
			console.error(errorResponse.statusText);
		}
	});

// console.group()
// Make a group for other console functions
// console.groupCollapsed()
// console.groupEnd()
// The below AJAX call loops out the users separately to the console
	$.ajax({
		url: 'https://reqres.in/api/users',
		type: 'GET',
		success: function(response) {
			var users = response.data;
			for (var i = 0; i < users.length; i++){
				console.log(users[i].id); // in this example this logs the user number
				console.log(users[i].first_name); // logs the user's first name
				console.log(users[i].last_name); // logs the user's last name
				console.log(users[i].avatar); // logs the user's avatar reference
			}
		}
	})

// The above AJAX call can make a mess of the console when the returned items are large.  Instead use console.group()
	$.ajax({
		url: 'https://reqres.in/api/users',
		type: 'GET',
		success: function(response) {
			var users  = response.data;
			for (var i = 0; i < users.length; i++){
				logUsers(users[i]);
			}
		}
	})

	function logUsers(user){
			console.group('User'); // open tag for groups
				console.log(user.id); // in this example this logs the user number
			console.groupCollapsed('Name'); // creates a sub-group for more structure in the console, the groupCollapsed identifier simply collapses the group in the console for easier readability
				console.log(user.first_name); // logs the user's first name
				console.log(user.last_name); // logs the user's last name
			console.groupEnd(); // closes sub-group "Name"
				console.log(user.avatar); // logs the user's avatar reference
			console.groupEnd(); // closes group "Users"
	}

// console.info() - Displays like console.log() but also shows an info icon next to the message
console.info('This is console.info()');
console.log('This is console.log()');

// console.log() - Displays a message to the console.  Most commonly used console function.  
console.log('This is a message displayed via console.log()');
// This style of semantics is identical to the input: printf usage.
console.log('This is %s', 'a string variable');
console.log('This is %d', 14, 'a number variable');
console.log('This is %s, %d, %s, %d', 'a string variable with', 14, 'a number variable and one more', 15);
// This method can style the console message
console.log('%cThis is %cconsole.log', 'font-size: 60px', 'color: red');

//console.table() - Displays an array of objects as a table in the console.  Very useful for displaying array information in a sortable table for easy viewing in the console.
	$.ajax({
		url: 'https://reqres.in/api/users?per_page=10',
		type: 'GET',
		success: function(response) {
			var userz = response.data;
			console.table(userz); // NOTE - Table does not appear to be sortable in Firefox Quantum Developer Edition
			}
	})

//console.time(label) - Label is optional.  Starts a timer
//console.timeEnd(label) - Stops the timer and writes the elapsed time to the console.
// Used to time operations/functions and evaluate performance.
console.time('for loop label');
for (var j = 0; j < 100000000; j++){
	var k = j * 5;
}
console.timeEnd('for loop label');
// if you do not specify a label, the console will say defaul: 'time elapsed'.  It's better to define the label that way you can track multiple timers and be more specific.
console.time('user data fetch time');
	$.ajax({
		url: 'https://reqres.in/api/users',
		type: 'GET',
		success: function(response) {
			console.log(response);
			}
	})
console.timeEnd('user data fetch time');

//console.trace(label) - Useful debugging function, displays a stack trace from the point where the method was called.  For complex JavaScript applications, it can be very difficult to diagnose a problem.  Due to the complexity, you can't easily identify the correct place to make the fix.
function firstFunction() {
	secondFunction();
}
function secondFunction() {
	thirdFunction();
}
function thirdFunction() {
	console.trace('test trace stack'); // once again the label is optional, but can be useful for specificity.  If no label, the console will show 'console.trace()'.  NOTE - Label does not seem to be supported in Firefox Quantum Developer Edition
}
firstFunction();

//console.warn() - Displays a warning message in the console, with a warning icon(!) and a yellow background.
console.warn('This is a warning message');








	



