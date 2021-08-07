<template>
  <div class="row">
    <PostsThread :posts="posts" />
  </div>
  <div class="col-md-11 m-5 d-flex justify-content-around">
    <button class="btn btn-light" @click="decrease">
      ‹ Newer
    </button>
    <button class="btn btn-light" @click="increase">
      Older ›
    </button>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { postsService } from '../services/PostService'
import { AppState } from '../AppState.js'
import Pop from '../utils/Notifier'
import { logger } from '../utils/Logger'
let i = 1
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
      posts: computed(() => AppState.post),
      async increase() {
        logger.log('I increased')
        i++
        await postsService.getByPage(i)
      },
      async decrease() {
        if (i === 1) {
          Pop.toast('There isn\'t any newer pages')
        } else {
          i--
          await postsService.getByPage(i)
        }
        logger.log(i)
      }
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
