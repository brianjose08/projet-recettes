<template>
            <nav>
               <div class="menu">
                  <ul>
                  <li>
                        <a>
                           <router-link to="/">Home</router-link>
                        </a>
                  </li>
                  <li>
                        <a>
                           <router-link to="/recipes">Recipes</router-link>
                        </a>
                  </li>
                  <li>
                        <a>
                           <router-link to="/personalspace">Personal Space</router-link>
                        </a>
                  </li>
                  <li>
                        <a>
                           <router-link to="/signup">Sign up</router-link>
                        </a>
                  </li>
                  <li>
                        <a>
                           <router-link to="/login">Login</router-link>
                        </a>
                  </li>

                  </ul>
               </div>
            </nav>

</template>

<script>

export default {
  name: 'navbar',
};
</script>

<style lang="scss" scoped>
nav {
      position: fixed;
      width: 100%;
      line-height: 50px;
      z-index: 1;
}

nav ul {
      line-height: 50px;
      background: #1f1e1ef5;
      color: #fff;
      padding: 0;
      text-align: left;
      margin: 0;
      transition: 1s;
}

nav ul li {
      display: inline-block;
      padding: 10px 20px;
      margin-right: 15px;

}

nav ul li a {
      text-decoration: none;
      color: rgb(255, 255, 255);
      font-size: 22px;
      font-weight: 900;
      -webkit-transition: all 0.2s linear;
      -o-transition: all 0.2s linear;
      transition: all 0.2s linear;
      border-style: solid;
      border-color: white;
      border-top: black;
      border-left: black;

}

nav ul li a:hover {
      color: rgb(241, 177, 0);
      border-color: rgb(241, 177, 0);
}
</style>
