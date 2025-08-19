// Modal
const modal = document.getElementById('myModal');
const openModalBtns = document.querySelectorAll('.open-modal');
const closeModal = document.querySelector('.close');

// Abrir o modal ao clicar no botão
openModalBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'block';
  });
});

// Fechar o modal ao clicar no "x"
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Fechar o modal ao clicar fora do conteúdo
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
