<template>
  <form class="loginPage" @submit.prevent="login">
    <h1>Login</h1>
    <div id="titleInformation">Username</div>
    <input id="loginInformation" required v-model="username"
    type="text" placeholder="Enter your username" />
    <br />
    <br />
    <div id="titleInformation">Password</div>
    <input id="loginInformation" required v-model="password"
    type="password" placeholder="Enter your password" />
    <br />
    <br />
    <button type="submit">Sign in</button>
  </form>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      const data = {
        username: this.username,
        password: this.password,
      };
      this.$store.dispatch('login', data)
        .then(() => window.location.reload())
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style lang="scss" scoped>
form  {
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
