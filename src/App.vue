<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    Navbar,
    Footer,
  },
  created() {
    // eslint-disable-next-line
    this.$http.interceptors.response.use(undefined, (err) => new Promise(function () {
      if (err.status === 401 && err.config && !err.config.isRetryRequest) {
        this.$store.dispatch('logout');
      }
      throw err;
    }));
  },
};
</script>
<style lang="scss">
#app {
  text-align: center;
  min-height: 100vh;
  background-image: url(https://images5.alphacoders.com/904/904774.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  font-family: "Architects Daughter", cursive;
}

</style>
