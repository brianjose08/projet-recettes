const getters = {
  allIngredientsTemporaire: (state) => state.ingredientsTemp,
};

const actions = {
  fetchIngredientsTemporaire({ commit }) {
    commit('setIngredients', []);
  },
  addIngredientTemporaire({ commit }, data) {
    commit('newRecette', data);
  },
};

const mutations = {
  setIngredients: (state, ingredientsTemp) => { (state.ingredientsTemp = ingredientsTemp); },
  newRecette: (state, ingredientsTemp) => state.ingredientsTemp.unshift(ingredientsTemp),
};

const state = {
  ingredientsTemp: [],
};

export default {
  state,
  getters,
  actions,
  mutations,
};
