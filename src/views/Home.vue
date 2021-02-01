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
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ac tempor orci. Aenean libero sem, egestas eget malesuada ut, pretium
          ac quam. Nunc in nulla urna.
          est.
        </p>
      </div>
      <div class="slidder">
        <h1>Slidder</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ac tempor orci. Aenean libero sem, egestas eget malesuada ut, pretium
          ac quam. Nunc in nulla urna.
        </p>
      </div>
    </div>
    <Footer />
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
.generalInfo > p {
  font-size: 240%;
}

.about {

}
.about > p {
  font-size: 140%;
}
.slidder {

}
.slidder > p {
  font-size: 140%;
}

h1 {
  color: rgb(255, 255, 255);
  font-size: 600%;
  font-weight: 1200;
  font-style: italic;
  text-align: center;
  font-family: "Brush Script MT", cursive;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgba(0, 0, 0, 0.856);
}
p {
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-weight: 500;
  text-align: left;
  padding-right: 30px;
  padding-bottom: 30px;
  padding-left: 30px;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgba(0, 0, 0, 0.678);
}
</style>
