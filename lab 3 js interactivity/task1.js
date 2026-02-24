// Student class
class Student {
    constructor(id, name, semester, courses) {
        this.id = id;
        this.name = name;
        this.semester = semester;
        this.courses = courses;
    }
}

// Create student objects
const student1 = new Student(1, "Ali", "5th", ["OOP", "DBMS"]);
const student2 = new Student(2, "Ayesha", "3rd", ["DSA", "OS"]);
const student3 = new Student(3, "Ahmed", "7th", ["AI", "ML"]);

// Store students in array
let students = [student1, student2, student3];

// Display students dynamically
let output = "";

students.forEach(student => {
    output += `
        <p>
            <strong>ID:</strong> ${student.id}<br>
            <strong>Name:</strong> ${student.name}<br>
            <strong>Semester:</strong> ${student.semester}<br>
            <strong>Courses:</strong> ${student.courses.join(", ")}
        </p>
        <hr>
    `;
});

document.getElementById("studentList").innerHTML = output;