// variável que armazena o índice da imagem atual (começa na primeira, índice 0)
let indice = 0; 

// seleciona o elemento que contém todas as imagens (a div com a classe 'imagens')
const imagens = document.querySelector('.imagens');

// conta o número total de imagens dentro do carrossel
const totalImagens = document.querySelectorAll('.imagens img').length;

// adiciona um 'ouvinte de evento' de clique ao botão 'próximo'
document.querySelector('.proximo').addEventListener('click', () => {
    // aumenta o índice para ir para a próxima imagem
    indice++;
    
    // se o índice for maior ou igual ao total de imagens, volta para a primeira (loop)
    if (indice >= totalImagens) indice = 0;
    
    // move o contêiner de imagens para a esquerda
    // o valor '600' é a largura definida no CSS para cada imagem
    imagens.style.transform = `translateX(${-600 * indice}px)`;
});

// adiciona um 'ouvinte de evento' de clique ao botão 'anterior'
document.querySelector('.anterior').addEventListener('click', () => {
    // diminui o indice para ir para a imagem anterior
    indice--;
    
    // retorna para o inicio (loop)
    if (indice < 0) indice = totalImagens - 1;
    
    // move o container de imagens
    imagens.style.transform = `translateX(${-600 * indice}px)`;
});