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
    logger.log(res.data.posts)
    AppState.post = res.data.posts
    AppState.postByPage = res.data
  }

  async getBySearch(query) {
    const res = await api.get(`api/posts?query=${query}`)
    logger.log(res.data.posts)
    AppState.post = res.data.posts
  }
}

export const postsService = new PostsService()
