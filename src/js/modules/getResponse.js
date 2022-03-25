

export const response = {
  urlUsers: 'https://jsonplaceholder.typicode.com/users',
  urlPosts: 'https://jsonplaceholder.typicode.com/posts',

  async getUsers() {
    const response = await fetch(this.urlUsers)
    const users = await response.json()
    return users
  },
  async getPosts() {
    const response = await fetch(this.urlPosts)
    const posts = await response.json()
    return posts
  },
}