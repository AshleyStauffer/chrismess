class App {
    constructor() {
      this.list = document.querySelector('#flicks')

      this.flicks = []
      this.load()
      
      const form = document.querySelector('form#flickForm')
      form.addEventListener('submit', (ev) => {
        ev.preventDefault()
        this.handleSubmit(ev)
      })
    }

    save() {
        // store flicks array in localStorage
        localStorage.setItem('flicks', JSON.stringify(this.flicks))
    }
  
    load() {
        const flicks = JSON.parse(localStorage.getItem('flicks'))
        
        if (flicks) {
            flicks.forEach(flick => this.addFlick(flick))
        }
    }
    renderProperty(name, value) {
        const span = document.createElement('span')
        span.classList.add(name)
        span.textContent = value + ' '
        return span
    }
  
    renderActionButtons(flick, item) {
        // add a favorite button 
        const fav = document.createElement('button')
        item.appendChild(fav)
        fav.innerHTML = '<i class="fas fa-star" title="Favorite"></i>'
        
        if(flick.favorite) {
            fav.classList.add('favOn')
        }
        fav.classList.add('fav')

        // make favorite button functional
        fav.addEventListener('click', () => this.toggleFavorite(flick, item, fav)) 
        
        // add a delete button
        const del = document.createElement('button')
        item.appendChild(del)
        del.classList.add('delete')
        del.innerHTML = '<i class="far fa-trash-alt" title="Delete flick"></i>'

        // make delete button functional
        del.addEventListener('click', (_ev) => this.removeFlick(flick, item))

        // add an edit button
        const edit = document.createElement('button')
        item.appendChild(edit)
        
        edit.innerHTML = '<i class="fas fa-pencil-alt" title="edit"></i>'

        // make edit button functional
        edit.addEventListener('click', () => this.editContent(flick, item))
    
    }

    renderProperties(flick, item) {
        // get the list of properties
        const properties = Object.keys(flick)
    
        // loop over the properties
        properties.forEach((propertyName) => {
            // build a span, and append it to the list
            const span = this.renderProperty(propertyName, flick[propertyName])
            item.appendChild(span)
        })
    }

    renderItem(flick) {
        const item = document.createElement('li')
        
        this.renderProperties(flick, item)
        this.renderActionButtons(flick, item)
        
        return item;
    }

    toggleFavorite(flick, item, fav) {
        flick.favorite = item.classList.toggle('favorite')
        fav.classList.toggle('favOn')
        
        this.save()
    }
    
    removeFlick(flick, item) {
        this.list.removeChild(item)

        const i = this.flicks.indexOf(flick)
        this.flicks.splice(i, 1)

        this.save()
    }

    editContent(flick, item) {
        const newCont = movie.contentEditable
    }

    addFlick(flick) {
        this.flicks.push(flick)
        
        const item = this.renderItem(flick)
        if(flick.favorite) {
            item.classList.add('favorite')
        }
        this.list.appendChild(item)
    }

    handleSubmit(ev) {
      const f = ev.target
  
      const flick = {
        movie: f.flickName.value + ': ',
        chris: f.chrisName.value,
        favorite: false
      }
      
      this.addFlick(flick)

      f.reset()
      f.flickName.focus()
      this.save()
    }

  }
 
  const app = new App()