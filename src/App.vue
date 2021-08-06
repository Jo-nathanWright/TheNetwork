<template>
  <header>
    <Navbar />
  </header>
  <main>
    <div class="row vw-100">
      <div class="col-md-2 bg-dark text-center">
        <SideBanner :promotions="promotions" />
      </div>
      <div class="col-md-10">
        <router-view />
      </div>
    </div>
  </main>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from './AppState'
import Pop from './utils/Notifier'
import { promotionalService } from './services/PromotionalService'
export default {
  name: 'App',
  setup() {
    onMounted(async() => {
      try {
        await promotionalService.getAllPromotions()
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      appState: computed(() => AppState),
      promotions: computed(() => AppState.promotional)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

</style>
