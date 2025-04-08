// Queue to represent the cafeteria line
const cafeteriaLine = [];

// Function for a student joining the line
function joinLine(student) {
  cafeteriaLine.push(student); // Enqueue
  console.log(`${student} joined the line.`);
}

// Function for serving a student
function serveStudent() {
  if (cafeteriaLine.length === 0) {
    console.log("No students in line.");
  } else {
    const student = cafeteriaLine.shift(); // Dequeue
    console.log(`${student} has been served.`);
  }
}

// Example usage
joinLine("Alice");
joinLine("Bob");
joinLine("Charlie");

serveStudent(); // Alice
serveStudent(); // Bob
serveStudent(); // Charlie
serveStudent(); // No one left