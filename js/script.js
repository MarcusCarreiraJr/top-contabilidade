const elementosAnimados = document.querySelectorAll(
    '.secao-cabecalho, .servico-card, .sobre-visual, .sobre-conteudo, .diferenciais-topo, .diferencial-item, .cta-container, .contato-topo, .contato-info, .contato-mapa'
);
const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('mostrar');
            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.15
});

elementosAnimados.forEach((elemento) => {
    elemento.classList.add('animar');
    observer.observe(elemento);
});
const anoAtual = document.querySelector('#ano-atual');

if (anoAtual) {
    anoAtual.textContent = new Date().getFullYear();
}
