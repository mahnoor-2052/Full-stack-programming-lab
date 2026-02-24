class Student {
  constructor(id, name, semester, courses) {
    this.id = id;
    this.name = name;
    this.semester = semester;
    this.courses = courses;
    this.createdAt = new Date();
  }
}

let students = [];

const form = document.getElementById("studentForm");
const table = document.getElementById("studentTable");
const searchInput = document.getElementById("search");
const stats = document.getElementById("stats");
const clearBtn = document.getElementById("clearBtn");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const id = +document.getElementById("id").value;
  const name = document.getElementById("name").value.trim();
  const semester = document.getElementById("semester").value.trim();
  const courses = document
    .getElementById("courses")
    .value.split(",")
    .map((c) => c.trim())
    .filter(Boolean);

  if (students.some((s) => s.id === id)) {
    alert("Student with this ID already exists!");
    return;
  }

  const student = new Student(id, name, semester, courses);
  students.push(student);

  form.reset();
  render(students);
});

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = students.filter((s) => s.name.toLowerCase().includes(query));
  render(filtered);
});

clearBtn.addEventListener("click", () => {
  if (confirm("Are you sure you want to delete all students?")) {
    students = [];
    render(students);
  }
});

function deleteStudent(id) {
  students = students.filter((s) => s.id !== id);
  render(students);
}

function render(list) {
  table.innerHTML = list
    .map(
      (s) => `
      <tr>
        <td>${s.id}</td>
        <td>${s.name}</td>
        <td>${s.semester}</td>
        <td>${s.courses.join(", ")}</td>
        <td>
          <button onclick="deleteStudent(${s.id})">Delete</button>
        </td>
      </tr>
    `,
    )
    .join("");

  stats.innerHTML = `Total Students: ${list.length}`;
}
