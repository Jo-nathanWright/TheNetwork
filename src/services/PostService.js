import { AppState } from '../AppState.js'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class PostsService {
  async getAllPosts() {
    const res = await api.get('/api/posts')
    // logger.log('This is the full data object: ', res.data)
    // logger.log('This should be the posts: ', res.data.posts)
    AppState.post = res.data.posts
  }

  async getPostByPage() {
    const res = await api.get('/api/posts')
    AppState.postByPage = res.data
  }

  async getByPage(page) {
    const res = await api.get(`api/posts?page=${page}`)
    // logger.log(res.data.posts)
    AppState.post = res.data.posts
    AppState.postByPage = res.data
  }

  async getBySearch(query) {
    const res = await api.get(`api/posts?query=${query}`)
    logger.log(res.data.posts)
    AppState.post = res.data.posts
  }

  async createPost(body) {
    const res = await api.post('api/posts', body)
    // logger.log(res.data.id)
    AppState.post.push(res.data)
    return res.data.id
  }

  async destroyPost(id) {
    await api.delete(`api/posts/${id}`)
    AppState.post = AppState.post.filter(p => p.id !== id)
  }

  async editLikes(user, postId) {
    const foundPost = AppState.post.find(p => p.id === postId)
    const foundPostId = foundPost.likeIds.indexOf(user)
    if (foundPostId === -1) {
      foundPost.likeIds.push(user)
      await api.put(`api/posts/${postId}`, foundPost)
    } else {
      foundPost.likeIds.pop(user)
      await api.put(`api/posts/${postId}`, foundPost)
    }
  }
}

export const postsService = new PostsService()
