import Vue from 'vue'
import Vuex from 'vuex'

import { createPersistedState, createSharedMutations } from 'vuex-electron'

/**
 * Import all vuex modules in a one-shot manner. There should not be any reason to edit this file.
 */
const files = require.context('.', false, /\.js$/)
const modules = {}
files.keys().forEach(key => {
    if (key === './index.js') return
    modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})


Vue.use(Vuex)
export default new Vuex.Store({
    modules,
    plugins: [
        createPersistedState(),
        //createSharedMutations()
    ],
    strict: process.env.NODE_ENV == 'production'
})
