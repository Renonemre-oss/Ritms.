// Seleciona todos os elementos com a classe "item"
const items = document.querySelectorAll('.item');

// Adiciona um evento de clique para cada item
items.forEach(item => {
    item.addEventListener('click', function() {
        // Remove a classe "active" de todos os itens
        items.forEach(i => i.classList.remove('active'));

        // Adiciona a classe "active" ao item clicado
        this.classList.add('active');
    });
});
