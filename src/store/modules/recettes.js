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
  async deleteRecette({ commit }, id) {
    await axios.delete(`http://localhost:3000/recettes/${id}`);
    commit('removeRecette', id);
  },
  async updateRecette({ commit }, updRecette) {
    const response = await axios.put(`http://localhost:3000/recettes/${updRecette.id}`, updRecette);
    commit('updRecette', response.data);
  },
};

const mutations = {
  setRecettes: (state, recettes) => { (state.recettes = recettes); },
  newRecette: (state, recette) => state.recettes.unshift(recette),
  removeRecette: (state, id) => {
    (state.recettes = state.recettes.filter((recette) => recette.id !== id));
  },
  updRecette: (state, updRecette) => {
    const index = state.recettes.findIndex((recette) => recette.id === updRecette.id);
    if (index !== -1) {
      state.recette.splice(index, 1, updRecette);
    }
  },
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
