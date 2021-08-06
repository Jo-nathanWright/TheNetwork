<template>
  <img class="rounded" :src="account.picture" alt="Profile Picture">
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
