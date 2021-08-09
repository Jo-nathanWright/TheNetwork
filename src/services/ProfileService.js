import { AppState } from '../AppState.js'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class ProfileService {
  async getProfileBySearch(query) {
    const res = await api.get(`/api/profiles?query=${query}`)
    // logger.log(res.data)
    AppState.profile = res.data
  }

  async getProfileById(id) {
    const res = await api.get(`/api/profiles/${id}`)
    logger.log(res.data)
    AppState.singleProfile = res.data
  }

  async getPostsByProfile(id) {
    this.getProfileById(id)
    const res = await api.get(`/api/profiles/${id}/posts`)
    // logger.log(res.data.posts)
    AppState.singlePost = res.data
  }
}

export const profileService = new ProfileService()
