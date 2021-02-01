<template>
  <div class="home">
    <Navbar />
    <div class="gridview">
      <div class="generalInfo">
        <h1>What To Eat?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ac tempor orci. Aenean libero sem, egestas eget malesuada ut, pretium
          ac quam. Nunc in nulla urna. Cras id sollicitudin ligula. Donec turpis
          ligula, vehicula ornare aliquet sit amet, mollis sed risus. Cras vitae
          tristique nisl. Praesent in ex nec turpis pellentesque blandit a et
          est.
        </p>
      </div>
      <div class="about">
        <h1>About Us</h1>
        <p>
          Étudiant en fin de session, <br/>
          Par: Brian-José Meija-Rivera <br/>
          @e1746533 <br/>
          Par: Franco Huynh <br/>
          @e1794013 <br/>
          <br/>
          @Collège de Maisonneuve <br/>
        </p>
      </div>
      <div class="slidder">
        <img src="./../assets/CookingPicture.jpg">
        <p>
          Enjoy your cooking !
        </p>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';
// @ is an alias to /src
import Navbar from '../components/Navbar.vue';

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

.gridview {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-gap: 1em;
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 1em;
  justify-content: stretch;
  align-content: stretch;
  padding: 5%;
}

.gridview > div {
  background: #eee;
}

.gridview > div:nth-child(odd) {
  background: #ddd;
}

.generalInfo {
  grid-column: 1/3;
  grid-row: 1/3;
  padding: 10%;
}
.generalInfo > h1 {
  color: black;
  font-size: 800%;
  text-align: center;
  font-family: 'Architects Daughter', cursive;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgba(0, 0, 0, 0.856);
}

.generalInfo > p {
  font-size: 240%;
}

.about > h1{
  color: black;
  font-size: 400%;
  font-family: "Architects Daughter", cursive;
  padding-left: 7.5%;
}

.about > p {
  font-size: 180%;
}

.slidder > p {
  font-size: 240%;
}

p {
  text-decoration: none;
  font-weight: 500;
  font-family: "Architects Daughter", cursive;
}
</style>
