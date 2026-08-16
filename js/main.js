document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initWorksFilter();
  initCardLinks();
});

function initMobileMenu() {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.mobile-menu');
  if (!burger || !menu) return;

  burger.addEventListener('click', () => {
    menu.classList.toggle('is-open');
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => menu.classList.remove('is-open'));
  });
}

function initWorksFilter() {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('[data-category]');
  if (!buttons.length || !cards.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.filter;

      buttons.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      cards.forEach((card) => {
        const match = category === '全部' || card.dataset.category === category;
        card.style.display = match ? '' : 'none';
      });
    });
  });
}

/* Whole work card opens its primary link in a new tab, but clicks on the
   per-link pills inside the card (which may point elsewhere) still win. */
function initCardLinks() {
  document.querySelectorAll('.work-card[data-href]').forEach((card) => {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'link');

    card.addEventListener('click', (e) => {
      if (e.target.closest('a')) return;
      window.open(card.dataset.href, '_blank', 'noopener');
    });

    card.addEventListener('keydown', (e) => {
      if (e.target.closest('a')) return;
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        window.open(card.dataset.href, '_blank', 'noopener');
      }
    });
  });
}
