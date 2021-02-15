const getters = {
  allIngredientsTemporaire: (state) => state.ingredientsTemp,
};

const actions = {
  fetchIngredientsTemporaire({ commit }, data) {
    commit('setIngredientsTemp', data);
  },
  addIngredientTemporaire({ commit }, data) {
    commit('newIngredientTemp', data);
  },
  deleteIngredientTemporaire({ commit }, idIngredient) {
    commit('removeIngredientTemp', idIngredient);
  },
};

const mutations = {
  setIngredientsTemp: (state, ingredient) => { (state.ingredientsTemp = ingredient); },
  newIngredientTemp: (state, ingredient) => state.ingredientsTemp.unshift(ingredient),
  removeIngredientTemp: (state, idIngredient) => {
    // eslint-disable-next-line max-len
    (state.ingredientsTemp = state.ingredientsTemp.filter((ingredient) => ingredient.idIngredient !== idIngredient));
  },
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
