// Mini Janela
const modalBtnsEvento = document.querySelectorAll('.modal-btnEventos');
const modalEvento = document.getElementById('modalEvento');
//Propriedades
const modalNomeEvento = document.getElementById('modal-nomeEventos');
const modalDateEvento = document.getElementById('modal-dateEventos');
const modalAddressEvento = document.getElementById('modal-addressEventos');
const modalImageEvento = document.getElementById('modal-imageEventos');
//Botão Fechar
const closeModalEvento = document.querySelector('.close-btnEvento');

const btnInscricaoEvento = document.querySelector('.btnIncricaoEventos');

let Eventos = [];

//Verificar e Adicionar nome do Eventos no Array Eventos
function verificarEAdicionarEventos(nome) {
  if (!Eventos.includes(nome)) {
    Eventos.push(nome);
    console.log(`${nome} foi adicionado.`);
    console.log(Eventos);
  } else {
    console.log(`${nome} já está no array.`);
  }
}

//Mini Janela de Eventos
modalBtnsEvento.forEach(btn => {
  btn.addEventListener('click', () => {
    const nome = btn.getAttribute('data-nome');
    const date = btn.getAttribute('data-date');
    const address = btn.getAttribute('data-address');
    const image = btn.getAttribute('data-image');
    
    modalNomeEvento.textContent = `Evento: ${nome}`;
    modalDateEvento.textContent = `Data e Hora: ${date}`;
    modalAddressEvento.textContent = `Endereço: ${address}`;
    modalImageEvento.src = image;
    modalEvento.style.display = 'block';

    btnInscricaoEvento.addEventListener('click', () => {
      verificarEAdicionarEventos(nome);
    });
  });
});

closeModalEvento.addEventListener('click', () => {
    modalEvento.style.display = 'none';
  });
  
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modalEvento.style.display = 'none';
    }
});

// Seletor para o modal de eventos
const modalPerfilEventos = document.getElementById('modalPerfilEventos');
const eventoList = document.getElementById('Eventos-list');
const closeEventosModal = modalPerfilEventos.querySelector('.close-btnPerfilEventos');

// Função para abrir o modal e exibir as atividades do array
function mostrarEventos() {
  // Limpa a lista antes de adicionar os itens
  eventoList.innerHTML = '';
  modalPerfilEventos.style.display = 'block'; // Exibe o modal

  if (Eventos.length === 0) {
    eventoList.innerHTML = '<li>Nenhuma atividade encontrada.</li>';
  }else {
    // Adiciona cada atividade como um item de lista com botão de excluir
    Eventos.forEach((atividade, index) => {
      const li = document.createElement('li');
      li.textContent = atividade;

      // Cria o botão de exclusão
      const excluirBtn = document.createElement('button');
      excluirBtn.textContent = 'Excluir';
      excluirBtn.style.marginLeft = '10px';
      excluirBtn.addEventListener('click', () => excluirAtividade(index));

      // Adiciona o botão ao item da lista
      li.appendChild(excluirBtn);
      eventoList.appendChild(li);
    });
}}

// Função para remover uma atividade do array e atualizar a lista
function excluirAtividade(index) {
  Eventos.splice(index, 1); // Remove a atividade do array
  mostrarEventos(); // Atualiza o modal para refletir a mudança
}

const meusEventos = document.querySelector('.meusEventos');
meusEventos.addEventListener('click', () => {
  mostrarEventos();
})

// Fecha o modal de atividades
closeEventosModal.addEventListener('click', () => {
  modalPerfilEventos.style.display = 'none';
});

// Fechar o modal ao clicar fora dele
window.addEventListener('click', (e) => {
  if (e.target == modalPerfilEventos) {
    modalPerfilEventos.style.display = 'none';
  }
});
