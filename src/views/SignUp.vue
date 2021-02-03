<template>
<div>
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
        <div id="titleInformation">Email</div>
        <input id="loginInformation" type="text"/>
        <br/>
        <br/>
        <button>Login</button>
      </div>
  </div>
  <Footer/>
</div>
</template>

<script>
// @ is an alias to /src
import Footer from '../components/Footer.vue';

export default {
  name: 'SignUp',
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
  padding-bottom: 20px;
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
