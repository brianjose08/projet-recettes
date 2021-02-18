<template>
  <div>
    <div class="recipePage">
      <div class="search">
        <input type="text" v-model="search" @input="filtrer()" placeholder="Search Recipe..." />
        <a href="/add" class="ajouter-recette"> Add new recipe </a>
      </div>
      <ul v-for="recette in recetteFiltrer" :key="recette.id">
        <li class="item-recette">
          <div class="gridview">
            <div>
              <h2>{{ recette.title }}</h2>
              <img :src="recette.image" />
              <button class="modifier-recette" @click="modifier(recette)">
                Modifier
              </button>

              <button
                class="supprimer-recette"
                @click="
                  selected(recette.id);
                  showSupprimerRecetteModaleOpen();
                "
              >
                Supprimer
              </button>
            </div>
            <div class="ingredients-recette">
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
            <div class="etapes-recette">
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
      <supprimer-recette-modale
        :idSelected="this.idSelected"
        v-if="showSupprimerRecetteModale"
        @close="showSupprimerRecetteModaleClose()"
        @closeNReload="showSupprimerRecetteModaleClose(); reload()"
      >
      </supprimer-recette-modale>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex';
import SupprimerRecetteModale from '../components/SupprimerRecetteModale.vue';

export default {
  name: 'Recipes',
  data: () => ({
    showSupprimerRecetteModale: false,
    idSelected: 0,
    search: '',
    recetteFiltrer: [],
  }),
  components: {
    SupprimerRecetteModale,
  },

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

    afficher(ingredient) {
      console.log(ingredient);
    },
    selected(id) {
      this.idSelected = id;
      console.log(this.idSelected);
    },

    filtrer() {
      this.recetteFiltrer = [];
      this.getAllRecettes.forEach((recette) => {
        if (recette.title.toLowerCase().includes(this.search.toLowerCase())) {
          this.recetteFiltrer.push(recette);
        }
      });
    },

    initialiserFiltre() {
      this.getAllRecettes.forEach((recette) => {
        this.recetteFiltrer.push(recette);
      });
    },

    showSupprimerRecetteModaleOpen() {
      this.showSupprimerRecetteModale = true;
    },
    showSupprimerRecetteModaleClose() {
      this.showSupprimerRecetteModale = false;
    },
    reload() {
      window.location.reload();
    },

    modifier(recette) {
      this.$router.push({ name: 'Modify', params: { id: recette.id } });
    },
  },

  async mounted() {
    await this.fetchRecettes();
    await this.fetchIngredients();
    this.initialiserFiltre();
  },

  created() {
  },

};
</script>
<style lang="scss" scoped>
.search {
  padding-top: 110px;
  display: block;
  justify-content: center;
}
.search input {
  width: 60%;
  height: 28px;
  border-radius: 5px;
  font-size: 25px;
  color: black;
  background-color: rgba(255, 253, 253, 0.61);
}

.search-recette {
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
.ajouter-recette {
  margin-left: 10px;
  text-align: center;
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-size: 15px;
  padding: 10px;
  border-radius: 5px;
  background-color: rgb(0, 195, 255);
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
  font-family: "Architects Daughter", cursive;
  color: rgb(255, 255, 255);
  margin-right: 2px;
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
  margin-left: 2px;
  font-size: 15px;
  padding: 10px;
  border-radius: 5px;
  background-color: rgb(199, 0, 0);
  font-family: "Architects Daughter", cursive;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
}
.supprimer-recette:hover {
  color: rgb(255, 255, 255);
  background-color: rgb(255, 196, 0);
}
ul li {
  color: black;
  display: grid;
  border-style: double;
  border-color: black;
  border-radius: 3pc;
  padding: 20px 0px 20px 20px;
  margin-right: 30px;
  background-color: rgba(255, 253, 253, 0.61);
}
ul li div img {
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

ul li div h2 {
  border-style: solid;
  border-color: black;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  font-size: 20px;
  position: relative;
  bottom: 15px;
  width: 100%;
}
.gridview {
  display: grid;
  grid-template-columns: 1fr 2fr 3fr;
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 1em;
  justify-content: stretch;
  align-content: stretch;
}
.ingredients-recette {
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
.etapes-recette {
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
