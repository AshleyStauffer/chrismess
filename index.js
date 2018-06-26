const form = document.querySelector('form#flickForm')

const createList = function(ev) {
  ev.preventDefault()
  const f = ev.target
    
  const flicksDiv = document.querySelector('#flicks')
  flicksDiv.textContent += ' ' + f.flickName.value

  const actorDiv = document.querySelector('#actors')
  actorDiv.textContent += ' ' + f.actorName.value

  f.reset()
}

form.addEventListener('submit', createList)