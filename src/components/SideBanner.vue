<template>
  <div class="mt-5">
    <div v-if="account.id">
      <SideProfile :account="account" />
    </div>
    <div v-else>
      <h1>Please Sign In To Use Veuniversity!</h1>
    </div>
    <div class="mt-5">
      <Promotion v-for="p in promotions" :key="p.id" :promotions="p" />
    </div>
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
