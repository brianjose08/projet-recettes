<template>
  <div>
      <div class="contenu">
          <h1>PERSONAL SPACE EN CONSTRUCTION</h1>
      </div>
      <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '../components/Footer.vue';

export default {
  name: 'PersonalSpace',
  components: {
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
