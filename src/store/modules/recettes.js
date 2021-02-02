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
};

const mutations = {
  setRecettes: (state, recettes) => { (state.recettes = recettes); },
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
