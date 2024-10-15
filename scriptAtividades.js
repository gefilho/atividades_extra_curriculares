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

// Array para armazenar as atividades inscritas
let Atividades = [];

// Função para verificar e adicionar esporte, verificando nome e data
function verificarEAdicionarEsporte(nome, date) {
    const atividadeExistente = Atividades.find(atividade => atividade.nome === nome && atividade.date === date);

    if (!atividadeExistente) {
        Atividades.push({ nome, date });
        console.log(`${nome} foi adicionado com a data ${date}.`);
        console.log(Atividades);
        Toastify({
            text: `${nome} foi adicionado com sucesso!`,
            duration: 2000,
            gravity: "top",
            position: "left",
            style: {
              background: "#28a745",
              color: 'white',
              borderRadius: '10px'
          }
        }).showToast();
    } else {
        console.log(`Você já está inscrito nesta atividade: ${nome} no dia ${date}!`);
        Toastify({
            text: `Você já está inscrito nesta atividade: ${nome} no dia ${date}!`,
            duration: 2000,
            gravity: "top",
            position: "left",
            style: {
              background: "#FFA500",
              color: 'white',
              borderRadius: '10px'
          }
        }).showToast();
    }
}

// Mini Janela de Esportes
document.querySelectorAll('.modal-btnEsportes').forEach(btn => {
    btn.addEventListener('click', () => {
        const nome = btn.getAttribute('data-nome');
        const date = btn.getAttribute('data-date');
        const address = btn.getAttribute('data-address');
        const image = btn.getAttribute('data-image');

        document.getElementById('modal-nomeEsporte').textContent = `Esporte: ${nome}`;
        document.getElementById('modal-dateEsporte').textContent = `Data e Hora: ${date}`;
        document.getElementById('modal-addressEsporte').textContent = `Endereço: ${address}`;
        document.getElementById('modal-imageEsporte').src = image;
        document.getElementById('modalEsporte').style.display = 'block';

        const btnInsc = document.querySelector('.btnInscricaoEsporte');
        btnInsc.replaceWith(btnInsc.cloneNode(true));

        document.querySelector('.btnInscricaoEsporte').addEventListener('click', () => {
            verificarEAdicionarEsporte(nome, date);
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
    
      // Supondo que 'atividade' seja um objeto com a propriedade 'nome'
      li.textContent = atividade.nome; // Exibe o nome da atividade
    
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
    position: 'left',
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
