<template>
  <div>
    <div class="loginPage">
      <div id="titleInformation">Username</div>
      <input id="loginInformation" type="text"/>
      <br/>
      <br/>
      <div id="titleInformation">Password</div>
      <input id="loginInformation" type="text"/>
      <br/>
      <br/>
      <button>Login</button>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '../components/Footer.vue';

export default {
  name: 'Login',
  components: {
    Footer,
  },
};
</script>
<style lang="scss" scoped>
.loginPage {
  font-size: 200%;
  font-family: "Architects Daughter", cursive;
  padding-top: 100px;
  padding-bottom: 20rem;
}
#loginInformation {
  font-size: 100%;
}

#titleInformation {
  padding-right: 13%;
}

button {
  font-size: 100%;
  font-family: "Architects Daughter", cursive;
}
</style>
