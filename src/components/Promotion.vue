<template>
  <div class="row">
    <div class="col-12 text-white mb-2">
      <p class="pt-2">
        {{ promotions.title }}
      </p>
      <a :href="'https://' + promotions.linkURL">
        <img class="pb-3 pl-3" :src="promotions.square" height="180" alt="Promotional Piece">
      </a>
    </div>
  </div>
</template>

<script>
import {} from '../assets/scss/main.scss'
export default {
  props: {
    promotions: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss">
@import '../assets/scss/main.scss';

</style>
