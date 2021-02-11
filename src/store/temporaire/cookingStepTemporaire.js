const getters = {
  allCookingStepTemporaire: (state) => state.cookingStepTemp,
};

const actions = {
  fetchCookingStepTemporaire({ commit }) {
    commit('setCookingStepTemp', []);
  },
  addCookingStepTemporaire({ commit }, data) {
    commit('newCookingStepTemp', data);
  },
  deleteCookingStepTemporaire({ commit }, numberCookingStep) {
    commit('removeCookingStepTemp', numberCookingStep);
  },
};

const mutations = {
  setCookingStepTemp: (state, cookingSteps) => { (state.cookingStepTemp = cookingSteps); },
  newCookingStepTemp: (state, cookingStep) => state.cookingStepTemp.unshift(cookingStep),
  removeCookingStepTemp: (state, numberCookingStep) => {
    (state.cookingStepTemp = state.cookingStepTemp
      .filter((cookingStep) => cookingStep.numberStep !== numberCookingStep));
  },
};

const state = {
  cookingStepTemp: [],
};

export default {
  state,
  getters,
  actions,
  mutations,
};
