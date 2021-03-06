<template>
  <form class="loginPage" @submit.prevent="login">
    <div class="informations">
      <h1>Login</h1>
      <div class="titleInformation">Username</div>
      <input
        class="loginInformation"
        id="username"
        required
        v-model="username"
        type="text"
        placeholder="Enter your username"
      />
      <br />
      <br />
      <div class="titleInformation">Password</div>
      <input
        class="loginInformation"
        id="password"
        required
        v-model="password"
        type="password"
        placeholder="Enter your password"
      />
      <br />
      <br />
      <button type="submit">Sign in</button>
    </div>
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
      this.$store
        .dispatch('login', data)
        .then(() => {
          this.$router.push('/');
        })
        .catch((err) => {
          console.log(err);
          document.getElementById('username').style.backgroundColor = '#fc003b';
          document.getElementById('password').style.backgroundColor = '#fc003b';
        });
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  color: white;
}

// Login Page
.loginPage {
  display: inline-block;
  font-size: 200%;
  padding-top: 86px;

  .informations {
    background-color: rgba(26, 26, 26, 0.952);
    border-radius: 50px;
    width: 500px;
  }
}

// Login Info
.loginInformation {
  font-size: 100%;
}

button {
  font-size: 100%;
  margin-bottom: 10px;
  font-family: "Architects Daughter", cursive;
}
</style>
