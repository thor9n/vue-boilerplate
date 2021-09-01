<template>
  <div id="app">
    <router-view />
    <button class="ui button">Test</button>
  </div>
</template>
<script>
import '@/styles/reset.scss'
import '@/styles/main.scss'
import EventBus from '@/misc/event-bus'

export default {
  components: {
    // SnackBar: () => import('@/components/SnackBar.vue')
  },
  data() {
    return {
    }
  },
  mounted() {
    EventBus.$emit('TRACK_LOAD')
  }
}
</script>
