<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <h1 class="my-5 bg-dark text-light p-3 rounded d-flex align-items-center">
      <span class="mx-2 text-white">ITS A POST</span>
    </h1>
  </div>
</template>

<script>
import { profileService } from '../services/ProfileService'
export default {
  name: 'Home',
  setup() {
    profileService.getPostsByProfile('60bf98cd59b893352f3128a4')
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
