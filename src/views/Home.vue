<template>
  <div class="home">

      <Navbar/>
      <div class="contenu">
      <div class="titre">
                <h1>What To Eat?</h1>
      </div>
      <div class="description">
        <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac tempor orci.
Aenean libero sem, egestas eget malesuada ut, pretium ac quam. Nunc in nulla urna.
Cras id sollicitudin ligula. Donec turpis ligula, vehicula ornare aliquet sit amet,
mollis sed risus.
Cras vitae tristique nisl. Praesent in ex nec turpis pellentesque blandit a et est.</p>
        <p>
Ut molestie diam in mauris aliquam, id mollis justo efficitur. Etiam nec augue tristique, rutrum
lorem
nec,
 tristique orci.
Pellentesque egestas a tellus quis tempor. Morbi varius nibh tortor, sit amet malesuada arcu mattis
vel
 Integer nec tortor eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 Etiam leo diam, viverra id iaculis nec, lobortis a nisl. Nullam et est vel eros vehicula consequat.
 Etiam augue leo, pellentesque ultricies malesuada ultricies, molestie vitae justo.
 Sed nec quam quis urna tempor interdum a at tortor. Duis libero massa, dictum a lacinia id,
 porttitor sed augue.</p>
      </div>
      </div>
      <Footer/>

  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.home {
    width: 100%;
    height: 130vh;
    background-image: url(https://images5.alphacoders.com/904/904774.jpg);
    background-size: cover;
}
.contenu{
  margin: auto;
  width: 50%;
  padding: 10px;
}
.titre{
    background-color: black;
      text-decoration: none;
      color: rgb(255, 255, 255);
      font-size: 60px;
      font-weight: 900;
      font-style: italic;
      text-align: center;
      opacity: 0.8;
}
.description{
    background-color: black;
      text-decoration: none;
      color: rgb(255, 255, 255);
      font-size: 35px;
      font-weight: 500;
      text-align: left;
      opacity: 0.8;
      padding: 1px;
}
</style>
