<template>
  <div class="row">
    <PostsThread :posts="posts" />
  </div>
  <div class="col-md-11 m-5 d-flex justify-content-around">
    <button class="btn btn-light">
      ‹ Newer
    </button>
    <button class="btn btn-light">
      Older ›
    </button>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { postsService } from '../services/PostService'
import { AppState } from '../AppState.js'
import Pop from '../utils/Notifier'
export default {
  name: 'Home',
  setup() {
    onMounted(async() => {
      try {
        await postsService.getAllPosts()
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      posts: computed(() => AppState.post)
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
