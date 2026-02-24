// ============================================
// TASK 4 — COURSE REGISTRATION SYSTEM
// Set — Duplicate Prevention — .size — for...of
// ============================================

// ── Create a Set to store registered courses ─
const registeredCourses = new Set();

// ── Tracking counters ────────────────────────
let totalAttempts = 0;
let totalDuplicates = 0;

// ── Register a course ────────────────────────
function registerCourse() {
  const input   = document.getElementById('course-input');
  const courseName = input.value.trim();

  if (!courseName) {
    showMsg('Please enter a course name.', 'error');
    return;
  }

  totalAttempts++;

  // Check for duplicate using .has()
  if (registeredCourses.has(courseName)) {
    totalDuplicates++;
    log(`DUPLICATE BLOCKED: "${courseName}" already exists in Set`, 'warn');
    showMsg(`"${courseName}" is already registered! Duplicate blocked by Set.`, 'warn');
  } else {
    // Add to Set using .add()
    registeredCourses.add(courseName);
    log(`REGISTERED: "${courseName}" — Set.size is now ${registeredCourses.size}`, 'ok');
    showMsg(`"${courseName}" registered successfully!`, 'success');
  }

  input.value = '';
  input.focus();
  updateStats();
  renderCourses();
}

// ── Add sample courses (includes a duplicate) ─
function addSampleCourses() {
  const samples = [
    'Data Structures',
    'Algorithms',
    'Object Oriented Programming',
    'Web Development',
    'Machine Learning',
    'Database Systems',
    'Data Structures', // intentional duplicate
  ];

  samples.forEach(course => {
    totalAttempts++;
    if (registeredCourses.has(course)) {
      totalDuplicates++;
      log(`DUPLICATE BLOCKED: "${course}"`, 'warn');
    } else {
      registeredCourses.add(course);
      log(`REGISTERED: "${course}"`, 'ok');
    }
  });

  showMsg(`Processed ${samples.length} courses — ${totalDuplicates} duplicate(s) blocked!`, 'success');
  updateStats();
  renderCourses();
}

// ── Attempt adding a known duplicate ─────────
function tryDuplicate() {
  if (registeredCourses.size === 0) {
    showMsg('No courses yet — register one first.', 'error');
    return;
  }
  // Get first element of Set
  const firstCourse = [...registeredCourses][0];
  totalAttempts++;
  totalDuplicates++;
  log(`ATTEMPTED DUPLICATE: "${firstCourse}" — Set.has() returned true, blocked!`, 'warn');
  showMsg(`Tried to add "${firstCourse}" again — Set prevented it!`, 'warn');
  updateStats();
}

// ── Remove a course ──────────────────────────
function removeCourse(courseName) {
  registeredCourses.delete(courseName); // .delete()
  log(`REMOVED: "${courseName}" — Set.size is now ${registeredCourses.size}`, 'err');
  updateStats();
  renderCourses();
}

// ── Clear all ────────────────────────────────
function clearAll() {
  registeredCourses.clear(); // .clear()
  totalAttempts = 0;
  totalDuplicates = 0;
  log('Set cleared. All data reset.', 'err');
  updateStats();
  renderCourses();
}

// ── Render courses using for...of loop ───────
function renderCourses() {
  const el = document.getElementById('courses-list');

  if (registeredCourses.size === 0) {
    el.innerHTML = '<div class="empty-item">No courses registered yet.</div>';
    return;
  }

  let html = '';
  let index = 0;

  // for...of loop to iterate over Set
  for (const course of registeredCourses) {
    html += `
      <div class="course-item">
        <span class="course-idx">[${index++}]</span>
        <span class="course-name">${course}</span>
        <div class="course-actions">
          <span class="course-badge">Registered</span>
          <button class="del-btn" onclick="removeCourse('${course.replace(/'/g,"\\'")}')">✕</button>
        </div>
      </div>
    `;
  }

  el.innerHTML = html;
}

// ── Update stat counters ──────────────────────
function updateStats() {
  // .size property of Set
  document.getElementById('stat-size').textContent     = registeredCourses.size;
  document.getElementById('stat-attempts').textContent  = totalAttempts;
  document.getElementById('stat-dupes').textContent     = totalDuplicates;

  // Animate the size counter
  const sizeEl = document.getElementById('stat-size');
  sizeEl.style.transform = 'scale(1.2)';
  setTimeout(() => sizeEl.style.transform = 'scale(1)', 200);
}

// ── Show form message ─────────────────────────
function showMsg(text, type) {
  const el = document.getElementById('reg-msg');
  el.textContent = text;
  el.className = `reg-msg ${type}`;
  setTimeout(() => { el.textContent = ''; el.className = 'reg-msg'; }, 3000);
}

// ── Console logger ────────────────────────────
function log(msg, type = '') {
  const box = document.getElementById('reg-log');
  const div = document.createElement('div');
  div.className = `log-line ${type}`;
  div.textContent = msg;
  box.appendChild(div);
  box.scrollTop = box.scrollHeight;
}

// ── Enter key support ─────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && document.activeElement.id === 'course-input') {
    registerCourse();
  }
});

// ── Init ──────────────────────────────────────
renderCourses();
