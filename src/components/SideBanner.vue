<template>
  <div>
    <SideProfile :account="account" />
    <Promotion v-for="p in promotions" :key="p.id" :promotions="p" />
  </div>
</template>

<script>
export default {
  props: {
    promotions: {
      type: Object,
      required: true
    },
    account: {
      type: Object,
      required: true
    }
  }
}
</script>
