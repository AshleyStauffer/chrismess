class App {
    constructor() {
      const form = document.querySelector('form#flickForm')
       this.flicks = []
      form.addEventListener('submit', (ev) => {
        ev.preventDefault()
        this.handleSubmit(ev)
      })
    }
  
    renderProperty(name, value) {
      const span = document.createElement('span')
      span.classList.add(name)
      span.textContent = value + ' '
      return span
    }
  
    renderItem(flick) {
      const item = document.createElement('li')
  
      // get the list of properties
      const properties = Object.keys(flick)
  
      // loop over the properties
      properties.forEach((propertyName) => {
        // build a span, and append it to the list
        const span = this.renderProperty(propertyName, flick[propertyName])
        item.appendChild(span)
      })
      return item
    }
  
    handleSubmit(ev) {
      const f = ev.target
  
      const flick = {
        movie: f.flickName.value + ': ',
        chris: f.chrisName.value,
      }
      
      this.flicks.push(flick)

      const item = this.renderItem(flick)
  
      const list = document.querySelector('#flicks')

      // add a favorite button 
      const fav = document.createElement('button')
      const like = document.createTextNode('Favorite')
      fav.appendChild(like)
      item.appendChild(fav)
      fav.classList.add('fav')
      
      // make favorite button functional
      fav.addEventListener('click', () => {
          item.classList.toggle('favorite')
          fav.classList.toggle('favOn')
          let i = this.flicks.indexOf(flick)
          if(flick.favorite == 'YES') {
            flick.favorite = 'NO'
          }
          else {
               flick.favorite = 'YES'
          }
          
      })

      list.appendChild(item)

      // add a delete button
      const del = document.createElement('button')
      const word = document.createTextNode('REMOVE')
      del.appendChild(word)
      item.appendChild(del)
      del.classList.add('delete')

      // make delete button functional
      del.addEventListener('click', () => {
        let i = this.flicks.indexOf(flick)
        this.flicks.splice(i, 1)
        list.removeChild(item)
      })
      f.reset()
      f.flickName.focus()
    }

  }
 
  const app = new App()