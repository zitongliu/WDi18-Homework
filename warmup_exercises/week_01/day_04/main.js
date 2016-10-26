
// Start out by just hardcoding the input (year) we want to test.
// var input = 2000;

// Once we got all that working, we got the input from the user using the window's prompt method, and storing the input in a variable called 'input'.
var input = prompt("What year do you want to test?");

// "We want a custom function called 'isLeapYear'"
var isLeapYear = function(year) {
  // I'll start by declaring a variable called 'result', but not assigning a value to it.
  var result;
  // First test - "Every year that is evenly divisible by 4..."
  if (year % 4 === 0) {
    // Second test - "Except if it is evenly divisible by 100..."
    // Third test - "Unless it is also divisible by 400"
    if ((year % 100 === 0) && (year % 400 !== 0)) {
      result = " not a leap year";
    } else {
      result = " a leap year";
    }
    // This is our 'catch-all' - if it's not evenly divisible by 4 (ie, if the first condition in the function was not met), it's not a leap year.
  } else {
    result = " not a leap year";
  }
  // In practice, we usually want a function to return a value. But simply returning a value won't actually log it in the console for us. So before we return anything, we need to console log it (since no code after a return statement will be executed). Another way to do this would be to console log the function call itself (see below)
  console.log(year + result);
  return year + result;
};

// console.log(isLeapYear(input))
isLeapYear(input);
