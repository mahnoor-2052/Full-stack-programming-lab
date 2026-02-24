// ============================================
// TASK 3 — ASYNC DATA LOADER
// Promise, setTimeout, .then(), .catch()
// ============================================

// Boolean flag to simulate failure
let shouldFail = false;

// ── Promise-based fetch function ─────────────
function fetchUsers(failFlag) {
  return new Promise((resolve, reject) => {
    // Simulate server delay with 3-second timeout
    setTimeout(() => {
      // Reject if flag is true
      if (failFlag) {
        reject(new Error('Server timeout — connection refused (flag = true)'));
      } else {
        // Resolve with user data
        resolve([
          { id: 1, name: 'Zara Ahmed',       email: 'zara@campus.edu',     role: 'Student'  },
          { id: 2, name: 'Bilal Raza',        email: 'bilal@campus.edu',    role: 'Lecturer' },
          { id: 3, name: 'Nida Malik',        email: 'nida@campus.edu',     role: 'Student'  },
          { id: 4, name: 'Hamza Sheikh',      email: 'hamza@campus.edu',    role: 'Admin'    },
          { id: 5, name: 'Ayesha Siddiqui',   email: 'ayesha@campus.edu',   role: 'Student'  },
          { id: 6, name: 'Farrukh Qazi',      email: 'farrukh@campus.edu',  role: 'Lecturer' },
        ]);
      }
    }, 3000); // 3 second delay
  });
}

// ── Load users ───────────────────────────────
function loadUsers() {
  const failCheckbox  = document.getElementById('should-fail');
  const launchBtn     = document.getElementById('launch-btn');
  const statusEl      = document.getElementById('promise-status');
  const progressWrap  = document.getElementById('progress-wrap');
  const progressFill  = document.getElementById('progress-fill');
  const progressTime  = document.getElementById('progress-time');
  const progressLabel = document.getElementById('progress-label');
  const grid          = document.getElementById('users-grid');

  shouldFail = failCheckbox.checked;

  // Disable button during fetch
  launchBtn.disabled = true;
  grid.innerHTML = '';

  // Show pending status
  statusEl.innerHTML = `
    <div class="status-box status-pending">
      <div class="spinner"></div>
      <div>
        <div>Promise Status: <strong>PENDING</strong></div>
        <div class="status-detail">fetchUsers() called — waiting for setTimeout(3000ms)...</div>
      </div>
    </div>`;

  // Show and animate progress bar
  progressWrap.classList.remove('hidden');
  progressFill.style.width = '0%';
  let elapsed = 0;
  const interval = setInterval(() => {
    elapsed += 100;
    const pct = Math.min((elapsed / 3000) * 100, 99);
    progressFill.style.width = pct + '%';
    progressTime.textContent = `${(elapsed / 1000).toFixed(1)}s / 3s`;
    progressLabel.textContent = elapsed < 1000
      ? 'Establishing connection...'
      : elapsed < 2000
        ? 'Authenticating request...'
        : 'Receiving data...';
  }, 100);

  // Use .then() and .catch()
  fetchUsers(shouldFail)
    .then(function(users) {
      // RESOLVED
      clearInterval(interval);
      progressFill.style.width = '100%';
      progressTime.textContent = '3.0s / 3s';

      statusEl.innerHTML = `
        <div class="status-box status-resolved">
          <div class="status-icon">✓</div>
          <div>
            <div>Promise Status: <strong>RESOLVED</strong></div>
            <div class="status-detail">${users.length} user objects returned via .then(users => ...)</div>
          </div>
        </div>`;

      // Display results in HTML using innerHTML
      setTimeout(() => {
        progressWrap.classList.add('hidden');
        grid.innerHTML = users.map((u, i) => `
          <div class="user-card" style="animation-delay: ${i * 0.07}s">
            <div class="avatar">${u.name[0]}</div>
            <div>
              <div class="user-name">${u.name}</div>
              <div class="user-email">${u.email}</div>
              <span class="user-role">${u.role}</span>
            </div>
          </div>
        `).join('');
        launchBtn.disabled = false;
      }, 300);
    })
    .catch(function(error) {
      // REJECTED
      clearInterval(interval);
      progressFill.style.width = '100%';
      progressFill.style.background = '#ef4444';

      statusEl.innerHTML = `
        <div class="status-box status-rejected">
          <div class="status-icon">✗</div>
          <div>
            <div>Promise Status: <strong>REJECTED</strong></div>
            <div class="status-detail">.catch(err => ...) caught: "${error.message}"</div>
          </div>
        </div>`;

      setTimeout(() => {
        progressWrap.classList.add('hidden');
        launchBtn.disabled = false;
      }, 300);
    });
}

// ── Clear results ─────────────────────────────
function clearResults() {
  document.getElementById('promise-status').innerHTML = '';
  document.getElementById('users-grid').innerHTML = '';
  document.getElementById('progress-wrap').classList.add('hidden');
  document.getElementById('progress-fill').style.width = '0%';
  document.getElementById('launch-btn').disabled = false;
}
