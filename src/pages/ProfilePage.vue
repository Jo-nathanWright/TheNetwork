<template>
  <div class="profile">
    <PersonalProfile :user="user" :account="account" />
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { computed, onMounted } from '@vue/runtime-core'
import PersonalProfile from '../components/PersonalProfile.vue'
import { AppState } from '../AppState'
import { profileService } from '../services/ProfileService'
import { logger } from '../utils/Logger'
export default {
  name: 'Profile',
  setup() {
    const route = useRoute()
    onMounted(async() => {
      try {
        await profileService.getProfileById(route.params.id)
      } catch (error) {
        logger.log(error, 'error')
      }
    })
    return {
      user: computed(() => AppState.singleProfile),
      account: computed(() => AppState.account)
    }
  },
  components: {
    PersonalProfile
  }
}
</script>
