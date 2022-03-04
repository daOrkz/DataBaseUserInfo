

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

const usersDiv = document.querySelector('.users')
const userInfo = document.querySelector('.user-info')
let usersArr = null


const xhr = new XMLHttpRequest()

xhr.open('get', 'https://jsonplaceholder.typicode.com/users')

xhr.onload = (e) => {
  // const usersDb = JSON.parse(xhr.response)
  // usersArr = usersDb
  usersArr = JSON.parse(xhr.response)
  getUser(usersArr)
}

xhr.send()

function getUser(res) {
  res.forEach(element => {
  // const userName =  element.name
  
  renderUser(element)
  });
}

function renderUser(users) {
  
  const fragment = document.createDocumentFragment()
  const div = document.createElement('div')
  div.dataset.user = users.name
  div.textContent = users.name
  div.addEventListener('click', (e) => {
    const ind = usersArr.indexOf(users)
    const user = usersArr[ind]
    showInfo(user)
    // usersArr.splice(ind, 1)
    // console.log(usersArr);
    // usersDiv.textContent = ' '
  })
  div.classList.add('user-name')
  fragment.appendChild(div)
  usersDiv.appendChild(fragment)
}

function showInfo(obj) {
  console.log(obj);
  userInfo.textContent = JSON.stringify(obj)
  
}