const cards = document.querySelectorAll('.profile, .github, .portifolio');

cards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.classList.add('dancar');
  });

  card.addEventListener('animationend', () => {
    card.classList.remove('dancar');
  });

  card.addEventListener('mousemove', (e) => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    card.style.boxShadow = `0 0 20px rgb(${r}, ${g}, ${b})`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = 'none';
  });
});
