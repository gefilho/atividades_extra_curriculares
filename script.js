let Eventos = [];

// Mini Janela
const modalBtns = document.querySelectorAll('.modal-btn');
const modal = document.getElementById('modal');
const modalNome = document.getElementById('modal-nome');
const modalDate = document.getElementById('modal-date');
const modalAddress = document.getElementById('modal-address');
const modalImage = document.getElementById('modal-image');
const closeModal = document.querySelector('.close-btn');
const btnInsc = document.querySelector('.btnIncri');

function verificarEAdicionar(nome) {
  if (!Eventos.includes(nome)) {
    Eventos.push(nome);
    console.log(`${nome} foi adicionado.`);
    console.log(Eventos);
  } else {
    console.log(`${nome} já está no array.`);
  }
}

modalBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const nome = btn.getAttribute('data-nome');
    const date = btn.getAttribute('data-date');
    const address = btn.getAttribute('data-address');
    const image = btn.getAttribute('data-image');
    
    modalNome.textContent = `Evento: ${nome}`;
    modalDate.textContent = `Data e Hora: ${date}`;
    modalAddress.textContent = `Endereço: ${address}`;
    modalImage.src = image;
    modal.style.display = 'block';

    btnInsc.addEventListener('click', () => {
      verificarEAdicionar(nome);
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

const meuPerfilButton = document.querySelector('.btnPerfil');

meuPerfilButton.addEventListener('click', function () {
    const MeuPerfil = this.closest('.MeuPerfil'); // Seleciona o container do "Meu Perfil"
    const atividades = MeuPerfil.querySelector('.atividades');
    MeuPerfil.classList.toggle('active');

    if (MeuPerfil.classList.contains('active')) {
        atividades.style.height = atividades.scrollHeight + 'px';
    } else {
        atividades.style.height = 0;
    }
});

// Seletor para o modal de atividades
const modalAtividades = document.getElementById('modalAtividades');
const atividadesList = document.getElementById('atividades-list');
const closeAtividadesModal = modalAtividades.querySelector('.close-btn');

// Função para remover uma atividade do array e atualizar a lista
function excluirAtividade(index) {
  Eventos.splice(index, 1); // Remove a atividade do array
  mostrarAtividades(); // Atualiza o modal para refletir a mudança
}

// Função para abrir o modal e exibir as atividades do array
function mostrarAtividades() {
  // Limpa a lista antes de adicionar os itens
  atividadesList.innerHTML = '';

  if (Eventos.length === 0) {
    atividadesList.innerHTML = '<li>Nenhuma atividade encontrada.</li>';
  } else {
    // Adiciona cada atividade como um item de lista com botão de excluir
    Eventos.forEach((atividade, index) => {
      const li = document.createElement('li');
      li.textContent = atividade;

      // Cria o botão de exclusão
      const excluirBtn = document.createElement('button');
      excluirBtn.textContent = 'Excluir';
      excluirBtn.style.marginLeft = '10px';

      // Adiciona evento de clique para excluir a atividade
      excluirBtn.addEventListener('click', () => excluirAtividade(index));

      // Adiciona o botão ao item da lista
      li.appendChild(excluirBtn);
      atividadesList.appendChild(li);
    });
  }

  modalAtividades.style.display = 'block'; // Exibe o modal
}

// Fecha o modal de atividades
closeAtividadesModal.addEventListener('click', () => {
  modalAtividades.style.display = 'none';
});

// Evento de clique no botão "Minhas Atividades e Eventos"
document.addEventListener('DOMContentLoaded', function () {
  const MeuPerfil = document.querySelector('.MeuPerfil');
  const minhasAtividades = MeuPerfil.querySelector('.minhasAtividades');

  if (minhasAtividades) {
    minhasAtividades.addEventListener('click', mostrarAtividades);
  } else {
    console.error('Elemento "minhasAtividades" não encontrado!');
  }
});

// Fechar o modal ao clicar fora dele
window.addEventListener('click', (e) => {
  if (e.target == modalAtividades) {
    modalAtividades.style.display = 'none';
  }
});
