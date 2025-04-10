// ### Problem 1: Unique Student Enrollment (Set)

// **Description:**  
// Imagine a school is maintaining a list of enrolled students for an event. Each student should only be registered once, and duplicate enrollments must be avoided.

// **Instructions:**  
// - Explain how you would use a Set to store the student IDs or names.
// - Outline the operations needed to add a new student and to check if a student is already enrolled.
// - Describe what should happen if an attempt is made to add a duplicate student.


const studentId = new Set();

let redundentCheck = (id) =>{
    if(studentId.has(id)){
        console.log("student already enrolled");
    }
    else{
        studentId.add(id);
        console.log("student added");
    }
}




redundentCheck(23);
redundentCheck(12);
redundentCheck(23);
redundentCheck(23);
redundentCheck(54);
redundentCheck(43);
redundentCheck(32);
redundentCheck(12);




console.log(studentId.has(4));
console.log(studentId.has(2));
console.log(studentId.has(5));
console.log(studentId.has(7));

