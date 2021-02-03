<template>
  <div>
        <div class="contenu">
            <h1>AJOUTER UNE RECETTE EN CONSTRUCTION</h1>
      </div>
      <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '../components/Footer.vue';

export default {
  name: 'Add',
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
