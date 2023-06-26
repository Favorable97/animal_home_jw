import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    CART: []
  },
  getters: {
    CART(state) {
      return state.CART;
    }
  },
  mutations: {
    SET_CART: (state, product) => {
      state.CART.push(product);
    }
  },
  actions: {
    ADD_TO_CART({commit}, product) {
      commit('SET_CART', product);
    }
  },
  modules: {
  }
})
