import {storage} from './storage'

export const methods = {
  selectUser(value) {
    return value
  },
  outputPosts(id) {
    const postfOfUser = storage.posts.filter(post => post.userId === id)
    return postfOfUser
  }
}