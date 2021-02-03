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
};
</script>
<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding:0;
  margin:0;
  position: relative;
  min-height: 100vh;
  background-image: url(https://images5.alphacoders.com/904/904774.jpg);
  background-size: cover;
  padding-bottom: 15rem;
  font-family: "Architects Daughter", cursive;
}

</style>
