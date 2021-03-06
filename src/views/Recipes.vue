<template>
  <div>
    <div class="recipePage">
      <div class="search-col">
        <input
          type="text"
          v-model="search"
          @input="filtrer()"
          placeholder="Search Recipe..."
        />
        <button id="addRecipe">
          <a href="/add">
            <img id="iconImg" v-bind:src="require('./../assets/Add_Logo.png')"
          /></a>
        </button>
      </div>
      <div class="list-recipes">
        <ul>
          <li
            class="item-recipe"
            v-for="recette in recetteFiltrer"
            :key="recette.id"
          >
            <h2>{{ recette.title }}</h2>
            <img
              id="recipeImg"
              :src="recette.image"
              @click="
                selected(recette.id);
                showRecipeDetailsModaleOpen();
              "
            />
            <div>
            <button
              id="removeFavoriteRecipe"
              v-if="user.recettes.includes(recette.id)"
              @click="removeFavorite(recette.id)"
            >
              <img
                id="iconImg"
                v-bind:src="require('./../assets/Favorite_Filled_Logo.png')"
              />
            </button>
            <button
              id="addFavoriteRecipe"
              @click="addFavorite(recette.id)"
              v-if="!user.recettes.includes(recette.id)"
            >
              <img
                id="iconImg"
                v-bind:src="require('./../assets/Favorite_Blank_Logo.png')"
              />
            </button>
            <button id="modifyRecipe" @click="modifier(recette)">
              <img
                id="iconImg"
                v-bind:src="require('./../assets/Edit_Logo.png')"
              />
            </button>
            <button
              id="deleteRecipe"
              @click="
                selected(recette.id);
                showSupprimerRecetteModaleOpen();
              "
            >
              <img
                id="iconImg"
                v-bind:src="require('./../assets/Delete_Logo.png')"
              />
            </button>
            </div>
          </li>
        </ul>
      </div>
      <supprimer-recette-modale
        :idSelected="this.idSelected"
        v-if="showSupprimerRecetteModale"
        @close="showSupprimerRecetteModaleClose()"
        @closeNReload="
          showSupprimerRecetteModaleClose();
          removeRecipe();
        "
      >
      </supprimer-recette-modale>

      <recipe-details
        :idSelected="this.idSelected"
        v-if="showRecipeDetailsModal"
        @close="showRecipeDetailsModaleClose()"
      >
      </recipe-details>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex';
import SupprimerRecetteModale from '../components/SupprimerRecetteModale.vue';
import RecipeDetails from '../components/RecipeDetails.vue';

export default {
  name: 'Recipes',
  data: () => ({
    user: JSON.parse(localStorage.getItem('userGet')),
    showSupprimerRecetteModale: false,
    showRecipeDetailsModal: false,
    idSelected: 0,
    search: '',
    recetteFiltrer: [],
  }),
  components: {
    SupprimerRecetteModale,
    RecipeDetails,
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
    ...mapActions([
      'fetchRecettes',
      'fetchIngredients',
      'addFavoriteRecette',
      'deleteFavoriteRecette',
      'updateFavorisRecette',
    ]),

    // Method to know which id was selected
    selected(id) {
      this.idSelected = id;
      console.log(this.idSelected);
    },

    // Methods to Add/Remove Favorite
    addFavorite(idRecette) {
      localStorage.removeItem('userGet');
      this.user.recettes.push(idRecette);
      localStorage.setItem('userGet', JSON.stringify(this.user));
      this.updateFavorisRecette(this.user);
      console.log('add');
    },
    removeFavorite(idRecette) {
      const index = this.user.recettes.indexOf(idRecette);
      if (index > -1) {
        localStorage.removeItem('userGet');
        this.user.recettes.splice(index, 1);
        localStorage.setItem('userGet', JSON.stringify(this.user));
        this.updateFavorisRecette(this.user);
      }
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

    showRecipeDetailsModaleOpen() {
      this.showRecipeDetailsModal = true;
    },
    showRecipeDetailsModaleClose() {
      this.showRecipeDetailsModal = false;
    },

    // Method to remove recipes after pressing the delete button
    removeRecipe() {
      this.recetteFiltrer.forEach((recette) => {
        if (recette.id === this.idSelected) {
          const index = this.recetteFiltrer.indexOf(recette);
          this.recetteFiltrer.splice(index, 1);
        }
      });
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

  created() {},
};
</script>
<style lang="scss" scoped>
//Search Section
.search-col {
  padding-top: 80px;
  margin-bottom: 20px;
  display: block;
  justify-content: center;
  input {
    width: 60%;
    height: 38px;
    border-radius: 5px;
    font-size: 25px;
    color: black;
    background-color: rgba(255, 253, 253, 0.61);
  }
}

// Attributs for all buttons
button {
  text-align: center;
  text-decoration: none;
  font-size: 15px;
  padding: 10px;
  margin: 0px 5px;
  background-color: rgba(145, 145, 145, 0.01);
  border-style: none;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
  cursor: pointer;
  #iconImg {
    height: 60px;
    width: 60px;
  }
}

button:focus {
    outline: none;
}

// Buttons Add/Remove Favorite Recipe
#addFavoriteRecipe {
  &:hover {
    background-color: rgba(58, 58, 58, 0.3);
  }
}
#removeFavoriteRecipe {
  &:hover {
    background-color: rgba(58, 58, 58, 0.3);
  }
}

// Button Add New Recipe
#addRecipe {
  margin-left: 20px;
  border-style: solid;
  border-radius: 20px;
  width: 70px;
  background-color: rgb(255, 240, 206);
  a {
    color: white;;
  }
  &:hover {
    background-color: rgb(255, 203, 30);
  }

  img{
    width: 40px;
    height: 30px
  }
}

// Button Modify Recipe
#modifyRecipe {
  &:hover {
    background-color: rgba(58, 58, 58, 0.3);
  }
}

// Button Delete Recipe
#deleteRecipe {
  &:hover {
    background-color: rgba(58, 58, 58, 0.3);
  }
}

// List of Recipes

.list-recipes {
  padding-right: 50px;
  padding-bottom: 25px;
  ul {
    display: grid;
    margin: auto;
    width: 85%;
    grid-template-columns: repeat(auto-fit, minmax(455px, 1fr));
    grid-gap: 1rem;
  }

  li {
    display: block;
    color: black;
    border-style: double;
    border-color: black;
    border-radius: 3pc;
    background-color: rgba(248, 255, 250, 0.712);
    padding-bottom: 10px;
  }
  h2 {
    border-style: solid;
    border-radius: 1pc;
    background-color: rgb(255, 236, 200);
  }
  #recipeImg {
    width: 100%;
    max-width: 450px;
    max-height: 300px;
    border-radius: 2pc;
    border-style: solid;
    -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
  }
    #recipeImg:hover {
    cursor: pointer;
    filter: brightness(50%);
  }
}
</style>
