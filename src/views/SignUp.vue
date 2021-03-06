<template>
  <div>
    <form class="loginPage" @submit.prevent="register">
      <div class="informations">
        <h1>Sign Up</h1>
        <div class="titleInformation">Username</div>
        <input
          class="loginInformation"
          type="text"
          v-model="username"
          required
          autofocus
          placeholder="Enter your username"
        />
        <br />
        <br />
        <div class="titleInformation">Email</div>
        <input
          class="loginInformation"
          type="email"
          v-model="email"
          required
          placeholder="Enter your email"
        />
        <br />
        <br />
        <div class="titleInformation">Password</div>
        <input
          class="loginInformation"
          id="password"
          type="password"
          v-model="password"
          required
          placeholder="Enter your password"
        />
        <br />
        <br />
        <div class="titleInformation">Confirm Password</div>
        <input
          class="loginInformation"
          id="passwordConfirmation"
          type="password"
          v-model="password_confirmation"
          required
          placeholder="Confirm your password"
        />
        <br />
        <br />
        <button>Sign Up</button>
      </div>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'SignUp',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      recettes: [{}],
    };
  },
  methods: {
    // Method to Sign Up
    register() {
      if (this.password === this.password_confirmation) {
        const data = {
          username: this.username,
          email: this.email,
          password: this.password,
          recettes: this.recettes,
        };
        this.$store.dispatch('register', data);
        this.$router.push('/login');
      } else {
        document.getElementById('password').style.backgroundColor = '#fc003b';
        document.getElementById('passwordConfirmation').style.backgroundColor = '#fc003b';
      }
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
  padding-top: 50px;
  padding-bottom: 25px;

  .informations {
    background-color: rgba(26, 26, 26, 0.952);
    border-radius: 50px;
    width: 500px;
  }
}

// Title Info (Username, Password, Email)
.loginInformation {
  font-size: 100%;
}

#emailInfo {
  padding-right: 17%;
}

button {
  font-size: 100%;
  margin-bottom: 10px;
  font-family: "Architects Daughter", cursive;
}
</style>
