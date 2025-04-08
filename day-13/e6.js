const patientQueue = [];

function addPatient(name) {
  patientQueue.push(name); // enqueue
  console.log(`${name} has arrived at the hospital.`);
}

function seeNextPatient() {
  if (patientQueue.length === 0) {
    console.log("No patients are waiting.");
    return;
  }

  const patient = patientQueue.shift(); // dequeue
  console.log(`Doctor is now seeing: ${patient}`);
}

// Example usage
addPatient("Alice");
addPatient("Bob");
addPatient("Charlie");

seeNextPatient(); // Alice
seeNextPatient(); // Bob
seeNextPatient(); // Charlie
seeNextPatient(); // No patients are waiting
