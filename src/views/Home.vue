<template>
  <div class="home">
    <div class="gridview">
      <ul>
        <li class="generalInfoGrid">
          <h1>What To Eat?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            ac tempor orci. Aenean libero sem, egestas eget malesuada ut,
            pretium ac quam. Nunc in nulla urna. Cras id sollicitudin ligula.
            Donec turpis ligula, vehicula ornare aliquet sit amet, mollis sed
            risus. Cras vitae tristique nisl. Praesent in ex nec turpis
            pellentesque blandit a et est.
          </p>
        </li>
        <li class="aboutUsGrid">
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
        </li>
        <li class="slidderGrid">
          <img src="./../assets/CookingPicture.jpg" />
          <p>Enjoy your cooking !</p>
        </li>
      </ul>
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
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1em;
    padding: 7%;
    margin-block-start: 0;
    margin-block-end: 0;
  }

  li {
    display: grid;
    background: #eee;
  }

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
  padding: 10px 50px;
  h1 {
    color: black;
    font-size: 500%;
    text-align: center;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: rgba(0, 0, 0, 0.856);
    margin-block-start: 0;
    margin-block-end: 0;
  }
  p {
    margin-block: 0;
    font-size: 250%;
  }
}

// Top-Right Block
.aboutUsGrid {
  grid-column: 3;
  grid-row: 1;
  h1 {
    color: black;
    font-size: 400%;
    margin-block-start: 0;
    margin-block-end: 0;
  }
  p {
    font-size: 180%;
  }
}

// Bottom-Right Block
.slidderGrid {
  grid-column: 3;
  grid-row: 2;
  p {
    font-size: 240%;
  }
}

@media screen and (max-width: 1440px) {

.gridview {
  ul {
    grid-template-columns: 1fr 1fr;
    padding-top: 100px;
    grid-gap: 2em;
  }

  li {
      width: 100%;
      padding: 10px;
  }
}

  // Left Block
.generalInfoGrid {
  grid-column: 1/3;
  grid-row: 1;
  margin: auto;
    h1 {
    color: black;
    font-size: 360%;
  }
  p {
    font-size: 180%;
  }
}

// Top-Right Block
.aboutUsGrid {
  grid-column: 1;
  grid-row: 2;
  h1 {
    color: black;
    font-size: 360%;
  }
  p {
    font-size: 180%;
  }
}

// Bottom-Right Block
.slidderGrid {
  grid-column: 2;
  grid-row: 2;
  p {
    font-size: 200%;
  }

  img {
    margin:auto;
    margin-top: 20px;
    width: 100%;
    height: auto;
  }
}
}

@media screen and (max-width: 927px) {
  .gridview {
  ul {
    grid-template-columns: 1fr;
    padding-top: 100px;
    grid-gap: 1em;
  }

  li {
      width: 100%;
      padding: 10px;
  }
}

  // Left Block
.generalInfoGrid {
  grid-column: 1;
  grid-row: 1;
}

// Top-Right Block
.aboutUsGrid {
  grid-column: 1;
  grid-row: 2;
}

// Bottom-Right Block
.slidderGrid {
  grid-column: 1;
  grid-row: 3;
}
}
</style>
