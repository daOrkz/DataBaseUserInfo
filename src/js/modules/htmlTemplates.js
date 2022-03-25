
export const templates = {
  createSelect(users) {
    const select = document.createElement('select')
    select.className = 'user-list'

    const option = document.createElement('option')
    option.text = 'Name'

    select.appendChild(option)
    for (let i = 0; i < users.length; i++) {
      const option = document.createElement('option')
      option.value = users[i].id
      option.text = users[i].name
      select.appendChild(option)
    }

    return select
  },

  createPostUser(post) {
    let fragment = `<h3>Posts:</h3>`
    for (let i = 0; i < post.length; i++) {
      fragment += `
      <div class="post">
        <h3 class="title">${post[i].title}</h3>
        <h4 class="text">${post[i].body}</h4>
      </div>
      `
    }
    return fragment
  }
}

