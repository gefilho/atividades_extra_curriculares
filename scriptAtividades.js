// Mini Janela
const modalBtns = document.querySelectorAll('.modal-btnEsportes');
const modal = document.getElementById('modalEsporte');
//Propriedades
const modalNome = document.getElementById('modal-nomeEsporte');
const modalDate = document.getElementById('modal-dateEsporte');
const modalAddress = document.getElementById('modal-addressEsporte');
const modalImage = document.getElementById('modal-imageEsporte');
//Botão Fechar
const closeModal = document.querySelector('.close-btnEsporte');
const btnInscricaoEsporte = document.querySelector('.btnInscricaoEsporte');

let Atividades = [];

//Verificar e Adicionar nome do Esporte no Array Atividades
function verificarEAdicionarAtividades(nome) {
  if (!Atividades.includes(nome)) {
    Atividades.push(nome);
    Toastify({
      text: 'Sucesso ao realizar a inscrição!',
      position: 'right',
      gravity: "top",
      duration: 2000,
      style: {
          background: "#28a745",
          color: 'white',
          borderRadius: '10px'
      }
    }).showToast();
  } else {
    Toastify({
      text: 'Você já está inscrito nesta atividade!',
      position: 'right',
      gravity: "top",
      duration: 2000,
      style: {
          background: "#FFA500",
          color: 'white',
          borderRadius: '10px'
      }
    }).showToast();
  }
}

//Mini Janela de Esportes
modalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const nome = btn.getAttribute('data-nome');
    const date = btn.getAttribute('data-date');
    const address = btn.getAttribute('data-address');
    const image = btn.getAttribute('data-image');
    
    modalNome.textContent = `Esporte: ${nome}`;
    modalDate.textContent = `Data e Hora: ${date}`;
    modalAddress.textContent = `Endereço: ${address}`;
    modalImage.src = image;
    modal.style.display = 'block';

    btnInscricaoEsporte.addEventListener('click', () => {
      verificarEAdicionarAtividades(nome);
    });
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

// Seletor para o modal de atividades
const modalPerfilEsporte = document.getElementById('modalPerfilEsporte');
const esportesList = document.getElementById('esportes-list');
const closeAtividadesModal = modalPerfilEsporte.querySelector('.close-btnPerfilEsporte');

// Função para abrir o modal e exibir as atividades do array
function mostrarAtividades() {
  // Limpa a lista antes de adicionar os itens
  esportesList.innerHTML = '';
  modalPerfilEsporte.style.display = 'block'; // Exibe o modal

  if (Atividades.length === 0) {
    esportesList.innerHTML = '<li>Nenhum esporte encontrado.</li>';
  }else {
    // Adiciona cada atividade como um item de lista com botão de excluir
    Atividades.forEach((atividade, index) => {
      const li = document.createElement('li');
      li.textContent = atividade;

      // Cria o botão de exclusão
      const excluirBtn = document.createElement('button');
      excluirBtn.textContent = 'Excluir';
      excluirBtn.style.marginLeft = '10px';
      excluirBtn.addEventListener('click', () => excluirAtividade(index));

      // Adiciona o botão ao item da lista
      li.appendChild(excluirBtn);
      esportesList.appendChild(li);
    });
}}

// Função para remover uma atividade do array e atualizar a lista
function excluirAtividade(index) {
  Atividades.splice(index, 1); // Remove a atividade do array
  Toastify({
    text: 'Você foi desinscrito da atividade com sucesso!',
    position: 'right',
    gravity: "top",
    duration: 2000,
    style: {
        background: "#e74c3c",
        color: 'white',
        borderRadius: '10px'
    }
  }).showToast();
  mostrarAtividades(); // Atualiza o modal para refletir a mudança
}

const minhasAtividades = document.querySelector('.minhasAtividades');
minhasAtividades.addEventListener('click', () => {
  mostrarAtividades();
})

// Fecha o modal de atividades
closeAtividadesModal.addEventListener('click', () => {
  modalPerfilEsporte.style.display = 'none';
});

// Fechar o modal ao clicar fora dele
window.addEventListener('click', (e) => {
  if (e.target == modalPerfilEsporte) {
    modalPerfilEsporte.style.display = 'none';
  }
});
