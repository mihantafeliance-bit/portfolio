const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() { navigation.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); navigation.classList.toggle('open', open); });
navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); } });

document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(item => { const active = item === button; item.classList.toggle('active', active); item.setAttribute('aria-pressed', String(active)); });
  document.querySelectorAll('[data-category]').forEach(card => { card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter; });
}));

const projects = {
  manufacture: ['Faire rayonner un savoir-faire', 'La capture montre une publication de la Manufacture des Cévennes repartagée par Mihanta le 9 octobre 2026. Elle annonce sa sélection parmi les 104 lauréats de la Grande Exposition du Fabriqué en France, prévue les 21 et 22 novembre 2026 au Palais de l’Élysée. Le contenu valorise un siège né dans les Cévennes et le savoir-faire de l’entreprise. Cette sélection récompense la Manufacture, et ne constitue pas un prix attribué à Mihanta.'],
  ergo: ['Mettre l’humain au premier plan', 'Repartagée le 9 octobre 2026, la publication Ergo Santé évoque la journée mondiale du handicap, les solutions ergonomiques et le maintien dans l’emploi. Elle présente notamment l’agrément Entreprise Adaptée obtenu par l’activité de production en 2019. Le message met en avant les personnes et l’adaptation du travail. Les données d’entreprise ne sont pas des résultats de communication personnels.'],
  hapo: ['Faire vivre un rendez-vous professionnel', 'La publication Hapo repartagée le 6 octobre 2026 présente la première journée du salon Préventica Lyon, consacré à la santé, à la sécurité et à la qualité de vie au travail. Elle invite à découvrir les dispositifs d’assistance physique et les exosquelettes sur le stand Q60, à Eurexpo Lyon, du 6 au 8 octobre 2026.']
};
const dialog = document.querySelector('#project-dialog');
const imageDialog = document.querySelector('#image-dialog');
document.querySelectorAll('[data-image]').forEach(button => button.addEventListener('click', () => {
  const image = document.querySelector('#expanded-image');
  image.src = button.dataset.image;
  image.alt = button.querySelector('img').alt;
  document.querySelector('#image-dialog-caption').textContent = button.dataset.caption;
  imageDialog.showModal();
}));
document.querySelector('.image-close').addEventListener('click', () => imageDialog.close());
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => { const [title, content] = projects[button.dataset.project]; document.querySelector('#dialog-title').textContent = title; document.querySelector('#dialog-content').textContent = content; dialog.showModal(); }));
document.querySelector('#project-dialog .dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: 0.06 });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
  document.documentElement.classList.add('js-motion');
}
