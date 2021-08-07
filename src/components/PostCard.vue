<template>
  <div class="col-8 mt-5 ml-5 bg-grey">
    <div class="row flex-column mt-3">
      <div class="col-md-3 d-flex flex-row">
        <img class="rounded" :src="posts.creator.picture" height="100" alt="Profile Picture">
        <div class="col-md-9">
          <div class="row flex-column justify-content-between">
            <div class="col">
              {{ posts.creator.name }}
            </div>
            <div class="col-6">
              NOW
            </div>
          </div>
        </div>
      </div>
      <div v-if="posts.imgURL">
        <div class="col-md-3">
          {{ posts.body }}
        </div>
        <div class="col-md-4">
          <img :src="posts.imgURL" alt="Blog Image">
        </div>
      </div>
      <div else>
        <div class="col-md-6 pt-3">
          <h5>{{ posts.body }}</h5>
        </div>
      </div>
      <div class="col-md-12 d-flex justify-content-end mb-2">
        <button>Like</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Object,
      required: true
    }
  }
}
</script>
