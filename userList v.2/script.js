
const usersList = document.querySelector('.users')
const userInfo = document.querySelector('.user-info')

usersList.addEventListener('click', getUserInfo)

function getUsersFromDb() {
  const url = 'https://jsonplaceholder.typicode.com/users'

  const xhr = new XMLHttpRequest()
  xhr.open('GET', url)

  xhr.onload = () => {
    const response = xhr.response
    const users = JSON.parse(response)  // [{…}, {…}]

    renderUsers(users)
  }
  
  xhr.send()
}

function getUserInfoFromDb(userId) {
  const url = 'https://jsonplaceholder.typicode.com/users/' + userId

  const xhr = new XMLHttpRequest()
  xhr.open('GET', url)

  xhr.onload = () => {
    const response = xhr.response
    const user = JSON.parse(response)  // {…}

    renderUsersInfo(user)
  }
  
  xhr.send()
}

function renderUsers(users) {
  let fragment = ''

  users.forEach(user => {
    fragment += createUserNameTemplate(user)
  })

  usersList.insertAdjacentHTML('afterbegin', fragment)
}

function renderUsersInfo(user) {
  userInfo.innerHTML = ''

  userInfo.insertAdjacentHTML('afterbegin', createUserInfoTemplate(user))
}

function getUserInfo(e) {
  const userId = e.target.dataset.userId

  getUserInfoFromDb(userId)

}

function createUserInfoTemplate(user) {
  return `
    <h3>Name: </h3><p>${user.name}</p>
    <h3>email: </h3><p>${user.email}</p>
    <h3>phone: </h3><p>${user.phone}</p>
  `
}

function createUserNameTemplate(user) {
  return `
  <h3 data-user-id='${user.id}'>${user.name}</h3>
  `
}

getUsersFromDb()

