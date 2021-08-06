<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <h1 class="my-5 bg-dark text-light p-3 rounded d-flex align-items-center">
      <span class="mx-2 text-white">ITS A POST</span>
    </h1>
  </div>
</template>

<script>
import { postsService } from '../services/PostService'
export default {
  name: 'Home',
  setup() {
    postsService.getAllPosts()
    postsService.getByPage(2)
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
