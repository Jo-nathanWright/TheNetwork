import { AppState } from '../AppState.js'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class PostsService {
  async getAllPosts() {
    const res = await api.get('/api/posts')
    logger.log('This is the full data object: ', res.data)
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

  async editLikes(id, creatorId) {
    const foundPost = AppState.post.find(p => p.id === id)
    const liked = foundPost.likeIds.find(f => f !== id)
    if (liked === undefined) {
      foundPost.likeIds.push(creatorId)
      await api.put(`api/posts/${id}`, foundPost)
    } else if (liked) {
      foundPost.likeIds.splice(creatorId)
      await api.put(`api/posts/${id}`, foundPost)
    }

    // foundPost.likeIds.push(id)
    // await api.put(`api/posts/${id}`, foundPost)
    // foundPost.likeIds.splice(id)
    // await api.put(`api/posts/${id}`, foundPost)
    // AppState.post = AppState.post
  }
}

export const postsService = new PostsService()
