<template>
  <header>
    <Navbar />
  </header>
  <main>
    <div class="row vw-100">
      <div class="col-md-3 bg-dark text-center d-flex flex-column justify-content-around">
        <SideBanner :promotions="promotions" :account="account" />
      </div>
      <div class="col-md-9">
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
import { logger } from './utils/Logger'
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
      promotions: computed(() => AppState.promotional),
      account: computed(() => AppState.account)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

</style>
