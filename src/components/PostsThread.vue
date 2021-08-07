<template>
  <div class="row justify-content-center">
    <PostCard v-for="p in post" :key="p.id" :post="p" />
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>
