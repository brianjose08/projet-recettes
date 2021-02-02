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
            <router-link to="/" tag="img"
            v-bind:src="require('./../assets/RecipeWebLogo.png')"
            class="navbar-item noHover is-clickable"></router-link>
        </a>
      </div>
      <div class="menuRight">
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
};
</script>

<style lang="scss" scoped>
.menu {
  overflow: hidden;
  background-color: rgba(51, 51, 51, 0.9);
  position: fixed;
  width: 100%;
}

.menu a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
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
  text-align-last: center;
}
</style>
