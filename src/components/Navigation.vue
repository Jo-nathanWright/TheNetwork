<template>
  <div v-if="pagepost.newer == null">
    <button class="btn btn-dark disabled" @click="decrease">
      ‹ Newer
    </button>
  </div>
  <div v-else>
    <button class="btn btn-light" @click="decrease">
      ‹ Newer
    </button>
  </div>
  <div v-if="pagepost.older == null">
    <button class="btn btn-dark disabled" @click="increase">
      Older ›
    </button>
  </div>
  <div v-else>
    <button class="btn btn-light" @click="increase">
      Older ›
    </button>
  </div>
</template>

<script>
import { postsService } from '../services/PostService'
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
        if (i === 1) {
          Pop.toast('There isn\'t any newer pages')
        } else {
          i--
          await postsService.getByPage(i)
        }
      }
    }
  }
}
</script>
