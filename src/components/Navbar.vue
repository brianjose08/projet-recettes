<template>
            <nav>
               <div class="menu">
                  <ul>
                     <li><a href="#">| HOME |</a></li>
                     <li><a href="#">| RECIPES |</a></li>
                     <li><a href="#">| PERSONAL SPACE |</a></li>
                     <li><a href="#" class="signup">| SIGN UP |</a></li>
                     <li><a href="#">| LOGIN |</a></li>
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
      opacity: 0.9;
      z-index: 1;
}

nav ul {
      line-height: 60px;
      list-style: none;
      background-color: black;
      overflow: hidden;
      color: #fff;
      padding: 0;
      text-align: left;
      margin: 0;
      padding-right: 50px;
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
}

.signup {
      padding-left: 763px;
}
</style>
