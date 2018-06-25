const button = document.querySelector('button');

const changeHeader = function() {
    const p = document.querySelector('#chris');
    p.textContent = 'Beware of Chris';
}

button.addEventListener('click', changeHeader);