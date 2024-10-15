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
function verificarEAdicionarEventos(nome, date) {
  const eventoExistente = Eventos.find(evento => evento.nome === nome && evento.date === date);

  if (!eventoExistente) {
    Eventos.push({ nome, date });
      console.log(`${nome} foi adicionado com a data ${date}.`);
      console.log(Eventos);
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
      console.log(`Você já está inscrito neste Evento: ${nome} no dia ${date}!`);
      Toastify({
          text: `Você já está inscrito neste Evento: ${nome} no dia ${date}!`,
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

      const btnInsc = document.querySelector('.btnIncricaoEventos');
      btnInsc.replaceWith(btnInsc.cloneNode(true));

      document.querySelector('.btnIncricaoEventos').addEventListener('click', () => {
        verificarEAdicionarEventos(nome, date);
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
    eventoList.innerHTML = '<li>Nenhum evento encontrado.</li>';
  }else {
    // Adiciona cada atividade como um item de lista com botão de excluir
    Eventos.forEach((atividade, index) => {
      const li = document.createElement('li');

      li.textContent = atividade.nome; // Exibe o nome da atividade

      // Cria o botão de exclusão
      const excluirBtn = document.createElement('button');
      excluirBtn.textContent = 'Excluir';
      excluirBtn.style.marginLeft = '10px';
      excluirBtn.addEventListener('click', () => excluirEvento(index));

      // Adiciona o botão ao item da lista
      li.appendChild(excluirBtn);
      eventoList.appendChild(li);
    });
}}

// Função para remover uma atividade do array e atualizar a lista
function excluirEvento(index) {
  Eventos.splice(index, 1); // Remove a atividade do array
  Toastify({
    text: 'Você foi desinscrito do evento com sucesso!',
    position: 'left',
    gravity: "top",
    duration: 2000,
    style: {
        background: "#e74c3c",
        color: 'white',
        borderRadius: '10px'
    }
  }).showToast();
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
