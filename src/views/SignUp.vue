<template>
  <div>
    <form class="loginPage" @submit.prevent="register">
          <h1>Sign Up</h1>
      <div id="titleInformation">Username</div>
      <input id="loginInformation" type="text" v-model="username" required autofocus />
      <br />
      <br />
      <div id="emailInfo">Email</div>
      <input id="loginInformation" type="email" v-model="email" required/>
      <br />
      <br />
      <div id="titleInformation">Password</div>
      <input id="loginInformation" type="password" v-model="password" required />
      <br />
      <br />
      <div id="password-confirmation">Confirm Password</div>
      <input id="loginInformation" type="password" v-model="password_confirmation" required />
      <br />
      <br />
      <button>Sign Up</button>
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
    };
  },
  methods: {
    register() {
      const data = {
        username: this.username,
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch('register', data)
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

.loginPage {
  font-size: 200%;
  padding-top: 150px;
}
#loginInformation {
  font-size: 100%;
}

#titleInformation {
  padding-right: 13%;
}
#emailInfo
{
  padding-right: 17%;
}
#password-confirmation{
padding-right: 6%;
}

button {
  font-size: 100%;
  font-family: "Architects Daughter", cursive;
}
</style>
