const meuPerfilButton = document.querySelector('.btnPerfil');

meuPerfilButton.addEventListener('click', function () {
    const MeuPerfil = this.closest('.MeuPerfil'); // Seleciona o container do "Meu Perfil"
    const atividades = MeuPerfil.querySelector('.atividades');
    MeuPerfil.classList.toggle('active');

    if (MeuPerfil.classList.contains('active')) {
        atividades.style.height = '200px';
    } else {
        atividades.style.height = 0;
    }
});