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
var lineNBackward = lineNForward.slice();
lineNBackward.reverse();

var lineLBackward = lineLForward.slice();
lineLBackward.reverse();

var line6Backward = line6Forward.slice();
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
var startLine = startLineRequest("L");

// Function to return user's input for Starting Station
var startStationRequest = function(start) {
  var startingStation = start.toLowerCase();
  console.log("starting station: " + startingStation);
  return startingStation;
};
    // TEST CASE
var startStation = startStationRequest("8th");

// Function to return user's input for Ending Line aka destination - making sure that endLine is returned as a string
var endLineRequest = function(end) {
  var endingLine = end.toString();
  console.log("ending line: "+ endingLine);
  return endingLine;
};

var endLine = endLineRequest("6");

// Function to return user's input for Ending Station aka destination
var endStationRequest = function(end) {
  var endingStation = end.toLowerCase();
  console.log("ending station: " + endingStation);
  return endingStation;
};

var endStation = endStationRequest("Astor Place");


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
    var currentLine = startLine;
};


// Using Transfer information, we create new variable nextStation to determine next step
if (transfer === true) {
  var nextStation = "union square";
  } else {
  var nextStation = endStation;
};

var transferComplete = function() {
  console.log("Transfer at Union Square from " + currentLine + " to " + endLine + ".");
  currentLine = endLine;
};

// Getting from one point to another... PT 1
  // CHECKING DIRECTIONAL FLOW...
  // Using indexOf to test and compare the direction of travel

if (currentLine === "N") {
  var testLine = lineNForward;
} else if (currentLine === "L") {
  var testLine = lineLForward;
} else {
  var testLine = line6Forward;
};

var startStationIndex = testLine.indexOf(startStation);
var nextStationIndex = testLine.indexOf(nextStation);

console.log("when testing, index of start station: " + startStationIndex);
console.log("when testing, index of next station: "+ nextStationIndex);

              // CHECKING LINE DIRECTION

if (startStationIndex < nextStationIndex) {
  var lineDirection = testLine;
} else {
  if (currentLine === "N") {
    var lineDirection = lineNBackward;
  } else if (currentLine === "L") {
    var lineDirection = lineLBackward;
  } else {
    var lineDirection = line6Backward;
  };
};

var nextLine = lineDirection;

startStationIndex = nextLine.indexOf(startStation);
nextStationIndex = nextLine.indexOf(nextStation);


                // CALCULATING & PRINTING STOPS
// Now you know which way you are going, you can calculate and print out how many stops to the next destination - use a for loop

  // How many stops?
var numberOfStops = nextStationIndex - startStationIndex;
console.log("Number of Stops: " + numberOfStops);
var numberOfStopsLeg1 = numberOfStops;

var stopsLog = [];

// logging the stops
for (i = startStationIndex; i <= nextStationIndex; i++) {
  stopsLog.push(nextLine[i]);
};

  // NOTE: at some point, you need to come back and for loop tripStops[i] for trips with multiple lines/legs

var tripStops = stopsLog.join(", ");

console.log(currentLine + " stops are: " + tripStops);

transferComplete();


              // TESTING IF WE NEED TO RUN AGAIN

if (currentLine === endLine && nextStation === endStation) {
  // woohoo, we made it! let's start logging shit
  console.log("Final Output goes here, Sam hasn't done this yet");
} else if (currentLine === endLine) {
    transfer = false;
    startStation = nextStation;
    nextStation = endStation;
  // SECOND LEG OF TRIP

      // Getting from one point to another... PT 1
        // CHECKING DIRECTIONAL FLOW...
        // Using indexOf to test and compare the direction of travel

      if (currentLine === "N") {
        var testLine = lineNForward;
      } else if (currentLine === "L") {
        var testLine = lineLForward;
      } else {
        var testLine = line6Forward;
      };

      var startStationIndex = testLine.indexOf(startStation);
      var nextStationIndex = testLine.indexOf(nextStation);
      console.log("when testing, index of start station: " + startStationIndex);
      console.log("when testing, index of next station: "+ nextStationIndex);

                    // CHECKING LINE DIRECTION

      if (startStationIndex < nextStationIndex) {
        var lineDirection = testLine;
      } else {
        if (currentLine === "N") {
          var lineDirection = lineNBackward;
        } else if (currentLine === "L") {
          var lineDirection = lineLBackward;
        } else {
          var lineDirection = line6Backward;
        };
      };

      var nextLine = lineDirection;

      startStationIndex = nextLine.indexOf(startStation);
      nextStationIndex = nextLine.indexOf(nextStation);


                      // CALCULATING & PRINTING STOPS
      // Now you know which way you are going, you can calculate and print out how many stops to the next destination - use a for loop

        // How many stops?
      var numberOfStops = nextStationIndex - startStationIndex;
      console.log("Number of Stops: " + numberOfStops);
      var numberOfStopsLeg2 = numberOfStops;

      var stopsLog = [];

      // logging the stops
      for (i = startStationIndex; i <= nextStationIndex; i++) {
        stopsLog.push(nextLine[i]);
      };
        // NOTE: at some point, you need to come back and for loop tripStops[i] for trips with multiple lines/legs

      var tripStops = stopsLog.join(", ");

      console.log(currentLine + " stops are: " + tripStops);

      var totalStops = numberOfStopsLeg1 + numberOfStopsLeg2;
      console.log("Total Stops: " + totalStops);

} else {
  // they need to transfer again - go back to transfer step
  console.log("Sam hasn't done this yet, and doesn't need to, but wanted to keep it here just in case she has time to investigate");
};

// if (currentLine === endLine && nextStation === endStation) {
  // we made it
  //} else if (currentLine === endLine) {
    // startStation = nextStation;
    // go back to DIRECTIONAL FLOW to progress
  //} else {
    // startStation = nextStation;
    // }
