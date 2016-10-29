console.log( "The MTA Line" );

var lineN = [ "Times Square", "34th", "28th", "23rd", "Union Square", "8th" ];
var lineL = [ "8th", "6th", "Union Square", "3rd", "1st" ];
var line6 = [ "Grand Central","33rd", "28th", "23rd", "Union Square", "Astor Place" ];

var planTrip = function ( originLine, originStation, destinationLine, destinationStation ) {
  // Get origin station and line
  // Get destination station and line
  var isSameLine = originLine === destinationLine;
  var msg = "";
  var totalStops = 0;
  var originStations = getStationsInLine( originLine ); // This will be in array
  var destinationStations = getStationsInLine( destinationLine ); // This will be in array

  // Variable for intersection station stop to identify to go forward or backward
  var intersectionStop = "Union Square";

  // Compare the line if the destination line is the same
  if ( isSameLine ) {
    // Get the station number
    var start = getStationNumber( originLine, originStation );
    var end = getStationNumber( destinationLine, destinationStation );
    var stationNames = "";
    var numberOfStops = 0;

    // Get the station names and number of stops
    stationNames = moveToDestination( start, end, originStations );
    numberOfStops = getNumberOfStopsInSingleLine( start, end );

    msg = singleLineMsgPrefix( originLine, stationNames );

    return msg;
  }
  else {
    // Get the station number
    var stationsOrigin = "";
    var stationsDestination = "";
    var numberOfStops = 0;

    var startA = getStationNumber( originLine, originStation );
    var endA = getStationNumber( originLine, intersectionStop );

    var startB = getStationNumber( destinationLine, intersectionStop );
    var endB = getStationNumber( destinationLine, destinationStation );

    var stations = moveToDestinations( startA, endA, originStations, startB, endB, destinationStations );
    stationsOrigin = stations.origin;
    stationsDestination = stations.destination;
    numberOfStops = getNumberOfStopsInMultipleLine( startA, endA, startB, endB );

    return multipleLineMsgPrefix( originLine, stationsOrigin, destinationLine, stationsDestination, numberOfStops );
  }
};

var getStationNumber = function ( stationLine, stationStop ) {
  var stationNumber = -1;

  if ( stationLine === "N" ) {
    stationNumber = lineN.indexOf( stationStop );

    return stationNumber;
  }
  else if ( stationLine === "L" ) {
    stationNumber = lineL.indexOf( stationStop );

    return stationNumber;
  }
  else if ( stationLine === "6" ) {
    stationNumber = line6.indexOf( stationStop );

    return stationNumber;
  }

  return stationNumber;
};

var singleLineMsgPrefix = function ( line, stationNames ) {
  var msgPrefix = "You must travel through the following stop on "
                  + line
                  + " line: "
                  + stationNames
                  + ".";

  return msgPrefix;
};

var singleLineMsgPrefixs = function ( line, stationNames, totalStops ) {
  var msgPrefix = singleLineMsgPrefix( line, stationNames )
                  + "\n"
                  + totalNumberOfStopsMsgPrefix( totalStops );

  return msgPrefix;
};

var multipleLineMsgPrefix = function ( lineA, stationNamesA, lineB, stationNamesB, totalStops ) {
  var msgPrefix = singleLineMsgPrefix( lineA, stationNamesA )
                  + "\n"
                  + "Change at Union Square.\n"
                  + "Your journey continues through the following stops: "
                  + stationNamesB
                  + "\n"
                  + totalNumberOfStopsMsgPrefix( totalStops );

  return msgPrefix;
};

var totalNumberOfStopsMsgPrefix = function ( stops ) {
  return String( stops ) + " stops in total.";
};

var getStationsInLine = function ( line ) {

  // Return the stations in array
  if ( line === "N" ) {
    return lineN;
  }
  else if ( line === "L" ) {
    return lineL;
  }
  else if ( line === "6" ) {
    return line6;
  }
};

var moveForward = function ( start, end, line ) {
  var stations = [];

  for ( var i = start; i <= end; i++ ) {
    stations.push( line[ i ] );
  }

  return stations.join( ", " );
};

var moveBackward = function ( start, end, line ) {
  var stations = [];

  for ( var i = start; i >= end; i-- ) {
    stations.push( line[ i ] );
  }

  return stations.join( ", " );
};

var moveToDestination = function ( start, end, line ) {
  var stationNames = "";

  if ( parseInt( end ) > parseInt( start ) ) {
    stationNames = moveForward( start + 1, end, line );
  }
  else {
    stationNames = moveBackward( start - 1, end, line );
  }

  return stationNames;
};

var moveToDestinations = function ( startA, endA, lineA, startB, endB, lineB ) {
  var stationNamesA = "";
  var stationNamesB = "";
  var stationNames = {};

  stationNamesA = moveToDestination( startA, endA, lineA );
  stationNamesB = moveToDestination( startB, endB, lineB );

  // Store the origin station name and destination station name
  stationNames.origin = stationNamesA;
  stationNames.destination =  stationNamesB;

  // Takes in object form
  return stationNames;
};


var getNumberOfStopsInSingleLine = function ( start, end ) {
  var numberOfStops = Math.abs( end - start );

  return numberOfStops;
};

var getNumberOfStopsInMultipleLine = function ( startA, endA, startB, endB ) {
  var numberOfStopsA = getNumberOfStopsInSingleLine( startA, endA );
  var numberOfStopsB = getNumberOfStopsInSingleLine( startB, endB );

  var numberOfStops = numberOfStopsA + numberOfStopsB;

  return numberOfStops;
};

console.log( planTrip( "N", "34th", "L", "8th" ) );
