const autocomlite = {
  itemsStore: [],
  itemsInput: null,
  itemsList: null,
  users: null,

  getElement(input, list) {
    this.itemsInput = document.querySelector(input)
    this.itemsList = document.querySelector(list)
  },

  typing() {
    if(this.itemsInput.value) {
      this.filterStore(this.users, this.itemsInput.value.toLowerCase())
    }
    if(!this.itemsInput.value) {
      this.itemsList.innerHTML = ''
    }
  },

  fetcResponse(url) {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      this.itemsStore = data.map(elem => elem.name.toLowerCase())  
      this.itemsStore.sort()
      console.log(this.itemsStore);
    })
  },

  renderItemsList(items) {
    let fragment = ''
    for (let i = 0; i < items.length; i++) {
      fragment += `<li class='user-list-items' value="${items[i].id}">${items[i].name}</li>`
    }
    this.itemsList.insertAdjacentHTML('beforeend', fragment)
  },

  filterStore(items, letter) {
    const filtredItems = items.filter(item => {
      return item.name.toLowerCase().includes(letter)
    })
    this.itemsList.innerHTML = ''
    this.renderItemsList(filtredItems)
  },

  init(config, users) {
    this.users = users
    this.getElement(config.itemsInput, config.itemsList)
    this.itemsInput.addEventListener ('input', event => this.typing())
    this.renderItemsList(this.itemsStore)
  }
}


export default autocomlite