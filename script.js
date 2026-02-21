// ── Scroll Reveal ──
const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')});
},{threshold:0.1});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

// ── Smooth scroll for dropdown links ──
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const target=document.querySelector(a.getAttribute('href'));
    if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth'})}
  });
});

// ── Make section titles clickable ──
const sectionTitles = document.querySelectorAll('.section-title');
const navigationMap = {
  'intro': 'introduction.html',
  'amino': 'amino-acids.html',
  'levels': 'protein-structure-levels.html',
  'secondary': 'protein-structure-levels.html',
  'families': 'protein-families.html',
  'diseases': 'diseases.html',
  'techniques': 'techniques.html',
  'profiles': 'protein-families.html',
  'pdb': 'pdb.html',
  'synthesis': 'protein-synthesis.html',
  'evolution': 'evolution.html',
  'quiz': 'quiz.html',
  'glossary': 'glossary.html',
  'viewer': '3d-models.html'
};

sectionTitles.forEach(title => {
  title.addEventListener('click', e => {
    const parentSection = title.closest('section');
    if(parentSection) {
      const sectionId = parentSection.id;
      if(navigationMap[sectionId]) {
        window.location.href = navigationMap[sectionId];
      }
    }
  });
});

// ── Modal functionality ──
function openModal(content) {
  const modal = document.getElementById('contentModal');
  if(modal) {
    document.getElementById('modalContent').innerHTML = content;
    modal.classList.add('active');
  }
}

function closeModal() {
  const modal = document.getElementById('contentModal');
  if(modal) modal.classList.remove('active');
}

// Close modal on outside click
document.addEventListener('click', e => {
  const modal = document.getElementById('contentModal');
  if(e.target === modal) closeModal();
});

// ── Make content cards clickable ──
document.querySelectorAll('.content-card').forEach(card => {
  if(card.dataset.link) {
    card.addEventListener('click', () => {
      window.location.href = card.dataset.link;
    });
  }
});
