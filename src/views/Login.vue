<template>
  <div>
      <Navbar/>
        <div class="contenu">
            <h1>LOGIN EN CONSTRUCTION</h1>
      </div>
      <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Login',
  components: {
    Navbar,
    Footer,
  },
};
</script>
<style lang="scss" scoped>
.contenu{
  padding-top: 100px;
  padding-bottom: 20px;
}
</style>
