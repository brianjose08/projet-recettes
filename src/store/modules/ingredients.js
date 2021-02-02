import axios from 'axios';

const getters = {
  allIngredients: (state) => state.recettes,
};

const actions = {
  async fetchIngredients({ commit }) {
    const response = await axios.get(
      'http://localhost:3000/ingredients',
    );
    commit('setIngredients', response.data);
  },
};

const mutations = {
  setIngredients: (state, ingredients) => { (state.ingredients = ingredients); },
};

const state = {
  ingredients: [],
};

export default {
  state,
  getters,
  actions,
  mutations,
};
