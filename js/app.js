/**
 * app.js — Scholarshipping (Verified)
 */

// ============================================================
// State
// ============================================================

const state = {
  allScholarships: [],
  filteredScholarships: [],
  filters: {
    search: '',
    category: 'all',
    minAmount: 0,
    location: 'all'
  },
  sortBy: 'deadline',
  currentRoute: 'home',
  saved: JSON.parse(localStorage.getItem('savedScholarships')) || []
};

// ============================================================
// Constants
// ============================================================

const PROMPT_TEMPLATES = {
  collaborative: (s) => `I am applying for the "${s.name}" scholarship provided by "${s.provider}". 

The scholarship is for ${s.amount > 0 ? '$'+s.amount : 'full tuition'} and is due on ${s.deadline}.

I want to work with you to develop a compelling application that reflects my personal experiences and goals. 

### Guidelines for our collaboration:
1. **Do not write the final essay for me.** Instead, ask me 3-5 thought-provoking questions about my background, my connection to this scholarship's mission, and my future aspirations.
2. Based on my answers, help me **outline** the key points I should hit to be a competitive applicant.
3. Once I've written a draft, I'll share it with you for **critique and refinement**, specifically focusing on tone, clarity, and impact.

### Scholarship Context:
${s.description}

### Qualifications/Criteria:
${s.categories.join(', ')}

Please start by asking me the initial questions so we can begin the brainstorming process.`
};

// ============================================================
// Initialization
// ============================================================

function init() {
  state.allScholarships = [...SCHOLARSHIPS];
  state.filteredScholarships = [...SCHOLARSHIPS];

  setupEventListeners();
  handleRoute(); // Handle initial route on load
  
  console.log('Scholarshipping initialized with', state.allScholarships.length, 'verified scholarships');
}

// ============================================================
// Routing
// ============================================================

function handleRoute() {
  const hash = window.location.hash || '#home';
  
  // Hide all views
  document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active', 'hidden'));
  document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));

  // Update Sidebar Active State
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));

  if (hash === '#home' || hash === '') {
    showView('view-home');
    document.querySelector('[data-route="home"]')?.classList.add('active');
    applyFiltersAndSort(); // Re-render list
  } 
  else if (hash === '#saved') {
    showView('view-saved');
    document.querySelector('[data-route="saved"]')?.classList.add('active');
    renderSaved();
  }
  else if (hash === '#about') {
    showView('view-about');
    document.querySelector('[data-route="about"]')?.classList.add('active');
  }
  else if (hash.startsWith('#scholarship=')) {
    const id = parseInt(hash.split('=')[1], 10);
    showView('view-detail');
    renderDetail(id);
  }
}

function showView(id) {
  const view = document.getElementById(id);
  if (view) {
    view.classList.remove('hidden');
    view.classList.add('active');
  }
}

// ============================================================
// Event Listeners
// ============================================================

function setupEventListeners() {
  window.addEventListener('hashchange', handleRoute);

  // Filters
  document.getElementById('scholarship-search').addEventListener('input', (e) => {
    state.filters.search = e.target.value.toLowerCase();
    applyFiltersAndSort();
  });

  document.getElementById('filter-category').addEventListener('change', (e) => {
    state.filters.category = e.target.value;
    applyFiltersAndSort();
  });

  document.getElementById('filter-amount').addEventListener('change', (e) => {
    state.filters.minAmount = parseInt(e.target.value, 10);
    applyFiltersAndSort();
  });

  document.getElementById('filter-location').addEventListener('change', (e) => {
    state.filters.location = e.target.value;
    applyFiltersAndSort();
  });

  document.getElementById('sort-by').addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    applyFiltersAndSort();
  });

  // Modal
  document.getElementById('close-modal').addEventListener('click', closeModal);
  document.getElementById('modal-backdrop').addEventListener('click', (e) => {
    if (e.target.id === 'modal-backdrop') closeModal();
  });
}

// ============================================================
// Logic
// ============================================================

function applyFiltersAndSort() {
  state.filteredScholarships = state.allScholarships.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(state.filters.search) || 
                         s.provider.toLowerCase().includes(state.filters.search) ||
                         s.description.toLowerCase().includes(state.filters.search);
    
    const matchesCategory = state.filters.category === 'all' || s.categories.includes(state.filters.category);
    const matchesAmount = s.amount >= state.filters.minAmount;
    
    // Improved Location Filtering
    const matchesLocation = state.filters.location === 'all' || 
                           (state.filters.location === 'National' && s.location === 'National') ||
                           (s.location === state.filters.location);
    
    return matchesSearch && matchesCategory && matchesAmount && matchesLocation;
  });

  state.filteredScholarships.sort((a, b) => {
    switch (state.sortBy) {
      case 'deadline':
        return new Date(a.deadline) - new Date(b.deadline);
      case 'amount-high':
        return b.amount - a.amount;
      case 'likelihood':
        const priority = { 'High': 3, 'Medium': 2, 'Low': 1, 'Unknown': 0 };
        return (priority[b.likelihood] || 0) - (priority[a.likelihood] || 0);
      default:
        return 0;
    }
  });

  renderScholarships();
}

// ============================================================
// Rendering
// ============================================================

function renderScholarships() {
  const listElement = document.getElementById('scholarship-list');
  const countElement = document.getElementById('result-count');
  
  countElement.textContent = state.filteredScholarships.length;
  listElement.innerHTML = '';
  
  state.filteredScholarships.forEach(s => {
    const card = createCard(s);
    listElement.appendChild(card);
  });
}

