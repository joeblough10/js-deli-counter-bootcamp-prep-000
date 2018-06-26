var katzDeli = [];


var ticketCounter = 1

function takeANumber(katzDeliLine){

  katzDeliLine.push(ticketCounter)
  return "Welcom! you're ticket number" + ticketCounter 
  ticketCounter = ticketCounter+1
  
}


// takeANumber(katzDeli) => "Welcome! you're ticket number #1" [1]
// takeANumber(katzDeli) => "Welcome! You're ticket number #2" [1, 2]

// nowServing(katzDeli) => "Currently serving: #1" [2]
// nowServing(katzDeli) => "Currently serving: #2" []

// takeANumber(katzDeli) => "Welcome! You're ticket number #3" [3]


function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
  return "There is nobody waiting to be served!"}
  else {
    var removalLine = katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving " + removalLine + ".";
    }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
  var lineList = [];
  for(var i=0; i<katzDeliLine.length; i++) {
    lineList.push(i+1 + ". " + katzDeliLine[i]);
  }
    return "The line is currently: " + lineList.join(', ');
}
}