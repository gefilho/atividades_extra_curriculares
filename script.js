const modalBtns = document.querySelectorAll('.modal-btn');
const modal = document.getElementById('modal');
const modalDate = document.getElementById('modal-date');
const modalAddress = document.getElementById('modal-address');
const modalImage = document.getElementById('modal-image');
const closeModal = document.querySelector('.close-btn');

modalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const date = btn.getAttribute('data-date');
    const address = btn.getAttribute('data-address');
    const image = btn.getAttribute('data-image');
    
    modalDate.textContent = `Data e Hora: ${date}`;
    modalAddress.textContent = `Endereço: ${address}`;
    modalImage.src = image;
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

const atividades = document.querySelector('.atividades');
const MeuPerfil = document.querySelector('.MeuPerfil');

const meuPerfilButton = document.querySelector('.MeuPerfil');

meuPerfilButton.addEventListener('click', function () {
    const atividades = this.querySelector('.atividades');
    this.classList.toggle('active');

    if (this.classList.contains('active')) {
        atividades.style.height = atividades.scrollHeight + 'px';
    } else {
        atividades.style.height = 0;
    }
});
