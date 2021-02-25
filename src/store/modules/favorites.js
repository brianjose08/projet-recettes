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
      `http://localhost:3000/utilisateurs/${idUtilisateur}`,
    );
    commit('removeFavoriteRecette', favoriteRecetteId);
  },
  async updateFavorisRecette(updUtilisateur) {
    await axios.put(`http://localhost:3000/utilisateurs/${updUtilisateur.id}`, updUtilisateur);
    // commit('updUtilisateur', response.data);
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
  /*
  updUtilisateur: (state, updUtilisateur) => {
    state.listFavoritesRecettes.findIndex((utilisateur) => utilisateur.id === updUtilisateur.id);
  },
  */
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
