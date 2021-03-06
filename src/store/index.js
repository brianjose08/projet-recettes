import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import recettes from './modules/recettes';
import ingredients from './modules/ingredients';
import ingredientsTemporaire from './temporaire/ingredientsTemporaire';
import cookingStepTemporaire from './temporaire/cookingStepTemporaire';
import favorites from './modules/favorites';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    currentUser: null,
  },
  getters: {
    isLoggedIn: (state) => !!state.token,
    authStatus: (state) => state.status,
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading';
    },
    auth_success(state, token) {
      state.status = 'success';
      state.token = token;
    },
    auth_setCurrentUser(state, user) {
      state.currentUser = user;
    },
    auth_error(state) {
      state.status = 'error';
    },
    logout(state) {
      state.status = '';
      state.token = '';
    },
  },
  actions: {
    /* eslint-disable no-shadow */
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request');
        axios({ url: 'http://localhost:3000/utilisateurs', method: 'GET' })
          .then((resp) => {
            let boolErreur = true;
            for (let i = 0; i < resp.data.length; i += 1) {
              /* eslint-disable max-len */
              if (resp.data[i].username === user.username && resp.data[i].password === user.password) {
                const token = resp.data[i];
                localStorage.setItem('token', token);
                localStorage.setItem('userGet', JSON.stringify(resp.data[i]));
                axios.defaults.headers.common.Authorization = token;
                commit('auth_success', token);
                commit('auth_setCurrentUser', resp.data[i].id);
                boolErreur = false;
                resolve(resp);
                i = resp.data.length;
              }
            }
            if (boolErreur) {
              throw new Error('Invalid Username or Password');
            }
          })
          .catch((err) => {
            commit('auth_error');
            localStorage.removeItem('token');
            localStorage.removeItem('userGet');
            localStorage.removeItem('recent-image');
            reject(err);
          });
      });
    },

    register({ commit }, user) {
      return new Promise(() => {
        commit('auth_request');
        axios({ url: 'http://localhost:3000/utilisateurs', data: user, method: 'POST' });
      });
    },

    logout({ commit }) {
      return new Promise((resolve) => {
        commit('logout');
        localStorage.removeItem('token');
        localStorage.removeItem('userGet');
        delete axios.defaults.headers.common.Authorization;
        resolve();
      });
    },

  },
  modules: {
    recettes,
    ingredients,
    ingredientsTemporaire,
    cookingStepTemporaire,
    favorites,
  },
});
