import axios from 'axios';

const getters = {
  allFavoritesRecettes: (state) => state.listFavoritesRecettes,
};

const actions = {
  async fetchFavoritesRecettes({ commit }, idUtilisateur) {
    const response = await axios.get(
      `http://localhost:3000/utilisateurs/${idUtilisateur}`,
    );
    commit('setFavoritesRecettes', response.data.recettes);
  },
  async addFavoriteRecette({ commit }, { idUtilisateur, idRecette }) {
    const response = await axios.post(
      `http://localhost:3000/utilisateurs/${idUtilisateur}/`, idRecette,
    );
    commit('newFavoriteRecette', response.data.recettes, idRecette);
  },
  async deleteFavoriteRecette({ commit }, { idUtilisateur, favoriteRecetteId }) {
    await axios.delete(
      `http://localhost:3000/utilisateurs/${idUtilisateur}/recettes/${favoriteRecetteId}`,
    );
    commit('removeFavoriteRecette', favoriteRecetteId);
  },
};

const mutations = {
  // eslint-disable-next-line max-len
  setFavoritesRecettes: (state, favoritesRecettes) => { (state.listFavoritesRecettes = favoritesRecettes); },
  // eslint-disable-next-line max-len
  newFavoriteRecette: (state, userList, idFavoriteRecette) => state.listFavoritesRecettes.unshift(idFavoriteRecette),
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
