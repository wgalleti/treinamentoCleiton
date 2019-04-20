import Vue from 'vue'
import Vuex from 'vuex'
import http from './plugins/axios'

Vue.use(Vuex)

const reloadCliente = context => {
  context.dispatch('getClientes')
}
const reloadCleiton = context => {
  context.dispatch('getCleitons')
}

export default new Vuex.Store({
  state: {
    clientes: [],
    cleitons: []
  },
  mutations: {
    PARSE_CLIENTE (state, clientes) {
      state.clientes = clientes
    },
    PARSE_CLEITON (state, payload) {
      state.cleitons = payload
    },
  },
  actions: {
    getClientes: context => {
      return http.get('/core/clients/').then(
        res => {
          context.commit('PARSE_CLIENTE', res.data)
        }
      )
    },
    saveCliente: (context, cliente) => {
      if (cliente.id === 0) {
        return http.post('/core/clients/', cliente)
          .then(() => reloadCliente(context))
      }
      return http.patch(`/core/clients/${cliente.id}/`, cliente)
        .then(() => reloadCliente(context))
    },
    removeCliente: (context, { id }) => {
      return http.delete(`/core/clients/${id}/`)
        .then(() => reloadCliente(context))
    },

    getCleitons: context => {
      return http.get('/core/cleitons/').then(
        res => {
          context.commit('PARSE_CLEITON', res.data)
        }
      )
    },
    saveCleiton: (context, cliente) => {
      if (cliente.id === 0) {
        return http.post('/core/cleitons/', cliente)
          .then(() => reloadCleiton(context))
      }
      return http.patch(`/core/cleitons/${cliente.id}/`, cliente)
        .then(() => reloadCleiton(context))
    },
    removeCleiton: (context, { id }) => {
      return http.delete(`/core/cleitons/${id}/`)
        .then(() => reloadCleiton(context))
    }
  },
  getters: {}
})
