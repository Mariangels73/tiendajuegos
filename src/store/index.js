// index.js
import { createStore } from 'vuex';
import juegos from "./juegos.json";

export default createStore({
  state: {
    juegos
  },
  getters: {
  },
  mutations: {
    INCREMENTAR_STOCK(state, codigo) {
      const juego = state.juegos.find(j => j.codigo === codigo);
      if (juego) {
        juego.stock++;
      }
    },
    DECREMENTAR_STOCK(state, codigo) {
      const juego = state.juegos.find(j => j.codigo === codigo);
      if (juego && juego.stock > 0) {
        juego.stock--;
      }
    }
  },
  actions: {
    incrementarStock({ commit }, codigo) {
      commit('INCREMENTAR_STOCK', codigo);
    },
    decrementarStock({ commit }, codigo) {
      commit('DECREMENTAR_STOCK', codigo);
    }
  },
  modules: {
  }
});
