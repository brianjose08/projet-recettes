<template>
        <div class="recipePage">
      <div class="search-col">
        <input type="text" v-model="search" @input="filtrer()" placeholder="Search Recipe..." />
      </div>
      <div v-for="recette in recetteFiltrer" :key="recette.id">
      <div v-for="recetteFavoris in user.recettes" :key="recetteFavoris.id">
      <ul v-if="recette.id === recetteFavoris.id">
        <li class="item-recipe">
          <div class="gridview">
            <div>
              <h2>{{ recette.title }}</h2>
              <img :src="recette.image" />
              <button class="modifyRecipe" @click="modifier(recette)">
                Modifier
              </button>

              <button
                class="deleteRecipe"
                @click="
                  selected(recette.id);
                  showSupprimerRecetteModaleOpen();
                "
              >
                Supprimer
              </button>
            </div>
            <div class="generalInfo-col">
              <b>Price: </b>{{ recette.price }} $ <br />
              <b>Cooking time: </b>{{ recette.cookingTime }} min. <br />
              <b>Calories: </b>{{ recette.calories }} calories <br />
              <b>List of ingredients:</b>
              <div
                v-for="(ingredient, index) in recette.ingredients"
                :key="index"
              >
                <div v-for="(category, index) in getAllIngredients" :key="index">
                  <div
                    v-for="(ingredientCategory, index) in category"
                    :key="index"
                  >
                    <div
                      v-if="
                        ingredient.idIngredient ===
                        ingredientCategory.idIngredient
                      "
                    >
                      -{{ ingredientCategory.name }} ({{ ingredient.unit }})
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="cookingStep-col">
              <b>Steps: </b><br />
              <div
                v-for="etape in recette.steps"
                v-bind="etape"
                :key="etape.numberStep"
              >
                <b>{{ etape.numberStep }}</b
                >- {{ etape.step }}
              </div>
            </div>
          </div>
        </li>
      </ul>
        </div>
      </div>
      <supprimer-recette-modale
        :idSelected="this.idSelected"
        v-if="showSupprimerRecetteModale"
        @close="showSupprimerRecetteModaleClose()"
        @closeNReload="showSupprimerRecetteModaleClose(); reload()"
      >
      </supprimer-recette-modale>
    </div>
</template>

<script>

import { mapActions } from 'vuex';
import SupprimerRecetteModale from '../components/SupprimerRecetteModale.vue';

export default {
  name: 'Favorites',
  data() {
    return {
      user: JSON.parse(localStorage.getItem('userGet')),
      showSupprimerRecetteModale: false,
      idSelected: 0,
      search: '',
      recetteFiltrer: [],
    };
  },
  components: {
    SupprimerRecetteModale,
  },

  // Methods to retrieve recipes/ingredients information
  computed: {
    getAllRecettes() {
      return this.$store.state.recettes.recettes;
    },
    getAllIngredients() {
      return this.$store.state.ingredients.ingredients;
    },
  },

  methods: {
    ...mapActions(['fetchRecettes', 'fetchIngredients']),

    // Method to know which id was selected
    selected(id) {
      this.idSelected = id;
      console.log(this.idSelected);
    },

    // Method to filter for the SearchBar
    filtrer() {
      this.recetteFiltrer = [];
      this.getAllRecettes.forEach((recette) => {
        if (recette.title.toLowerCase().includes(this.search.toLowerCase())) {
          this.recetteFiltrer.push(recette);
        }
      });
    },
    // Method to preset the filter to empty
    initialiserFiltre() {
      this.getAllRecettes.forEach((recette) => {
        this.recetteFiltrer.push(recette);
      });
    },

    // Methods to Open/Close Modal
    showSupprimerRecetteModaleOpen() {
      this.showSupprimerRecetteModale = true;
    },
    showSupprimerRecetteModaleClose() {
      this.showSupprimerRecetteModale = false;
    },

    // Method to Refresh Page
    reload() {
      window.location.reload();
    },

    // Method to send Data to Modifiy.vue
    modifier(recette) {
      this.$router.push({ name: 'Modify', params: { id: recette.id } });
    },
  },

  async mounted() {
    await this.fetchRecettes();
    await this.fetchIngredients();
    this.initialiserFiltre();
  },

};
</script>

<style lang="scss" scoped>

//Search Section
.search-col {
  padding-top: 110px;
  display: block;
  justify-content: center;
  input {
  width: 60%;
  height: 28px;
  border-radius: 5px;
  font-size: 25px;
  color: black;
  background-color: rgba(255, 253, 253, 0.61);
  }
}

// Button Add New Recipe
.addRecipe {
  text-align: center;
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-size: 15px;
  margin-left: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: rgb(0, 195, 255);
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
}
.addRecipe:hover {
  color: rgb(255, 255, 255);
  background-color: rgb(255, 196, 0);
}

// Button Modify Recipe
.modifyRecipe {
  text-align: center;
  text-decoration: none;
  font-size: 15px;
  font-family: "Architects Daughter", cursive;
  color: rgb(255, 255, 255);
  margin-right: 2px;
  padding: 10px;
  border-radius: 5px;
  background-color: rgb(19, 163, 0);
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
  cursor: pointer;
}
.modifyRecipe:hover {
  color: rgb(255, 255, 255);
  background-color: rgb(255, 196, 0);
}

// Button Delete Recipe
.deleteRecipe {
  text-align: center;
  text-decoration: none;
  font-family: "Architects Daughter", cursive;
  font-size: 15px;
  color: rgb(255, 255, 255);
  margin-left: 2px;
  padding: 10px;
  border-radius: 5px;
  background-color: rgb(199, 0, 0);
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
  cursor:pointer
}
.deleteRecipe:hover {
  color: rgb(255, 255, 255);
  background-color: rgb(255, 196, 0);
}

// List of Recipes
ul li {
  color: black;
  display: grid;
  border-style: double;
  border-color: black;
  border-radius: 3pc;
  padding: 20px 0px 20px 20px;
  margin-right: 30px;
  background-color: rgba(255, 253, 253, 0.61);
  div {
    img {
    border-style: solid;
    border-color: black;
    border-top: none;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    height: auto;
    width: 100%;
    position: relative;
    bottom: 30px;
    }
    h2 {
    border-style: solid;
    border-color: black;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    font-size: 20px;
    position: relative;
    bottom: 15px;
    width: 100%;
    }
  }
}

//Grid for each recipe
.gridview {
  display: grid;
  grid-template-columns: 1fr 2fr 3fr;
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 1em;
  justify-content: stretch;
  align-content: stretch;
}

//First-Line / Second-Row (General information of the recipe)
.generalInfo-col {
  text-align: left;
  font-size: 22px;
  overflow-y: scroll;
  padding: 10px;
  border-style: solid;
  border-color: black;
  border-radius: 10px;
  width: auto;
  height: 205px;
}

//First-Line / Third-Row (Cooking Step for the recipe)
.cookingStep-col {
  text-align: left;
  font-size: 22px;
  overflow-y: scroll;
  margin-right: 20px;
  padding: 10px;
  border-style: solid;
  border-color: black;
  border-radius: 10px;
  width: auto;
  height: 205px;
}
</style>
