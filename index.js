const button = document.querySelector('#submitChris');

document.querySelector("#submitChris").addEventListener("click", function(event) {
    document.getElementById("submitChris");
    event.preventDefault();
}, false);

const changeHeader = function() {
    const p = document.querySelector('h1');
    p.textContent = document.getElementById('textChris').value;
}

button.addEventListener('click', changeHeader);