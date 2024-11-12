// Função para animar a div3 ao rolar a página
function animateOnScroll() {
    const div3 = document.querySelector('.div3');
    const divPosition = div3.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    // Adiciona a classe 'visible' quando a div está visível na tela
    if (divPosition < screenPosition) {
        div3.classList.add('visible');
    }
}

// Evento de scroll para ativar a animação
window.addEventListener('scroll', animateOnScroll);
