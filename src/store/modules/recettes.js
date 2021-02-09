import axios from 'axios';

const getters = {
  allRecettes: (state) => state.recettes,
};

const actions = {
  async fetchRecettes({ commit }) {
    const response = await axios.get(
      'http://localhost:3000/recettes',
    );
    commit('setRecettes', response.data);
  },
  async addRecette({ commit }, recette) {
    const response = await axios.post('http://localhost:3000/recettes', recette);

    commit('newRecette', response.data);
    console.log('newRecette', response.data);
  },
};

const mutations = {
  setRecettes: (state, recettes) => { (state.recettes = recettes); },
  newRecette: (state, recette) => state.recettes.unshift(recette),
};

const state = {
  recettes: [],
};

export default {
  state,
  getters,
  actions,
  mutations,
};
