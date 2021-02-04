import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import recettes from './modules/recettes';
import ingredients from './modules/ingredients';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {},
  },
  getters: {
    isLoggedIn: (state) => !!state.token,
    authStatus: (state) => state.status,
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading';
    },
    auth_success(state, token, user) {
      state.status = 'success';
      state.token = token;
      state.user = user;
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
            for (let i = 0; i < resp.data.length; i += 1) {
              /* eslint-disable max-len */
              if (resp.data[i].username === user.username && resp.data[i].password === user.password) {
                const token = resp.data;
                const user = resp.data;
                localStorage.setItem('token', token);
                axios.defaults.headers.common.Authorization = token;
                commit('auth_success', token, user);
                resolve(resp);
                i = resp.data.length;
              }
            }
          })
          .catch((err) => {
            commit('auth_error');
            localStorage.removeItem('token');
            reject(err);
          });
      });
    },

    register({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request');
        axios({ url: 'http://localhost:3000/utilisateurs', data: user, method: 'POST' })
          .then((resp) => {
            const { token } = resp.data;
            const { user } = resp.data;
            localStorage.setItem('token', token);
            axios.defaults.headers.common.Authorization = token;
            commit('auth_success', token, user);
            resolve(resp);
          })
          .catch((err) => {
            commit('auth_error', err);
            localStorage.removeItem('token');
            reject(err);
          });
      });
    },

    logout({ commit }) {
      return new Promise((resolve) => {
        commit('logout');
        localStorage.removeItem('token');
        delete axios.defaults.headers.common.Authorization;
        resolve();
      });
    },
  },
  modules: {
    recettes,
    ingredients,
  },
});
