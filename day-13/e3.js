const rideQueue = [];
const capacity = 4;

function joinQueue(rider) {
  rideQueue.push(rider);
  console.log(`${rider} joined the line.`);
}

function startRide() {
  if (rideQueue.length === 0) {
    console.log("No riders in line.");
    return;
  }

  const boardingGroup = [];

  for (let i = 0; i < capacity && rideQueue.length > 0; i++) {
    boardingGroup.push(rideQueue.shift());
  }

  console.log("Boarding riders:", boardingGroup.join(", "));
}

// Example usage
joinQueue("Alice");
joinQueue("Bob");
joinQueue("Charlie");
joinQueue("David");
joinQueue("Eve");

startRide(); // Alice, Bob, Charlie, David
startRide(); // Eve
startRide(); // No riders in line