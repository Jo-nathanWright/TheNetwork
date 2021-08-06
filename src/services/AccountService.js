import { AppState } from '../AppState.js'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class AccountService {
  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = res.data
      logger.log(res.data)
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  async editAccount(rawInfo) {
    try {
      const res = await api.put('/account', rawInfo)
      AppState.account = res.data
    } catch (error) {
      logger.error('WE COULD NOT EDIT THAT ACCOUNT')
    }
  }
}

export const accountService = new AccountService()
