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
const videoDialog = document.querySelector('#video-dialog');
const videoPlayer = videoDialog.querySelector('.video-player');
document.querySelectorAll('[data-video]').forEach(link => link.addEventListener('click', event => {
  // YouTube requires an HTTP Referer. A file:// page cannot provide one.
  const canEmbed = window.location.protocol === 'https:' || window.location.protocol === 'http:';
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || typeof videoDialog.showModal !== 'function') return;
  event.preventDefault();
  document.querySelector('#video-dialog-title').textContent = link.dataset.videoTitle;
  document.querySelector('#video-external').href = link.href;
  if (!canEmbed) {
    const message = document.createElement('p');
    message.className = 'video-local-message';
    message.textContent = 'Pour regarder cette vidéo ici, ouvrez le portfolio via son adresse web ou son aperçu local.';
    videoPlayer.replaceChildren(message);
    videoDialog.showModal();
    return;
  }
  const player = document.createElement('iframe');
  player.title = link.dataset.videoTitle;
  player.referrerPolicy = 'strict-origin-when-cross-origin';
  const embedUrl = new URL(`https://www.youtube-nocookie.com/embed/${link.dataset.video}`);
  embedUrl.searchParams.set('rel', '0');
  embedUrl.searchParams.set('playsinline', '1');
  embedUrl.searchParams.set('origin', window.location.origin);
  player.src = embedUrl.href;
  player.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  player.allowFullscreen = true;
  videoPlayer.replaceChildren(player);
  videoDialog.showModal();
}));
videoDialog.querySelector('.video-close').addEventListener('click', () => videoDialog.close());
videoDialog.addEventListener('close', () => videoPlayer.replaceChildren());
videoDialog.addEventListener('click', event => {
  if (event.target !== videoDialog) return;
  const box = videoDialog.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) videoDialog.close();
});
const imageDialog = document.querySelector('#image-dialog');
const publicationDialog = document.querySelector('#publication-dialog');
document.querySelectorAll('[data-publication-preview]').forEach(button => button.addEventListener('click', () => publicationDialog.showModal()));
publicationDialog.querySelector('.publication-close').addEventListener('click', () => publicationDialog.close());
publicationDialog.addEventListener('click', event => {
  if (event.target !== publicationDialog) return;
  const box = publicationDialog.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) publicationDialog.close();
});
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
