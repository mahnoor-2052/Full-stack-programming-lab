// ============================================
// TASK 1 — STUDENT MANAGEMENT SYSTEM
// ES6 Class, Constructor, Template Literals
// ============================================

// ES6 Class Definition
class Student {
  constructor(id, name, semester, courses) {
    this.id = id;
    this.name = name;
    this.semester = semester;
    this.courses = courses; // array
  }

  // Method using template literal
  getCardHTML() {
    const courseChips = this.courses
      .map(c => `<span class="course-tag">${c}</span>`)
      .join('');

    return `
      <div class="student-card">
        <div class="sc-id">Student ID &mdash; STU-${this.id}</div>
        <div class="sc-name">${this.name}</div>
        <div class="sc-sem">&#128218; Semester ${this.semester} &nbsp;&bull;&nbsp; ${this.courses.length} Course${this.courses.length !== 1 ? 's' : ''}</div>
        <div class="sc-divider"></div>
        <div class="sc-courses-label">Enrolled Courses</div>
        <div class="sc-courses">${courseChips}</div>
      </div>
    `;
  }
}

// ── State ───────────────────────────────────
const students = [];
let idCounter = 1001;

// ── Initial Data (3 default students) ───────
function initDefaultStudents() {
  const defaults = [
    new Student(idCounter++, 'Ali Hassan', 4, ['Data Structures', 'OOP', 'Calculus II']),
    new Student(idCounter++, 'Sara Khan', 6, ['Machine Learning', 'Databases', 'Web Dev', 'AI Ethics']),
    new Student(idCounter++, 'Umar Farooq', 2, ['Programming Fundamentals', 'Digital Logic', 'Calculus I']),
  ];
  defaults.forEach(s => students.push(s));
  renderStudents();
}

// ── Add Student ──────────────────────────────
function addStudent() {
  const nameInput    = document.getElementById('s-name');
  const semInput     = document.getElementById('s-sem');
  const coursesInput = document.getElementById('s-courses');
  const msgEl        = document.getElementById('form-msg');

  const name        = nameInput.value.trim();
  const semester    = parseInt(semInput.value);
  const coursesRaw  = coursesInput.value.trim();

  // Validation
  if (!name) {
    showMsg('Please enter the student\'s full name.', 'error');
    return;
  }
  if (!semester || semester < 1 || semester > 8) {
    showMsg('Please enter a valid semester (1–8).', 'error');
    return;
  }
  if (!coursesRaw) {
    showMsg('Please enter at least one course.', 'error');
    return;
  }

  const courses = coursesRaw.split(',').map(c => c.trim()).filter(Boolean);

  // Use const for immutable student object reference
  const newStudent = new Student(idCounter++, name, semester, courses);
  students.push(newStudent);

  renderStudents();
  showMsg(`"${name}" has been enrolled successfully.`, 'success');

  // Clear inputs
  nameInput.value = '';
  semInput.value = '';
  coursesInput.value = '';
  nameInput.focus();
}

// ── Render via innerHTML + template literals ─
function renderStudents() {
  const grid   = document.getElementById('students-grid');
  const metaEl = document.getElementById('roster-meta');

  metaEl.textContent = `${students.length} Scholar${students.length !== 1 ? 's' : ''} Enrolled`;

  // Using template literals via .getCardHTML()
  grid.innerHTML = students.map(s => s.getCardHTML()).join('');
}

// ── Helpers ──────────────────────────────────
function showMsg(text, type) {
  const el = document.getElementById('form-msg');
  el.textContent = text;
  el.className = `form-msg ${type}`;
  setTimeout(() => { el.textContent = ''; el.className = 'form-msg'; }, 3500);
}

// Allow pressing Enter to submit
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addStudent();
});

// ── Init ─────────────────────────────────────
initDefaultStudents();
