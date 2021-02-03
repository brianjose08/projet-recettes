<template>
  <div class="loginPage">
    <div id="titleInformation">Username</div>
    <input id="loginInformation" type="text" />
    <br />
    <br />
    <div id="titleInformation">Password</div>
    <input id="loginInformation" type="text" />
    <br />
    <br />
    <button>Login</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Login',
  components: {},
};
</script>
<style lang="scss" scoped>
div  {
  color: white;
}

.loginPage {
  font-size: 200%;
  padding-top: 260px;
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
