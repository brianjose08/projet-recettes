import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import store from '../store/index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/recipes',
    name: 'Recipes',
    component: () => import('../views/Recipes.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/personalspace',
    name: 'PersonalSpace',
    component: () => import('../views/PersonalSpace.vue'),
    meta: {
      requiresAuth: true,
    },
  },

  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('../views/SignUp.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/add',
    name: 'Ajouter',
    component: () => import('../views/Add.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/modify',
    name: 'Modify',
    props: (route) => ({ id: Number(route.params.id) }),
    component: () => import('../views/Modify.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: () => import('../views/Favorites.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: () => import('../views/Calendar.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/newrecipes',
    name: 'NewRecipes',
    component: () => import('../views/newRecipes.vue'),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next('/login');
  } else {
    next();
  }
});

export default router;
