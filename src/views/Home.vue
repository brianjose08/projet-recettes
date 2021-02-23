<template>
  <div class="home">
    <div class="gridview">
      <div class="generalInfoGrid">
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
      <div class="aboutUsGrid">
        <h1>About Us</h1>
        <p>
          Étudiant en fin de session, <br />
          Par: Brian-José Meija-Rivera <br />
          @e1746533 <br />
          Par: Franco Huynh <br />
          @e1794013 <br />
          <br />
          @Collège de Maisonneuve <br />
        </p>
      </div>
      <div class="slidderGrid">
        <img src="./../assets/CookingPicture.jpg" />
        <p>Enjoy your cooking !</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {},
};
</script>

<style lang="scss" scoped>

// GridView
.gridview {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-gap: 1em;
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 1em;
  justify-content: stretch;
  align-content: stretch;
  padding: 5%;
  div {
  background: #eee;
  }
  div:nth-child(odd) {
  background: #ddd;
  }
}

// Left Block
.generalInfoGrid {
  grid-column: 1/3;
  grid-row: 1/3;
  padding: 10%;
  h1 {
  color: black;
  font-size: 800%;
  text-align: center;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgba(0, 0, 0, 0.856);
  }
  p {
  font-size: 240%;
  }
}

// Top-Right Block
.aboutUsGrid {
  h1 {
  color: black;
  font-size: 400%;
  padding-left: 7.5%;
  }
  p {
  font-size: 180%;
  }
}

// Bottom-Right Block
.slidderGrid {
  p {
  font-size: 240%;
  }
}

p {
  text-decoration: none;
  font-weight: 500;
}
</style>
