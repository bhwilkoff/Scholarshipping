/**
 * app.js — Scholarshipping
 *
 * Entry point for all application logic.
 */

// ============================================================
// State
// ============================================================

const state = {
  allScholarships: [],
  filteredScholarships: [],
  filters: {
    search: '',
    minAmount: 0,
    location: 'all'
  },
  sortBy: 'deadline',
  selectedScholarship: null
};

const PROMPT_TEMPLATES = {
  collaborative: (s) => `I am applying for the "${s.name}" scholarship provided by "${s.provider}". 

The scholarship is for $${s.amount} and is due on ${s.deadline}.

I want to work with you to develop a compelling application that reflects my personal experiences and goals. 

### Guidelines for our collaboration:
1. **Do not write the final essay for me.** Instead, ask me 3-5 thought-provoking questions about my background, my connection to this scholarship's mission, and my future aspirations.
2. Based on my answers, help me **outline** the key points I should hit to be a competitive applicant.
3. Once I've written a draft, I'll share it with you for **critique and refinement**, specifically focusing on tone, clarity, and impact.

### Scholarship Context:
${s.description}

### Qualifications:
${s.qualifications.join(', ')}

Please start by asking me the initial questions so we can begin the brainstorming process.`
};

// ============================================================
// Initialization
// ============================================================

function init() {
  // SCHOLARSHIPS is defined in data.js
  state.allScholarships = [...SCHOLARSHIPS];
  state.filteredScholarships = [...SCHOLARSHIPS];

  setupEventListeners();
  applyFiltersAndSort();
  
  console.log('Scholarshipping initialized with', state.allScholarships.length, 'scholarships');
}

// ============================================================
// Event listeners
// ============================================================

function setupEventListeners() {
  const searchInput = document.getElementById('scholarship-search');
  const amountFilter = document.getElementById('filter-amount');
  const locationFilter = document.getElementById('filter-location');
  const sortSelect = document.getElementById('sort-by');
  const closeModalBtn = document.getElementById('close-modal');
  const backdrop = document.getElementById('modal-backdrop');

  searchInput.addEventListener('input', (e) => {
    state.filters.search = e.target.value.toLowerCase();
    applyFiltersAndSort();
  });

  amountFilter.addEventListener('change', (e) => {
    state.filters.minAmount = parseInt(e.target.value, 10);
    applyFiltersAndSort();
  });

  locationFilter.addEventListener('change', (e) => {
    state.filters.location = e.target.value;
    applyFiltersAndSort();
  });

  sortSelect.addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    applyFiltersAndSort();
  });

  closeModalBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });

  // Handle Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

// ============================================================
// Logic
// ============================================================

function applyFiltersAndSort() {
  // Filter
  state.filteredScholarships = state.allScholarships.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(state.filters.search) || 
                         s.provider.toLowerCase().includes(state.filters.search) ||
                         s.description.toLowerCase().includes(state.filters.search);
    
    const matchesAmount = s.amount >= state.filters.minAmount;
    
    const matchesLocation = state.filters.location === 'all' || s.location === state.filters.location;
    
    return matchesSearch && matchesAmount && matchesLocation;
  });

  // Sort
  state.filteredScholarships.sort((a, b) => {
    switch (state.sortBy) {
      case 'deadline':
        return new Date(a.deadline) - new Date(b.deadline);
      case 'amount-high':
        return b.amount - a.amount;
      case 'amount-low':
        return a.amount - b.amount;
      case 'likelihood':
        const priority = { 'High': 3, 'Medium': 2, 'Low': 1 };
        return priority[b.likelihood] - priority[a.likelihood];
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
    const card = document.createElement('article');
    card.className = 'scholarship-card';
    card.setAttribute('tabindex', '0'); // Make focusable
    
    const formattedAmount = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(s.amount);

    const formattedDeadline = new Date(s.deadline).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });

    card.innerHTML = `
      <div class="scholarship-header">
        <h3 class="scholarship-name">${s.name}</h3>
        <span class="scholarship-amount">${formattedAmount}</span>
      </div>
      <p class="scholarship-provider">${s.provider}</p>
      
      <div class="scholarship-tags">
        <span class="tag tag-deadline">Due: ${formattedDeadline}</span>
        <span class="tag tag-location">${s.location}</span>
        ${s.qualifications.map(q => `<span class="tag">${q}</span>`).join('')}
      </div>

      <div class="scholarship-likelihood">
        <span class="likelihood-dot likelihood-${s.likelihood}"></span>
        <span>${s.likelihood} Likelihood</span>
      </div>

      <div class="scholarship-footer">
        <a href="${s.link}" class="btn-apply" target="_blank" rel="noopener">Apply Now</a>
        <button class="btn-details" onclick="showDetails(${s.id})">Details & Prompt</button>
      </div>
    `;

    listElement.appendChild(card);
  });
}

function showDetails(id) {
  const s = state.allScholarships.find(item => item.id === id);
  if (!s) return;
  
  state.selectedScholarship = s;
  
  const modalContent = document.getElementById('modal-content');
  const formattedAmount = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(s.amount);
  const prompt = PROMPT_TEMPLATES.collaborative(s);

  modalContent.innerHTML = `
    <div class="modal-header">
      <h2>${s.name}</h2>
      <p class="provider-large">${s.provider} &bull; ${formattedAmount}</p>
    </div>
    
    <div class="scholarship-details-full">
      <h3>Description</h3>
      <p>${s.description}</p>
      
      <h3>Key Information</h3>
      <ul class="info-list">
        <li><strong>Deadline:</strong> ${s.deadline}</li>
        <li><strong>Location:</strong> ${s.location}</li>
        <li><strong>Likelihood:</strong> ${s.likelihood}</li>
        <li><strong>Qualifications:</strong> ${s.qualifications.join(', ')}</li>
      </ul>
    </div>

    <div class="prompt-card">
      <div class="prompt-header">
        <h4>AI Support Prompt</h4>
        <span class="badge">Learning Oriented</span>
      </div>
      <p class="prompt-instruction">Copy this prompt into ChatGPT, Claude, or Gemini to start your collaborative application process.</p>
      <div id="prompt-text" class="prompt-text">${prompt}</div>
      <div class="prompt-controls">
        <button class="btn-copy" onclick="copyPrompt()">Copy Prompt</button>
      </div>
    </div>
  `;

  document.getElementById('modal-backdrop').classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeModal() {
  document.getElementById('modal-backdrop').classList.add('hidden');
  document.body.style.overflow = '';
  state.selectedScholarship = null;
}

function copyPrompt() {
  const promptText = document.getElementById('prompt-text').innerText;
  navigator.clipboard.writeText(promptText).then(() => {
    const btn = document.querySelector('.btn-copy');
    const originalText = btn.innerText;
    btn.innerText = 'Copied!';
    btn.style.background = 'var(--color-success)';
    setTimeout(() => {
      btn.innerText = originalText;
      btn.style.background = '';
    }, 2000);
  });
}

// ============================================================
// Boot
// ============================================================

document.addEventListener('DOMContentLoaded', init);
