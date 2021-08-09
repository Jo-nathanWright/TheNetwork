<template>
  <div>
    <router-link :to="{name: 'Profile'}">
      <img class="rounded-circle action" :src="account.picture" alt="Profile Picture">
    </router-link>
    <p>{{ account.class }}</p>
    <h3>{{ account.name }}</h3>
    <p class="pt-3">
      {{ account.github }}
    </p>
    <p class="pt-2">
      {{ account.linkedin }}
    </p>
    <p class="pt-2">
      📄 {{ account.resume }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    account: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  }
}
</script>

<style scoped lang="scss">
.action {
  cursor: pointer;
}
</style>
