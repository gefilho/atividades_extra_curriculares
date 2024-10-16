// Mini Janela
const modalBtnsClubes = document.querySelectorAll('.modal-btnClubes');
const modalClubes = document.getElementById('modalClubes');
//Propriedades
const modalNomeClubes = document.getElementById('modal-nomeClubes');
const modalDateClubes = document.getElementById('modal-dateClubes');
const modalAddressClubes = document.getElementById('modal-addressClubes');
const modalImageClubes = document.getElementById('modal-imageClubes');
//Botão Fechar
const closeModalClubes = document.querySelector('.close-btnClubes');

const btnInscricaoClubes = document.querySelector('.btnInscricaoClubes');

let Clubes = [];

//Verificar e Adicionar nome do Eventos no Array Eventos
function verificarEAdicionarClubes(nome, date) {
  const clubeExistente = Clubes.find(atividade => atividade.nome === nome && atividade.date === date);

  if (!clubeExistente) {
    Clubes.push({ nome, date });
      console.log(`${nome} foi adicionado com a data ${date}.`);
      console.log(Clubes);
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
      console.log(`Você já está inscrito neste clube: ${nome} no dia ${date}!`);
      Toastify({
          text: `Você já está inscrito neste clube: ${nome} no dia ${date}!`,
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
modalBtnsClubes.forEach(btn => {
  btn.addEventListener('click', () => {
      const nome = btn.getAttribute('data-nome');
      const date = btn.getAttribute('data-date');
      const address = btn.getAttribute('data-address');
      const image = btn.getAttribute('data-image');

      modalNomeClubes.textContent = `Clube: ${nome}`;
      modalDateClubes.textContent = `Data e Hora: ${date}`;
      modalAddressClubes.textContent = `Endereço: ${address}`;
      modalImageClubes.src = image;
      modalClubes.style.display = 'block';

      const btnInsc = document.querySelector('.btnInscricaoClubes');
      btnInsc.replaceWith(btnInsc.cloneNode(true));

      document.querySelector('.btnInscricaoClubes').addEventListener('click', () => {
        verificarEAdicionarClubes(nome, date);
      });
  });
});


closeModalClubes.addEventListener('click', () => {
    modalClubes.style.display = 'none';
  });
  
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modalClubes.style.display = 'none';
    }
});

// Seletor para o modal de eventos
const modalPerfilClubes = document.getElementById('modalPerfilClubes');
const clubeList = document.getElementById('Clubes-list');
const closeClubesModal = modalPerfilClubes.querySelector('.close-btnPerfilClubes');

// Função para abrir o modal e exibir as atividades do array
function mostrarClubes() {
  // Limpa a lista antes de adicionar os itens
  clubeList.innerHTML = '';
  modalPerfilClubes.style.display = 'block'; // Exibe o modal

  if (Clubes.length === 0) {
    clubeList.innerHTML = '<li>Nenhum clube encontrado.</li>';
  }else {
    // Adiciona cada atividade como um item de lista com botão de excluir
    Clubes.forEach((atividade, index) => {
      const li = document.createElement('li');
      li.textContent = atividade.nome;

      // Cria o botão de exclusão
      const excluirBtn = document.createElement('button');
      excluirBtn.textContent = 'Excluir';
      excluirBtn.style.marginLeft = '10px';
      excluirBtn.addEventListener('click', () => excluirClube(index));

      // Adiciona o botão ao item da lista
      li.appendChild(excluirBtn);
      clubeList.appendChild(li);
    });
}}

// Função para remover uma atividade do array e atualizar a lista
function excluirClube(index) {
  Clubes.splice(index, 1); // Remove a atividade do array
  Toastify({
    text: 'Você foi desinscrito do clube com sucesso!',
    position: 'left',
    gravity: "top",
    duration: 2000,
    style: {
        background: "#e74c3c",
        color: 'white',
        borderRadius: '10px'
    }
  }).showToast();
  mostrarClubes(); // Atualiza o modal para refletir a mudança
}

const meusClubes = document.querySelector('.meusClubes');
meusClubes.addEventListener('click', () => {
  mostrarClubes();
})

// Fecha o modal de atividades
closeClubesModal.addEventListener('click', () => {
  modalPerfilClubes.style.display = 'none';
});

// Fechar o modal ao clicar fora dele
window.addEventListener('click', (e) => {
  if (e.target == modalPerfilClubes) {
    modalPerfilClubes.style.display = 'none';
  }
});
