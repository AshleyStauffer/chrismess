const button = document.querySelector('button');

const changeHeader = function() {
    const p = document.querySelector('h1');
    p.textContent = 'Merry Chrismess';
}

button.addEventListener('click', changeHeader);