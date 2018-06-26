const form = document.querySelector('form#flickForm')

const createLists = function(ev) {
  ev.preventDefault()
  const f = ev.target

  const flick = addToElement(f.flickName.value)
  const actor = addToElement( f.actorName.value)

  append('#flicks', flick)
  append('#actors', actor)
 
  f.reset()
}

const addToElement = function(word) {
    const item = document.createElement('div')
    item.textContent += word
    return item
}

const append = function(place, word) {
    const list = document.querySelector(place)
    list.appendChild(word)
}

form.addEventListener('submit', createLists)