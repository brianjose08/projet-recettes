<template>
  <div class="recipePage">
    <Navbar />
    <div class="search">
      <input type="text" placeholder="Search Recipe..." />
      <a>
        <router-link to="/add" class="ajouter-recette"
          >Ajouter une nouvelle recette</router-link
        >
      </a>
    </div>

    <ul v-for="category in allIngredients" :key="category.name">
      <li>ingredient.id</li>
    </ul>
    <ul v-for="recette in allRecettes" :key="recette.idRecette">
      <li class="item-recette">
        <div class="gridview">
          <div>
            <a>
              <router-link
                to="/modify"
                class="modifier-recette"
                @click="afficher()"
                >Modifier</router-link
              >
            </a>
            <a>
              <router-link to="/delete" class="supprimer-recette"
                >Supprimer</router-link
              >
            </a>
            <img :src="recette.image" />
            <h2>{{ recette.titre }}</h2>
          </div>
          <div class="ingredients-recette">
            <div
              v-for="ingredient in recette.ingredients"
              v-bind="ingredient"
              :key="ingredient.idIngredient"
            >
              {{ ingredient.unite }}
            </div>
          </div>
          <div class="etapes-recette">
            <div
              v-for="etape in recette.etapes"
              v-bind="etape"
              :key="etape.numero"
            >
              {{ etape.numero }}- {{ etape.etape }}
            </div>
          </div>
        </div>
      </li>
    </ul>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from 'vuex';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Recipes',
  components: {
    Navbar,
    Footer,
  },

  methods: {
    ...mapActions(['fetchRecettes', 'fetchIngredients']),
    afficher(ingredient) {
      console.log(ingredient);
    },
  },

  computed: mapGetters(['allRecettes', 'allIngredients']),

  created() {
    this.fetchRecettes();
    this.fetchIngredients();
  },

  mounted() {},
};
</script>
<style lang="scss" scoped>
.recipePage {
  font-family: "Architects Daughter", cursive;
}
.search {
  padding-top: 100px;
  display: block;
  justify-content: center;
}
.search input {
  width: 60%;
  height: 30px;
  border-radius: 5px;
}

.ajouter-recette {
  margin-left: 10px;
  text-align: center;
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-size: 15px;
  padding: 10px;
  border-radius: 5px;
  background-color: rgb(0, 0, 0);
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
}
.ajouter-recette:hover {
  color: rgb(255, 255, 255);
  background-color: rgb(255, 196, 0);
}
.modifier-recette {
  text-align: center;
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-size: 15px;
  padding: 10px;
  border-radius: 5px;
  background-color: rgb(19, 163, 0);
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
}
.modifier-recette:hover {
  color: rgb(255, 255, 255);
  background-color: rgb(255, 196, 0);
}
.supprimer-recette {
  text-align: center;
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-size: 15px;
  padding: 10px;
  border-radius: 5px;
  background-color: rgb(199, 0, 0);
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
}
.supprimer-recette:hover {
  color: rgb(255, 255, 255);
  background-color: rgb(255, 196, 0);
}
ul li {
  display: grid;
  padding-top: 40px;
  padding-bottom: 40px;
}
ul li div img {
  border-style: solid;
  border-color: black;
  border-bottom: none;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-top: 15px;
  height: auto;
  width: 98%;
}

ul li div h2 {
  border-style: solid;
  border-color: black;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-top: 0;
  position: relative;
  bottom: 5px;
  width: auto;
}
.gridview {
  display: grid;
  grid-template-columns: 1fr 2fr 3fr;
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 3em;
  justify-content: stretch;
  align-content: stretch;
}
.ingredients-recette {
  text-align: left;
  font-size: 22px;
  overflow-y: scroll;
  margin-top: 33px;
  padding: 10px;
  border-style: solid;
  border-color: black;
  border-radius: 10px;
  width: auto;
  height: 205px;
}
.etapes-recette {
  text-align: left;
  font-size: 22px;
  overflow-y: scroll;
  margin-top: 33px;
  margin-right: 50px;
  padding: 10px;
  border-style: solid;
  border-color: black;
  border-radius: 10px;
  width: auto;
  height: 205px;
}
</style>
