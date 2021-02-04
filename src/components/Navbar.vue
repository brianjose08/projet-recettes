<template>
  <nav>
    <div class="menu">
      <a>
        <router-link to="/">Home</router-link>
      </a>
        <a>
          <router-link to="/recipes">Recipes</router-link>
        </a>
      <a>
        <router-link to="/personalspace">Personal Space</router-link>
      </a>
      <div class="menuCenter">
        <a>
          <router-link id="logo" to="/" tag="img"
            v-bind:src="require('./../assets/RecipeWebLogo.png')"
            class="navbar-item noHover is-clickable"></router-link>
        </a>
      </div>
      <div class="menuRight" v-if="isLoggedIn">
        <a @click="logout">
          <router-link to="/">Logout</router-link>
        </a>
      </div>
      <div class="menuRight" v-else>
        <a>
          <router-link to="/signup">Sign up</router-link>
        </a>
        <a>
          <router-link to="/login">Login</router-link>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('logout').then(() => {
        this.$router.push('/login');
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  overflow: hidden;
  background-color: rgba(51, 51, 51, 0.9);
  position: fixed;
  width: 100%;
  z-index: 1;
  height: 8%;
}

.menu a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 5px 15px;
  text-decoration: none;
  font-size: 140%;
  font-family: "Architects Daughter", cursive;
}
.menu a:hover {
  color: rgb(241, 177, 0);
  border-color: rgb(241, 177, 0);
}
.menu a.active {
  color: white;
}

.menuRight {
  float: right;
}

.menuCenter {
  display: inline-block;
  padding-right: 12%;
}

#logo {
  color: rgb(241, 177, 0);
  height: 70px;
}
</style>
