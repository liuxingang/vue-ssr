import Vuex from 'vuex'
import defaultState from './state/state'
import mutations from './mutation/mutations'
import getters from './getters/getters'
import actions from './actions/actions'

export default () => {
  const store = new Vuex.Store({
    state: defaultState,
    getters,
    mutations,
    actions
  })

  if (module.hot) {
    module.hot.accept([
      './state/state',
      './mutation/mutations',
      './actions/actions',
      './getters/getters'
    ], () => {
      const newState = require('./state/state').default
      const newMutations = require('./mutation/mutations').default
      const newActions = require('./actions/actions').default
      const newGetters = require('./getters/getters').default
      store.hotUpdate({
        state: newState,
        mutations: newMutations,
        actions: newActions,
        getters: newGetters
      })
    })
  }

  return store
}
