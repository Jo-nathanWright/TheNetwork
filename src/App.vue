<template>
  <header>
    <Navbar />
  </header>
  <main>
    <div class="row vw-100">
      <div class="col-md-2 bg-light">
        <p class="text-center">
          This is for the account info
        </p>
      </div>
      <div class="col-md-10">
        <router-view />
      </div>
    </div>
  </main>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

</style>
