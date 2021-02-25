const getters = {
  allFavoritesRecettes: (state) => state.listFavoritesRecettes,
};

const actions = {
  fetchFavoritesRecettes({ commit }, data) {
    commit('setFavoritesRecettes', data);
  },
  addFavoriteRecette({ commit }, data) {
    commit('newFavoriteRecette', data);
  },
  deleteFavoriteRecette({ commit }, favoriteRecetteId) {
    commit('removeFavoriteRecette', favoriteRecetteId);
  },
};

const mutations = {
  setFavoritesRecettes: (state, favoritesRecettes) => 
  { (state.listFavoritesRecettes = favoritesRecettes); },
  newFavoriteRecette: (state, favoriteRecette) => 
  state.listFavoritesRecettes.unshift(favoriteRecette),
  removeFavoriteRecette: (state, favoriteRecetteId) => {
    (state.listFavoritesRecettes = state.listFavoritesRecettes
      .filter((recette) => recette.id !== favoriteRecetteId));
  },
};

const state = {
  listFavoritesRecettes: [],
};

export default {
  state,
  getters,
  actions,
  mutations,
};
