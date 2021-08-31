import Vue from 'vue'
import 'keen-ui/src/bootstrap'

const keen_components = {
    'UiButton':   () => import('keen-ui/src/UiButton.vue'),
    'UiTextbox': () => import('keen-ui/src/UiTextbox.vue'),
  }
  Object.entries(keen_components).forEach(([name, component]) => Vue.component(name, component))