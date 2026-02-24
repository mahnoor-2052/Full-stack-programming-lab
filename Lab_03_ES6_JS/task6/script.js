// ============================================
// TASK 6 — MINI UNIVERSITY PORTAL
// Class + Map + Set + Promise — Combined System
// ============================================

// ── ES6 CLASS ────────────────────────────────
class Student {
  constructor(id, name, courses) {
    this.id = id;
    this.name = name;
    this.courses = Array.isArray(courses) ? courses : [courses];
    this.enrolledAt = new Date().toLocaleTimeString();
  }

  getSummary() {
    return `${this.name} (${this.courses.length} course${this.courses.length > 1 ? 's' : ''})`;
  }
}

// ── MAP — store students ──────────────────────
const studentMap = new Map();

// ── SET — store unique courses ────────────────
const courseSet = new Set();

// ── Counters ──────────────────────────────────
let idCounter   = 3001;
let saveCount   = 0;

// ── Pre-populate data ─────────────────────────
(function init() {
  const defaults = [
    new Student(idCounter++, 'Mariam Tahir',  ['Mathematics', 'Physics']),
    new Student(idCounter++, 'Tariq Javed',   ['CS101', 'Data Structures']),
    new Student(idCounter++, 'Hira Baig',     ['Web Dev', 'UX Design']),
  ];
  defaults.forEach(s => {
    studentMap.set(s.id, s);
    s.courses.forEach(c => courseSet.add(c));
  });
  render();
  log('Portal initialized with 3 students and default courses.', 'ok');
})();

// ── Enroll Student (Class + Map) ─────────────
function enrollStudent() {
  const nameInput    = document.getElementById('p-sname');
  const courseInput  = document.getElementById('p-scourses');
  const msg          = document.getElementById('enroll-msg');

  const name        = nameInput.value.trim();
  const coursesRaw  = courseInput.value.trim();

  if (!name || !coursesRaw) {
    showCardMsg('enroll-msg', 'Please enter name and courses.', 'error');
    return;
  }

  const courses = coursesRaw.split(',').map(c => c.trim()).filter(Boolean);

  // Create using Class
  const student = new Student(idCounter++, name, courses);

  // Store in Map
  studentMap.set(student.id, student);

  // Auto-add courses to Set
  courses.forEach(c => courseSet.add(c));

  nameInput.value  = '';
  courseInput.value = '';

  log(`Student enrolled: ${student.getSummary()} | Map.size = ${studentMap.size}`, 'ok');
  showCardMsg('enroll-msg', `${name} enrolled! Map now has ${studentMap.size} students.`, 'success');
  render();
}

// ── Register Course (Set) ─────────────────────
function registerCourse() {
  const input = document.getElementById('p-course');
  const course = input.value.trim();

  if (!course) {
    showCardMsg('course-msg', 'Enter a course name.', 'error');
    return;
  }

  if (courseSet.has(course)) {
    log(`Duplicate blocked: "${course}" already in Set`, 'warn');
    showCardMsg('course-msg', `"${course}" is already in the Set!`, 'warn');
  } else {
    courseSet.add(course);
    log(`Course added: "${course}" | Set.size = ${courseSet.size}`, 'ok');
    showCardMsg('course-msg', `"${course}" registered. Set size: ${courseSet.size}`, 'success');
  }

  input.value = '';
  render();
}

// ── Save to DB (Promise) ──────────────────────
function saveToDB() {
  const statusEl = document.getElementById('save-status');

  statusEl.innerHTML = `
    <div class="save-banner save-pending">
      <div class="mini-spinner"></div>
      Promise: PENDING — Saving ${studentMap.size} students and ${courseSet.size} courses...
    </div>`;

  // Promise simulating a DB save
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.15; // 85% success rate
      if (success) {
        resolve({
          students: studentMap.size,
          courses:  courseSet.size,
          timestamp: new Date().toLocaleTimeString(),
        });
      } else {
        reject(new Error('DB connection timeout'));
      }
    }, 1800);
  })
  .then(data => {
    saveCount++;
    log(`Promise RESOLVED — ${data.students} students, ${data.courses} courses saved at ${data.timestamp}`, 'ok');
    statusEl.innerHTML = `
      <div class="save-banner save-resolved">
        ✓ Promise Resolved — ${data.students} students &amp; ${data.courses} courses saved at ${data.timestamp}
      </div>`;
    document.getElementById('s-saves').textContent = saveCount;
    setTimeout(() => statusEl.innerHTML = '', 4000);
  })
  .catch(err => {
    log(`Promise REJECTED — ${err.message}`, 'err');
    statusEl.innerHTML = `
      <div class="save-banner save-rejected">
        ✗ Promise Rejected — ${err.message}. Try again.
      </div>`;
    setTimeout(() => statusEl.innerHTML = '', 4000);
  });
}

// ── Render everything ─────────────────────────
function render() {
  renderStudents();
  renderCourses();
  updateStats();
}

function renderStudents() {
  const el = document.getElementById('students-list');
  if (studentMap.size === 0) {
    el.innerHTML = '<div class="empty-note">No students enrolled yet.</div>';
    return;
  }

  let html = '';
  studentMap.forEach((student, id) => {
    const chips = student.courses.map(c => `<span class="portal-chip">${c}</span>`).join('');
    html += `
      <div class="portal-student">
        <div class="portal-avatar">${student.name[0]}</div>
        <div>
          <div class="portal-name">${student.name}</div>
          <div class="portal-id">ID: STU-${id} &bull; ${student.enrolledAt}</div>
          <div class="portal-courses">${chips}</div>
        </div>
      </div>`;
  });
  el.innerHTML = html;
}

function renderCourses() {
  const el = document.getElementById('courses-list');
  if (courseSet.size === 0) {
    el.innerHTML = '<div class="empty-note">No courses registered yet.</div>';
    return;
  }

  let html = '';
  let i = 0;
  for (const course of courseSet) { // for...of loop on Set
    html += `
      <div class="portal-course-item">
        <div class="course-dot"></div>
        <span>[${i++}] ${course}</span>
      </div>`;
  }
  el.innerHTML = html;
}

function updateStats() {
  document.getElementById('s-students').textContent = studentMap.size;
  document.getElementById('s-courses').textContent  = courseSet.size;
  document.getElementById('s-saves').textContent    = saveCount;
}

// ── Helpers ───────────────────────────────────
function showCardMsg(elId, text, type) {
  const el = document.getElementById(elId);
  el.textContent = text;
  el.className = `card-msg ${type}`;
  setTimeout(() => { el.textContent = ''; el.className = 'card-msg'; }, 3500);
}

function log(msg, type = '') {
  const box = document.getElementById('activity-log');
  const div = document.createElement('div');
  div.className = `log-line log-${type}`;
  div.textContent = msg;
  box.appendChild(div);
  box.scrollTop = box.scrollHeight;
}

// ── Enter key support ─────────────────────────
document.addEventListener('keydown', e => {
  if (e.key !== 'Enter') return;
  if (document.activeElement.id === 'p-course') registerCourse();
  else if (document.activeElement.id === 'p-sname' || document.activeElement.id === 'p-scourses') enrollStudent();
});
