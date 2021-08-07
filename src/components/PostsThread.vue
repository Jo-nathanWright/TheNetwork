<template>
  <div class="row justify-content-center">
    <PostCard v-for="p in posts" :key="p.id" :posts="p" />
  </div>
</template>

<script>
export default {
  name: 'Posts',
  props: {
    posts: {
      type: Object,
      required: true
    }
  }
}
</script>
