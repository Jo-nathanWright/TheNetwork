<template>
  <div class="row justify-content-center">
    <div class="col-md-11 mt-3 bg-white">
      <div class="row py-3">
        <div class="col-md-2">
          <img class="rounded" :src="profile.picture" alt="Profile Image" width="150">
        </div>
        <div class="col-md-1 offset-md-7">
          <a :href="profile.github">🐱</a>
        </div>
        <div class="col-md-1">
          <a :href="profile.linkedin"><b>In</b></a>
        </div>
        <div class="col-md-1">
          <a :href="profile.resume">📄</a>
        </div>
      </div>
      <div class="col-md-4">
        <h6>{{ profile.class }} Your Class</h6>
        <h5>{{ profile.name }}</h5>
        <p class="col-md-11 pt-3">
          {{ profile.bio }}
        </p>
      </div>
    </div>
  </div>
  <div>
    <PostCard :post="post" />
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { profileService } from '../services/ProfileService'
import PostCard from '../components/PostCard.vue'
import { logger } from '../utils/Logger'
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      profile: computed(() => AppState.singleProfile),
      post: computed(() => AppState.getPostsByProfile),
      async getPosts() {
        try {
          await profileService.getPostsByProfile(props.user.id)
          logger.log(AppState.singleProfile)
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  },
  components: {
    PostCard
  }
}
</script>
