<template>
  <div class="home">

      <Navbar/>
      <div class="contenu">
      <div class="titre">
                <h1>What To Eat?</h1>
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
    background-image: url(https://images5.alphacoders.com/904/904774.jpg);
    background-size: cover;
}
.contenu{
  margin: auto;
  width: 60%;
  padding-top: 100px;
  padding-bottom: 20px;
}
.titre{
    background-color: rgba(182, 143, 60, 0.966);
    border-radius: 10%;
    border-style: solid;
    border-color: rgb(0, 0, 0);
}

.titre h1{
      color: rgb(255, 255, 255);
      font-size: 150px;
      font-weight: 1200;
      font-style: italic;
      text-align: center;
      font-family: 'Brush Script MT', cursive;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: rgba(0, 0, 0, 0.856);
}
.titre p{
      text-decoration: none;
      color: rgb(255, 255, 255);
      font-size: 34px;
      font-weight: 500;
      text-align: left;
      padding-right: 30px;
      padding-bottom: 30px;
      padding-left: 30px;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: rgba(0, 0, 0, 0.678);
}
</style>
