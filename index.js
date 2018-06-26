const form = document.querySelector('form#flickForm')

const createLists = function(ev) {
  ev.preventDefault()
  const f = ev.target

  //addToDivs(f.flickName.value, f.actorName.value)

  const flick = f.flickName.value 
  const actor =  f.actorName.value

  const item = document.createElement('div')
  item.textContent += flick

  const items = document.createElement('div')
  items.textContent += actor

  const list = document.querySelector('#flicks')
  const lists = document.querySelector('#actors')

  list.appendChild(item)
  lists.appendChild(items)

  f.reset()
}

const addToDivs = function(flick, actor) {
    const item = document.createElement('li')
    item.textContent += flick

    const list = document.querySelector('#flicks')
    list.appendChild(item)
}
form.addEventListener('submit', createLists)