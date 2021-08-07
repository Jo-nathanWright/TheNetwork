import { AppState } from '../AppState.js'
// import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class PromotionalService {
  async getAllPromotions() {
    const res = await api.get('/api/ads')
    // logger.log(res.data)
    AppState.promotional = res.data
  }
}

export const promotionalService = new PromotionalService()
