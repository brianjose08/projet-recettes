<template>
  <nav>
    <div class="menu">
      <div class="menuLeft">
        <a>
          <router-link to="/">Home</router-link>
        </a>
        <a>
          <router-link to="/recipes">Recipes</router-link>
        </a>
        <a>
          <router-link to="/personalspace">Personal Space</router-link>
        </a>
      </div>
      <div class="menuCenter">
        <a>
          <router-link
            id="logo"
            to="/"
            tag="img"
            v-bind:src="require('./../assets/RecipeWebLogo.png')"
            class="navbar-item noHover is-clickable"
          ></router-link>
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
  z-index: 1;
}

.menu a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 5px 16px 0px 16px;
  text-decoration: none;
  font-size: 140%;
  font-family: "Architects Daughter", cursive;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
}
.menu a:hover {
  color: rgb(241, 177, 0);
  border-color: rgb(241, 177, 0);
}
.menu a.active {
  color: white;
}

.menuLeft {
  float: left;
  margin-top: 10px;
}

.menuRight {
  float: right;
  margin-top: 10px;
}

.menuCenter {
  display: inline-block;
  padding-right: 12%;
}

#logo {
  height: 76px;
}
</style>
