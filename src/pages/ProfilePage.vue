<template>
  <div class="profile">
    <PersonalProfile :user="user" :account="account" />
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import PersonalProfile from '../components/PersonalProfile.vue'
import { AppState } from '../AppState'
export default {
  name: 'Profile',
  setup() {
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
