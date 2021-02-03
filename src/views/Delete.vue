<template>
  <div>
        <div class="contenu">
            <h1>SUPPRIMER UNE RECETTE EN CONSTRUCTION</h1>
      </div>
      <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '../components/Footer.vue';

export default {
  name: 'Delete',
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
