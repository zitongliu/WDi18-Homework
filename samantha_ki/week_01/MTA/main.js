// Creating Lines - forward direction
var lineNForward = [
  "times square",
  "34th",
  "28th",
  "23rd",
  "union square",
  "8th"
];

var lineLForward = [
  "8th",
  "6th",
  "union square",
  "3rd",
  "1st"
];

var line6Forward = [
  "grand central terminal",
  "33rd",
  "28th",
  "23rd",
  "union square",
  "astor place"
];

// Creating Lines - backword direction by reversing array order
var lineNBackward = [];

for (i = 0; i < lineNForward.length; i++) {
  lineNBackward.push(lineNForward[i]);
};
lineNBackward.reverse();

var lineLBackward = [];

for (i = 0; i < lineLForward.length; i++) {
  lineLBackward.push(lineLForward[i]);
};
lineLBackward.reverse();

var line6Backward = [];

for (i = 0; i < line6Forward.length; i++) {
  line6Backward.push(line6Forward[i]);
};
line6Backward.reverse();

// Test Case: If we want to travel from Times Square to Union Square
  // Log the line, the direction, each stop, and how many stops in total
    // You will want to write a function for totalStops
    // You will want to write a function to determine lineDirection
    // You will want to write a function (utilising a for loop) to print & return each stop

// This is the info we are requesting from the user
  // What do we do with this info - how are we storing it to use efficiently?
  // Answer: Write a function to request & store info first
  // Make sure user input aligns with array values - how to test for this?
    // Potential issue: Inconsistent upper/lowercasing
      // Solution: Translate all station input to lowercase - all array values will be referenced in lowercase - will we need to do the same for Line except uppercase?
        // NOTE: All array values will now have to be reconverted upon final printing of output to user
    // Potential issue: - value does not exist in array
      // NOTE: This will need to be addressed via a If/Else statement - if I get to the stage of building an input interface
    // How are we using it?

//var input = startLine + startStop && endLine + endStop;

// Function to return user's input for Starting Line aka origin - making sure that startLine is returned as a string
var startLineRequest = function(start) {
  var startingLine = start.toString();
  console.log("starting line: " + startingLine);
  return startingLine;
};
    // TEST CASE - note as we have processed toString we need to keep this test case
var startLine = startLineRequest("N");

// Function to return user's input for Starting Station
var startStationRequest = function(start) {
  var startingStation = start.toLowerCase();
  console.log("starting station: " + startingStation);
  return startingStation;
};
    // TEST CASE
var startStation = startStationRequest("Union Square");

// Function to return user's input for Ending Line aka destination - making sure that endLine is returned as a string
var endLineRequest = function(end) {
  var endingLine = end.toString();
  console.log("ending line: "+ endingLine);
  return endingLine;
};

var endLine = endLineRequest("N");

// Function to return user's input for Ending Station aka destination
var endStationRequest = function(end) {
  var endingStation = end.toLowerCase();
  console.log("ending station: " + endingStation);
  return endingStation;
};

var endStation = endStationRequest("34th");


// Now that we have the user's input - what do we do with it?
  // First, check whether the startLine === endLine
    // If yes, then move on to second step
    // If no, then send them to Transfer Point ie. Union Square
  // Secondly, we need to figure out the direction they are moving on the line
    // If forward, then reference the forward line array
    // If backward, then reference the backward line array
  // Thirdly, calculate the indexOf startStation & endStation to
    // Store number of stops between the two
    // Print each stop between the two
  // Fourth, test to see whether current location === end location
    // If yes, then return finalTotalStops (final number of total stops) & end
    // If no, then... return to step 1

// DETERMINING LINE TRAVEL DIRECTION
  // First, check the startLine and startStation

// Let's start with the basics - how do we

// TRANSFERRING

  if (startLine === endLine) {
    var transfer = false;
  } else {
    var transfer = true;
};


// Using Transfer information, we create new variable nextStation to determine next step
if (transfer === true) {
  var nextStation = "union square";
  debugger;
  } else {
  var nextStation = endStation;
};

// Getting from one point to another... PT 1
  // CHECKING DIRECTIONAL FLOW...
  // Using indexOf to test and compare the direction of travel

if (startLine = "N") {
  var testLine = lineNForward;
} else if (startLine = "L") {
  var testLine = lineLForward;
} else {
  var testLine = line6Forward;
};

var startStationIndex = testLine.indexOf(startStation);
var nextStationIndex = testLine.indexOf(nextStation);

console.log("when testing, index of start station: " + startStationIndex);
console.log("when testing, index of next station: "+ nextStationIndex);

// Checking which direction of which line

if (startStationIndex < nextStationIndex) {
  var lineDirection = testLine;
} else {
  if (startLine = "N") {
    var lineDirection = lineNBackward;
  } else if (startLine = "L") {
    var lineDirection = lineLBackward;
  } else {
    var lineDirection = line6Backward;
  };
};

startStationIndex = lineDirection.indexOf(startStation);
nextStationIndex = lineDirection.indexOf(nextStation);

// Now you know which way you are going, you can calculate and print out how many stops to the next destination - use a for loop

  // How many stops?
var numberOfStops = nextStationIndex - startStationIndex;
console.log("Number of Stops: " + numberOfStops);

var stopsLog = [];

// logging the stops
for (i = startStationIndex; i < nextStationIndex; i++) {
  stopsLog.push(lineDirection[i]);
};

  // NOTE: at some point, you need to come back and for loop tripStops[i] for trips with multiple lines/legs

var tripStops = stopsLog.join(", ");

console.log(startLine + " stops are: " + tripStops);
