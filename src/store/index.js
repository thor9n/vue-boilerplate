import Vue from 'vue'
import Vuex from 'vuex'

import module from './modules/module.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    modules: {
        module,
    },
});