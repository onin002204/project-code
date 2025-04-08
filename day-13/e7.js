const boardingQueue = [];  // Queue: Students waiting in line
const busStack = [];       // Stack: Students seated on the bus

// Student arrives and joins the line
function studentArrives(name) {
  boardingQueue.push(name); // enqueue
  console.log(`${name} has joined the line to board the bus.`);
}

// Student boards the bus
function boardBus() {
  if (boardingQueue.length === 0) {
    console.log("No students in line to board.");
    return;
  }

  const student = boardingQueue.shift(); // dequeue
  busStack.push(student); // push onto the bus stack
  console.log(`${student} has boarded the bus.`);
}

// Emergency exit: students leave the bus in LIFO order
function emergencyExit() {
  if (busStack.length === 0) {
    console.log("No students on the bus.");
    return;
  }

  const student = busStack.pop(); // pop from the top
  console.log(`${student} has exited the bus in an emergency.`);
}

studentArrives("Alice");
studentArrives("Bob");
studentArrives("Charlie");

boardBus(); // Alice boards
boardBus(); // Bob boards
boardBus(); // Charlie boards

emergencyExit(); // Charlie exits first
emergencyExit(); // Bob
emergencyExit(); // Alice