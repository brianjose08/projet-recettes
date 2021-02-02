import Vue from 'vue';
import Vuex from 'vuex';
import recettes from './modules/recettes';
import ingredients from './modules/ingredients';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    recettes,
    ingredients,
  },
});
