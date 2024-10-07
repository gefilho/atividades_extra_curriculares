const modalBtns = document.querySelectorAll('.modal-btn');
const modal = document.getElementById('modal');
const modalDate = document.getElementById('modal-date');
const modalAddress = document.getElementById('modal-address');
const closeModal = document.querySelector('.close-btn');

modalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const date = btn.getAttribute('data-date');
    const address = btn.getAttribute('data-address');
    
    modalDate.textContent = `Data e Hora: ${date}`;
    modalAddress.textContent = `Endereço: ${address}`;
    modal.style.display = 'block';
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
});
