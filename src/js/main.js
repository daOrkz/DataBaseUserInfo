import "../css/style.css"
import {storage} from './modules/storage'
import {templates} from './modules/htmlTemplates'
import {methods} from "./modules/methods"

const left = document.querySelector('.left')
const right = document.querySelector('.right')

storage.init().then(data => {
  left.appendChild(templates.createSelect(data.users))
})

left.onclick= (e) => {
  if(e.target.classList.contains('user-list')) {
    const idUser = methods.selectUser(e.target.value)
    const postfOfUser = methods.outputPosts(Number(idUser))
    right.innerHTML = templates.createPostUser(postfOfUser)
  }
}