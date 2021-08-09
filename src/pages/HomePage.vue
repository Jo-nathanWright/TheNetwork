<template>
  <div class="d-flex justify-content-end pt-1">
    <PostSearch />
  </div>
  <div v-if="account.id !== post.creatorId">
    <PostForm />
  </div>
  <div class="row">
    <PostsThread :post="post" />
  </div>
  <div class="col-md-11 m-5 d-flex justify-content-around">
    <Navigation :pagepost="pagepost" />
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { postsService } from '../services/PostService'
import { AppState } from '../AppState.js'
import Pop from '../utils/Notifier'
import PostForm from '../components/PostForm.vue'
export default {
  name: 'Home',
  setup() {
    onMounted(async() => {
      try {
        await postsService.getAllPosts()
        await postsService.getPostByPage()
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      account: computed(() => AppState.account),
      post: computed(() => AppState.post),
      pagepost: computed(() => AppState.postByPage)
    }
  },
  components: {
    PostForm
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
