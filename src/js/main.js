import "../css/style.css"
import {storage} from './modules/storage'
import {templates} from './modules/htmlTemplates'
import {methods} from "./modules/methods"
import autocomlite from "./modules/autocomplite"

const left = document.querySelector('.left')
const right = document.querySelector('.right')
const userInput = document.querySelector('.user-input')
const userList = document.querySelector('.user-ul')
const resetBtn = document.querySelector('#reset')

const config = {
  itemsInput: '.user-input',
  itemsList: '.user-ul',
  url: 'https://jsonplaceholder.typicode.com/users',
}


storage.init().then(data => {
  left.prepend(templates.createSelect(data.users))
  autocomlite.init(config, storage.users)
})

left.onclick= (e) => {
  if(e.target.classList.contains('user-list')) {
    const idUser = methods.selectUser(e.target.value)
    const postfOfUser = methods.outputPosts(Number(idUser))
    right.innerHTML = templates.createPostUser(postfOfUser)
  }
  if(e.target.classList.contains('user-list-items')) {
    userInput.value = e.target.textContent
    const idUser = e.target.value
    const postfOfUser = methods.outputPosts(Number(idUser))
    right.innerHTML = templates.createPostUser(postfOfUser)
    userList.innerHTML = ''
  }
}

resetBtn.onclick = () => {
  location.reload()
  return false
}