function createCard(s) {
  const card = document.createElement('article');
  card.className = 'scholarship-card';
  card.onclick = () => window.location.hash = `#scholarship=${s.id}`;
  
  const formattedAmount = s.amount === 0 ? 'Full Tuition' : new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(s.amount);

  const deadline = new Date(s.deadline).toLocaleDateString();

  card.innerHTML = `
    <div class="scholarship-header">
      <div>
        <h3 class="scholarship-name">${s.name}</h3>
        <p class="scholarship-provider">${s.provider}</p>
      </div>
    </div>
    
    <div class="scholarship-amount">${formattedAmount}</div>

    <div class="scholarship-tags">
      <span class="tag tag-deadline">Due: ${deadline}</span>
      ${s.categories.slice(0, 2).map(c => `<span class="tag">${c}</span>`).join('')}
    </div>

    <div class="scholarship-footer">
      <span class="tag">Likelihood: ${s.likelihood}</span>
      <button class="btn-details">View Details</button>
    </div>
  `;
  return card;
}

function renderDetail(id) {
  const s = state.allScholarships.find(item => item.id === id);
  if (!s) return;

  const container = document.getElementById('detail-content');
  const formattedAmount = s.amount === 0 ? 'Full Tuition' : new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(s.amount);

  const isSaved = state.saved.includes(s.id);

  container.innerHTML = `
    <div class="detail-header">
      <div class="detail-meta">
        ${s.verified ? '<span class="verified-badge">✓ Verified Official</span>' : ''}
        <span>Last updated: ${s.lastVerified}</span>
      </div>
      <h2 class="detail-title">${s.name}</h2>
      <p class="scholarship-provider">${s.provider}</p>
    </div>

    <div class="detail-body">
      <div class="detail-section">
        <h3>Description</h3>
        <p>${s.description}</p>
        
        <h3>Eligibility</h3>
        <ul class="info-list">
          ${s.major.map(m => `<li>Major: ${m}</li>`).join('')}
          ${s.gpa > 0 ? `<li>Min GPA: ${s.gpa}</li>` : ''}
        </ul>

        <div style="margin-top: 2rem; display: flex; gap: 1rem; flex-wrap: wrap;">
          <a href="${s.applyLink}" target="_blank" class="btn-apply">Official Application ↗</a>
          <button class="btn-details" onclick="openPromptModal(${s.id})">Support Partner Prompt</button>
          <button class="btn-details" onclick="toggleSave(${s.id})">${isSaved ? 'Unsave' : 'Save Scholarship'}</button>
          <button class="btn-details" style="color:var(--color-danger); border-color:var(--color-danger)" onclick="alert('Thank you! Our verification team will double-check this link.')">Report Issue</button>
        </div>
      </div>

      <div class="sidebar-info">
        <div class="info-grid">
          <div class="info-item">
            <label>Amount</label>
            <span>${formattedAmount}</span>
          </div>
          <div class="info-item">
            <label>Deadline</label>
            <span>${new Date(s.deadline).toLocaleDateString()}</span>
          </div>
          <div class="info-item">
            <label>Location</label>
            <span>${s.location}</span>
          </div>
          <div class="info-item">
            <label>Odds</label>
            <span>${s.likelihood}</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderSaved() {
  const listElement = document.getElementById('saved-list');
  listElement.innerHTML = '';
  
  const savedItems = state.allScholarships.filter(s => state.saved.includes(s.id));
  
  if (savedItems.length === 0) {
    listElement.innerHTML = '<p style="color:var(--color-text-muted)">No saved scholarships yet.</p>';
    return;
  }

  savedItems.forEach(s => {
    listElement.appendChild(createCard(s));
  });
}

function toggleSave(id) {
  if (state.saved.includes(id)) {
    state.saved = state.saved.filter(itemId => itemId !== id);
  } else {
    state.saved.push(id);
  }
  localStorage.setItem('savedScholarships', JSON.stringify(state.saved));
  renderDetail(id); // Re-render to update button state
}

// ============================================================
// Modal Logic
// ============================================================

function openPromptModal(id) {
  const s = state.allScholarships.find(item => item.id === id);
  if (!s) return;
  
  const modalContent = document.getElementById('modal-content');
  const prompt = PROMPT_TEMPLATES.collaborative(s);

  modalContent.innerHTML = `
    <div class="prompt-view">
      <div class="prompt-header-block">
        <span class="badge">Support Partner Prompt</span>
        <h2>Your Application Brainstorming Partner</h2>
        <p>Copy this structured prompt to any modern AI assistant (Claude, Gemini, or GPT-4) to begin a guided drafting session that keeps you in the driver's seat.</p>
      </div>
      
      <div class="prompt-box">
        <div class="prompt-box-header">
          <span>Official Prompt for ${s.name}</span>
          <button class="btn-copy-small" onclick="copyPrompt()">Copy Code</button>
        </div>
        <div class="prompt-text-content" id="prompt-text">${prompt}</div>
      </div>

      <div class="prompt-footer-note">
        <p><strong>Remember:</strong> This prompt is designed for <strong>co-creation</strong>. It will ask you questions rather than writing for you, ensuring your application remains authentically yours.</p>
      </div>
    </div>
  `;

  document.getElementById('modal-backdrop').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('modal-backdrop').classList.add('hidden');
}

function copyPrompt() {
  const text = document.getElementById('prompt-text').innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert('Prompt copied!');
  });
}

// ============================================================
// Boot
// ============================================================

document.addEventListener('DOMContentLoaded', init);
