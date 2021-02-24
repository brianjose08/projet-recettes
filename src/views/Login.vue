<template>
  <form class="loginPage" @submit.prevent="login">
    <h1>Login</h1>
    <div class="titleInformation">Username</div>
    <input class="loginInformation" required v-model="username"
    type="text" placeholder="Enter your username" />
    <br />
    <br />
    <div class="titleInformation">Password</div>
    <input class="loginInformation" required v-model="password"
    type="password" placeholder="Enter your password" />
    <br />
    <br />
    <button type="submit">
      Sign in
    </button>
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
    // Method to Log in
    login() {
      const data = {
        username: this.username,
        password: this.password,
      };
      this.$store.dispatch('login', data)
        .then(() => this.$router.push('/'))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style lang="scss" scoped>
form  {
  color: white;
}

// Login Page
.loginPage {
  font-size: 200%;
  padding-top: 180px;
  padding-bottom: 101px;
}

// Title Info (Username, Password)
.titleInformation {
  padding-right: 13%;
}

// Login Info
.loginInformation {
  font-size: 100%;
}

button {
  font-size: 100%;
  font-family: "Architects Daughter", cursive;
}
</style>
