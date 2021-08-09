<template>
  <div>
    <router-link :to="{name: 'Profile', params: account.id}">
      <img class="rounded-circle action" :src="account.picture" alt="Profile Picture" @click="updateProfile">
    </router-link>
    <p>{{ account.class }}</p>
    <h3>{{ account.name }}</h3>
    <p class="pt-3">
      {{ account.github }}
    </p>
    <p class="pt-2">
      {{ account.linkedin }}
    </p>
    <p class="pt-2">
      📄 {{ account.resume }}
    </p>
  </div>
</template>

<script>
import { profileService } from '../services/ProfileService'
import Pop from '../utils/Notifier'
export default {
  props: {
    account: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      async updateProfile() {
        try {
          await profileService.getProfileById(props.account.id)
          await profileService.getPostsByProfile(props.account.id)
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.action {
  cursor: pointer;
}
</style>
