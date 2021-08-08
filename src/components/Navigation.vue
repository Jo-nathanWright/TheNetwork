<template>
  <div v-if="pagepost.newer !== null">
    <button class="btn btn-light" @click="decrease">
      ‹ Newer
    </button>
  </div>
  <div v-if="pagepost.older !== null">
    <button class="btn btn-light" @click="increase">
      Older ›
    </button>
  </div>
</template>

<script>
import { postsService } from '../services/PostService'
import { logger } from '../utils/Logger'
import Pop from '../utils/Notifier'
let i = 1
export default {
  props: {
    pagepost: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
      async increase() {
        i++
        await postsService.getByPage(i)
      },
      async decrease() {
        i--
        await postsService.getByPage(i)
        logger.log(i)
      }
    }
  }
}
</script>
