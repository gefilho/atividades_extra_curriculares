// Seletor para o modal de eventos
const modalPerfilCertificado = document.getElementById('modalPerfilCertificado');
const closeCertificadoModal = modalPerfilCertificado.querySelector('.close-btnPerfilCertificado');

// Função para abrir o modal e exibir as atividades do array
function mostrarCertificados() {
  // Limpa a lista antes de adicionar os itens
  modalPerfilCertificado.style.display = 'block'; // Exibe o modal
}

const meusCertificados = document.querySelector('.meusCertificados');
meusCertificados.addEventListener('click', () => {
  mostrarCertificados();
})

// Fecha o modal de atividades
closeCertificadoModal.addEventListener('click', () => {
    modalPerfilCertificado.style.display = 'none';
});

// Fechar o modal ao clicar fora dele
window.addEventListener('click', (e) => {
  if (e.target == modalPerfilCertificado) {
    modalPerfilCertificado.style.display = 'none';
  }
});
