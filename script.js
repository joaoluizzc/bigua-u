let indice = 0;
const imagens = document.querySelector('.imagens');
const totalImagens = document.querySelectorAll('.imagens img').length;

document.querySelector('.proximo').addEventListener('click', () => {
    indice++;
    if (indice >= totalImagens) indice = 0;
    imagens.style.transform = `translateX(${-600 * indice}px)`;
});

document.querySelector('.anterior').addEventListener('click', () => {
    indice--;
    if (indice < 0) indice = totalImagens - 1;
    imagens.style.transform = `translateX(${-600 * indice}px)`;
});
