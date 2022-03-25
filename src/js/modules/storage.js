import {response} from "./getResponse.js"

export const storage = {
  resp: response,
  users: null,
  posts: null,

  // async init() {
  //   const allResponse = await Promise.all([this.resp.getUsers(), this.resp.getPosts()]) 
  //   const [users, posts] = allResponse
  //   this.users = users,
  //   this.posts = posts
  //   return allResponse
  // }

  async init() {
    const allResponse = await Promise.all([response.getUsers(), response.getPosts()]) 
    this.users = allResponse[0],
    this.posts = allResponse[1]
    return {
      users: this.users ,
      posts: this.posts
    }
  }

  // async init() {
  //   Promise.all([response.getUsers(), response.getPosts()]).then(data => {
  //     this.users = data[0]
  //     this.posts = data[1]
  //     return data    // NO RETURN!!!!!!!!
  //   })
  // }
}

