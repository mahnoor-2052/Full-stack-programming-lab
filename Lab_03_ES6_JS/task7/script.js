// ============================================
// TASK 7 — STUDENT DATA USING JSON
// JSON.stringify · JSON.parse · Destructuring · forEach
// ============================================

// ── State — stored as plain objects ──────────
let students = [];

// ── Load 3 default students ───────────────────
function loadDefaultStudents() {
  // Step 1: Create 3 student objects
  const defaultStudents = [
    { name: 'Anosha Baig',    age: 20, semester: 4, courses: ['OOP', 'Algorithms', 'DBMS'] },
    { name: 'Rehman Malik',   age: 22, semester: 6, courses: ['AI', 'Machine Learning', 'Statistics'] },
    { name: 'Saira Iqbal',    age: 19, semester: 2, courses: ['Calculus I', 'Physics', 'Prog. Fundamentals'] },
  ];

  students = defaultStudents;
  processStudents();
  showMsg('3 default students loaded and converted to JSON!', 'ok');
}

// ── Add custom student ────────────────────────
function addJsonStudent() {
  const nameEl    = document.getElementById('j-name');
  const ageEl     = document.getElementById('j-age');
  const semEl     = document.getElementById('j-sem');
  const coursesEl = document.getElementById('j-courses');

  const name        = nameEl.value.trim();
  const age         = parseInt(ageEl.value);
  const semester    = parseInt(semEl.value);
  const coursesRaw  = coursesEl.value.trim();

  if (!name || isNaN(age) || isNaN(semester) || !coursesRaw) {
    showMsg('Please fill in all fields.', 'err');
    return;
  }

  const courses = coursesRaw.split(',').map(c => c.trim()).filter(Boolean);
  const newStudent = { name, age, semester, courses };

  students.push(newStudent);
  processStudents();
  showMsg(`"${name}" added and converted to JSON!`, 'ok');

  // Clear fields
  nameEl.value    = '';
  ageEl.value     = '';
  semEl.value     = '';
  coursesEl.value = '';
}

// ── Core processing pipeline ─────────────────
function processStudents() {
  if (students.length === 0) {
    document.getElementById('json-raw').innerHTML    = '// No data yet';
    document.getElementById('json-parsed').innerHTML = '<div class="parse-empty">No data parsed yet</div>';
    document.getElementById('student-cards').innerHTML = '<div class="empty-cards">No students to display</div>';
    return;
  }

  // ── STEP 1: JSON.stringify() ─────────────────
  const jsonString = JSON.stringify(students, null, 2);

  // Syntax-highlight the JSON string
  const highlighted = syntaxHighlight(jsonString);
  document.getElementById('json-raw').innerHTML = highlighted;

  // ── STEP 2: JSON.parse() ─────────────────────
  const parsedStudents = JSON.parse(jsonString);
  renderParsedView(parsedStudents);

  // ── STEP 3: Display via innerHTML + forEach ──
  displayCards(parsedStudents);
}

// ── Render parsed result ──────────────────────
function renderParsedView(parsedStudents) {
  const el = document.getElementById('json-parsed');
  let html = '';

  parsedStudents.forEach((student, index) => {
    // DESTRUCTURING — extract each property
    const { name, age, semester, courses } = student;

    html += `
      <div class="parse-row">
        <span class="pr-key">// Student [${index}] — destructured</span><br/>
        <span class="pr-key">name: </span><span class="pr-str">"${name}"</span>  &nbsp;
        <span class="pr-key">age: </span><span class="pr-val">${age}</span>  &nbsp;
        <span class="pr-key">semester: </span><span class="pr-val">${semester}</span><br/>
        <span class="pr-key">courses: </span><span class="pr-arr">[${courses.map(c => `"${c}"`).join(', ')}]</span>
      </div>
    `;
  });

  el.innerHTML = html;
}

// ── Display student cards using forEach ───────
function displayCards(parsedStudents) {
  const container = document.getElementById('student-cards');

  if (parsedStudents.length === 0) {
    container.innerHTML = '<div class="empty-cards">No students to display.</div>';
    return;
  }

  let html = '';

  // Using forEach to loop through parsed students
  parsedStudents.forEach((student, index) => {
    // DESTRUCTURING — extract properties from each student object
    const { name, age, semester, courses } = student;

    const courseChips = courses.map(c => `<span class="jc-chip">${c}</span>`).join('');

    // innerHTML template using destructured variables
    html += `
      <div class="json-card" style="animation-delay: ${index * 0.08}s">
        <div class="jc-name">${name}</div>
        <div class="jc-meta">Age: ${age} &bull; Semester: ${semester} &bull; ${courses.length} course${courses.length !== 1 ? 's' : ''}</div>
        <div class="jc-label">Enrolled Courses</div>
        <div class="jc-courses">${courseChips}</div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// ── Parse and display (manual trigger) ───────
function parseAndShow() {
  if (students.length === 0) {
    showMsg('No data to parse. Load or add students first.', 'err');
    return;
  }
  processStudents();
  showMsg('JSON parsed and displayed!', 'ok');
}

// ── Clear all ────────────────────────────────
function clearAll() {
  students = [];
  document.getElementById('json-raw').innerHTML    = '// Awaiting data...';
  document.getElementById('json-parsed').innerHTML = '<div class="parse-empty">No data parsed yet</div>';
  document.getElementById('student-cards').innerHTML = '';
  showMsg('Data cleared.', 'ok');
}

// ── JSON Syntax Highlighter ───────────────────
function syntaxHighlight(json) {
  return json
    .replace(/("[\w\s]+")(\s*:)/g, '<span class="json-key">$1</span>$2')
    .replace(/:\s*(".*?")/g, ': <span class="json-str">$1</span>')
    .replace(/:\s*(\d+\.?\d*)/g, ': <span class="json-num">$1</span>');
}

// ── Show form message ────────────────────────
function showMsg(text, type) {
  const el = document.getElementById('form-msg');
  el.textContent = text;
  el.className = `form-msg ${type}`;
  setTimeout(() => { el.textContent = ''; el.className = 'form-msg'; }, 3500);
}

// ── Enter key support ─────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'Enter') addJsonStudent();
});
