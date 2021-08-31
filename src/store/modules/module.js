import Vue from 'vue'
import { STATE } from '@/misc/enums'

const initial_state = () => ({
    state: STATE.INIT
})

const state = initial_state()

const actions = {
}
const mutations = {
    RESET_STATE(state) {
        const s = initial_state()
        for (const key in s) {
            Vue.set(state, key, s[key])
        }
    },
}
const getters = {
}

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true,
}
