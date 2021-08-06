<template>
  <div v-for="p in promotions" :key="p.id">
    <Promotion :promotions="p" />
  </div>
</template>

<script>
export default {
  props: {
    promotions: {
      type: Object,
      required: true
    }
  }
}
</script>
