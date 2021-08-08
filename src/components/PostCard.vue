<template>
  <div class="col-8 mt-5 ml-5 bg-grey">
    <div class="row flex-column mt-2">
      <div class="col-12 d-flex justify-content-end" v-if="account.id === post.creatorId">
        <button type="button" class="btn btn-outline-danger" @click="destroy">
          Delete
        </button>
      </div>
      <div class="col-md-3 d-flex flex-row ml-4 align-items-center">
        <img class="rounded" :src="post.creator.picture" height="100" alt="Profile Picture">
        <div class="col-md-9">
          <div class="row flex-column justify-content-between">
            <div class="col">
              {{ post.creator.name }}
            </div>
            <div class="col-6">
              NOW
            </div>
          </div>
        </div>
      </div>
      <div v-if="post.imgUrl">
        <div class="col-md-11 ml-4 py-4">
          <h5>{{ post.body }}</h5>
        </div>
        <div class="col-md-12 text-center pb-3">
          <img :src="post.imgUrl" alt="Blog Image" width="650">
        </div>
      </div>
      <div v-else>
        <div class="col-md-11 ml-4 py-4">
          <h5>{{ post.body }}</h5>
        </div>
      </div>
      <div class="col-md-12 d-flex justify-content-end mb-2">
        <button>Like</button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { postsService } from '../services/PostService'
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      account: computed(() => AppState.account),
      async destroy() {
        try {
          if (await Pop.confirm()) {
            await postsService.destroyPost(props.post.id)
            Pop.toast('That post has been Deleted')
          }
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  }
}
</script>
