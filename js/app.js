/**
 * app.js — Scholarshipping (Kind & Supportive Redesign)
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

const MOTIVATIONAL_TIPS = [
  { title: "You've got this!", text: "Applying to just 3 scholarships a week can cover your entire tuition. We've verified these links so you can focus on your story." },
  { title: "Your voice matters.", text: "Scholarship committees look for authenticity. Use our AI partner to help find the unique angles of your own journey." },
  { title: "Small steps, big results.", text: "Even a $500 scholarship pays for a semester of textbooks. Every application is a step toward a debt-free degree." },
  { title: "Stay curious.", text: "Explore categories outside your major. You'd be surprised how many niche scholarships go unapplied for every year." },
  { title: "The power of 'Why'.", text: "When writing your essay, focus on *why* you want to achieve your goals. Passion is contagious!" }
];

const PROMPT_TEMPLATES = {
  collaborative: (s) => `I am applying for the "${s.name}" scholarship provided by "${s.provider}". 

The scholarship is for ${s.amount > 0 ? '$'+s.amount : 'full tuition'} and is due on ${s.deadline}.

I want to work with you as an AI Brainstorming Partner to develop a compelling application that reflects my personal experiences and goals. 

### Guidelines for our collaboration:
1. **Do not write the final essay for me.** Instead, ask me 3-5 thought-provoking questions about my background, my connection to this scholarship's mission, and my future aspirations.
2. Based on my answers, help me **outline** the key points I should hit to be a competitive applicant.
3. Once I've written a draft, I'll share it with you for **critique and refinement**, specifically focusing on tone, clarity, and impact.

### Scholarship Context:
${s.description}

### Qualifications/Criteria:
${s.categories.join(', ')}

Please start by introducing yourself as my AI Brainstorming Partner and asking me those initial questions so we can begin.`
};

// ============================================================
// Initialization
// ============================================================

function init() {
  state.allScholarships = [...SCHOLARSHIPS];
  state.filteredScholarships = [...SCHOLARSHIPS];

  updateMotivationalTip();
  setupEventListeners();
  handleRoute(); 
  
  console.log('Scholarshipping (Kind Edition) initialized');
}

function updateMotivationalTip() {
  const tip = MOTIVATIONAL_TIPS[Math.floor(Math.random() * MOTIVATIONAL_TIPS.length)];
  const titleEl = document.getElementById('motivation-title');
  const textEl = document.getElementById('motivation-text');
  if (titleEl && textEl) {
    titleEl.textContent = tip.title;
    textEl.textContent = tip.text;
  }
}

// ============================================================
// Routing
// ============================================================

function handleRoute() {
  const hash = window.location.hash || '#home';
  
  document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active', 'hidden'));
  document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));

  if (hash === '#home' || hash === '') {
    showView('view-home');
    document.querySelector('[data-route="home"]')?.classList.add('active');
    applyFiltersAndSort();
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
    window.scrollTo(0, 0);
  }
}

// ============================================================
// Event Listeners
// ============================================================

function setupEventListeners() {
  window.addEventListener('hashchange', handleRoute);

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
  
  if (state.filteredScholarships.length === 0) {
    listElement.innerHTML = `
      <div class="info-card" style="grid-column: 1 / -1; text-align: center; padding: var(--space-12); background: white;">
        <h3 style="margin-bottom: var(--space-4);">No matches found just yet.</h3>
        <p style="color: var(--color-text-muted); margin-bottom: var(--space-6);">Try adjusting your filters or searching for a broader keyword. You might discover something unexpected!</p>
        <button class="btn-details" style="background: var(--color-accent);" onclick="resetFilters()">Reset all filters</button>
      </div>
    `;
    return;
  }

  state.filteredScholarships.forEach(s => {
    const card = createCard(s);
    listElement.appendChild(card);
  });
}

function resetFilters() {
  state.filters = { search: '', category: 'all', minAmount: 0, location: 'all' };
  document.getElementById('scholarship-search').value = '';
  document.getElementById('filter-category').value = 'all';
  document.getElementById('filter-amount').value = '0';
  document.getElementById('filter-location').value = 'all';
  applyFiltersAndSort();
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

  const deadline = new Date(s.deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  card.innerHTML = `
    <div class="scholarship-header">
      <div>
        <h3 class="scholarship-name">${s.name}</h3>
        <p class="scholarship-provider">${s.provider}</p>
      </div>
    </div>
    
    <div class="scholarship-amount">${formattedAmount}</div>

    <div class="scholarship-tags">
      <span class="tag tag-deadline">Due ${deadline}</span>
      ${s.categories.slice(0, 2).map(c => `<span class="tag">${c}</span>`).join('')}
    </div>

    <div class="scholarship-footer">
      <div class="likelihood-pill">
        <svg style="width:14px; height:14px; color:var(--color-accent);"><use href="#icon-sparkles"></use></svg>
        <span>${s.likelihood} Likelihood</span>
      </div>
      <button class="btn-details">Details</button>
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
      <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem;">
        ${s.verified ? '<span class="verified-badge"><svg style="width:14px; height:14px; stroke:white; margin-right:6px; vertical-align:middle;"><use href="#icon-shield-check"></use></svg>Verified Official Link</span>' : ''}
        <span style="font-size: var(--text-xs); color: var(--color-text-muted); font-weight: 700;">Manual audit: ${s.lastVerified}</span>
      </div>
      <h2 class="detail-title">${s.name}</h2>
      <p class="scholarship-provider" style="font-size: var(--text-lg);">${s.provider}</p>
    </div>

    <div class="detail-body">
      <div class="detail-section">
        <h3>About this opportunity</h3>
        <p>${s.description}</p>
        
        <h3>Who should apply?</h3>
        <ul style="margin-bottom: 2rem; list-style: none;">
          ${s.major.map(m => `<li style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;"><svg style="width:16px; height:16px; color:var(--color-success);"><use href="#icon-check-circle"></use></svg> Major: ${m}</li>`).join('')}
          ${s.gpa > 0 ? `<li style="display: flex; align-items: center; gap: 0.5rem;"><svg style="width:16px; height:16px; color:var(--color-success);"><use href="#icon-check-circle"></use></svg> Min GPA: ${s.gpa}</li>` : ''}
        </ul>

        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <button class="btn-details" style="background: var(--color-primary);" onclick="openPromptModal(${s.id})">
            <svg style="width:16px; height:16px; stroke:white; vertical-align: middle; margin-right: 4px;"><use href="#icon-sparkles"></use></svg> AI Brainstorming Partner
          </button>
          <button class="btn-details" style="background: white; border: 1px solid var(--color-border); color: var(--color-text);" onclick="toggleSave(${s.id})">
            <svg style="width:16px; height:16px; vertical-align: middle; margin-right: 4px; color:${isSaved ? 'var(--color-danger)' : 'var(--color-text-muted)'}">
              <use href="${isSaved ? '#icon-heart-off' : '#icon-heart'}"></use>
            </svg>
            ${isSaved ? 'Remove from Saved' : 'Save for Later'}
          </button>
          <button class="btn-details" style="background: transparent; border: 1px solid var(--color-danger); color: var(--color-danger);" onclick="alert('Thank you for your kindness! Our verification team will double-check this link immediately.')">
            <svg style="width:16px; height:16px; vertical-align: middle; margin-right: 4px; stroke:currentColor;"><use href="#icon-alert-circle"></use></svg> Report an issue
          </button>
        </div>
      </div>

      <div class="sidebar-info">
        <div class="info-card" style="background: var(--color-bg);">
          <div class="info-item">
            <label>Award Amount</label>
            <span>${formattedAmount}</span>
          </div>
          <div class="info-item">
            <label>Application Deadline</label>
            <span>${new Date(s.deadline).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
          <div class="info-item">
            <label>Eligibility Area</label>
            <span>${s.location}</span>
          </div>
          <div class="info-item">
            <label>Success Likelihood</label>
            <span>${s.likelihood}</span>
          </div>
          
          <a href="${s.applyLink}" target="_blank" class="btn-apply-large">
            Apply on Official Site <svg style="width:18px; height:18px;"><use href="#icon-external-link"></use></svg>
          </a>
          
          <p style="font-size: var(--text-xs); color: var(--color-text-muted); text-align: center; margin-top: 1rem;">
            Always verify details on the provider's site.
          </p>
        </div>
      </div>
    </div>
  `;
}

function toggleSave(id) {
  if (state.saved.includes(id)) {
    state.saved = state.saved.filter(itemId => itemId !== id);
  } else {
    state.saved.push(id);
  }
  localStorage.setItem('savedScholarships', JSON.stringify(state.saved));
  renderDetail(id);
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
      <div class="prompt-header-block" style="text-align: center;">
        <span class="verified-badge" style="background: var(--color-primary); margin-bottom: 1rem;">AI Brainstorming Partner</span>
        <h2 style="font-size: 2rem; margin-bottom: 1rem;">Let's discover your story.</h2>
        <p style="font-size: var(--text-lg); color: var(--color-text-muted); max-width: 600px; margin: 0 auto;">Copy this prompt to any modern AI (like Claude or Gemini). It won't write the essay for you—instead, it will ask you the right questions to help you write it yourself.</p>
      </div>
      
      <div class="prompt-box">
        <div style="padding: 1rem; border-bottom: 1px solid var(--color-border); display: flex; justify-content: space-between; align-items: center;">
          <span style="font-weight: 800; font-size: var(--text-xs); text-transform: uppercase; color: var(--color-text-muted);">Collaborative Prompt</span>
          <button class="btn-details" style="padding: 0.4rem 1rem;" onclick="copyPrompt()">Copy to Clipboard</button>
        </div>
        <div class="prompt-text-content" id="prompt-text">${prompt}</div>
      </div>

      <div style="background: var(--color-accent-soft); padding: 1.5rem; border-radius: var(--radius-sm); border-left: 4px solid var(--color-accent);">
        <p style="font-size: var(--text-sm); font-weight: 500;"><strong>Educational Tip:</strong> AI is a great editor and coach, but your unique experiences are what win scholarships. Keep your voice authentic!</p>
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
    alert('✨ Prompt copied! You are ready to brainstorm your future.');
  });
}

// ============================================================
// Boot
// ============================================================

document.addEventListener('DOMContentLoaded', init);
