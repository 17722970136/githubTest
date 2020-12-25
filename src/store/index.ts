import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stateNumber:'我是vuex的state数据一'
  },
  mutations: {
    mutationTest(state,obj){
      console.log(state.stateNumber)
      obj(state.stateNumber)
    }
  },
  actions: {
  },
  modules: {
  }
})
