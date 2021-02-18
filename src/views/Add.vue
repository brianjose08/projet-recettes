<template>
  <div>
    <form class="formAddRecipe" @submit.prevent="createRecette">
      <div class="contenu">
        <div class="row1-col1">
          <h1>New recipe</h1>
        </div>
        <div class="row2-col2">
          <div>
            <img
              id="imgPreview"
              :src="previewImage"
              alt="Preview"
            />
            <input
              type="file"
              @change="uploadRecipePicture()"
              id="upload"
              value="Upload a picture of your recipe"
              required
            />
          </div>
        </div>
        <div class="row2-col1">
          <div>
            <label for="rTitle">Recipe Title</label>
            <br />
            <input
              type="text"
              id="rTitle"
              placeholder="Your recipe's name"
              v-model="recette.title"
              required
            />
          </div>
          <div>
            <label for="rCalories">Calories</label>
            <br />
            <input
              type="number"
              id="rCalories"
              placeholder="Calories"
              v-model="recette.calories"
              required
            />
          </div>
          <div>
            <label for="rTime">Time</label>
            <br />
            <input
              type="number"
              id="rTime"
              placeholder="Time"
              v-model="recette.cookingTime"
              required
            />minutes
          </div>
          <div>
            <label for="rPrice">Price</label>
            <br />
            <input
              type="number"
              id="rPrice"
              placeholder="Price"
              v-model="recette.price"
              required
            />$
          </div>
        </div>
        <div class="row3-col1">
          <div>
            <h2>Ingredients</h2>
            <button
              type="button"
              id="addIngredient"
              @click="showIngredientModal = true"
            >
              +
            </button>
            <ingredient-modale
            :boolAjouter="this.boolAjouter"
              v-if="showIngredientModal"
              @close="showIngredientModalClose()"
              @add="addIngredient"
              @remove="removeIngredient"
            ></ingredient-modale>
          </div>
        </div>
        <div class="row4-col1">
          <div>
            <h2>Steps</h2>
            <button
              type="button"
              id="addStep"
              @click="showCookingStepModal = true"
            >
              +
            </button>
            <cooking-step-modal
              v-if="showCookingStepModal"
              @closeStep="showCookingStepModalClose()"
              @addStep="addCookingStep"
              @removeStep="removeCookingStep"
            >
            </cooking-step-modal>
          </div>
        </div>
        <div class="row5-col2">
          <div>
            <a>
              <button>Add Recipe</button>
            </a>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import CookingStepModal from '../components/CookingStepModal.vue';
// @ is an alias to /src

import IngredientModale from '../components/IngredientModal.vue';

export default {
  name: 'Add',
  data: () => ({
    recette: {
      title: '',
      price: 0,
      image: '',
      cookingTime: 0,
      calories: 0,
      steps: [],
      ingredients: [],
    },
    previewImage: 'http://flxtable.com/wp-content/plugins/pl-platform/engine/ui/images/image-preview.png',
    showIngredientModal: false,
    showCookingStepModal: false,
    listeVide: [],
    boolAjouter: true,
  }),
  components: { IngredientModale, CookingStepModal },

  methods: {
    ...mapActions(['addRecette', 'fetchIngredientsTemporaire', 'fetchCookingStepTemporaire']),

    created() {
      window.location.reload();
      this.fetchIngredientsTemporaire(this.listeVide);
      this.fetchCookingStepTemporaire(this.listeVide);
    },

    createRecette() {
      this.addRecette(this.recette).then(() => {
        this.$router.push('recipes');
      });
    },

    showIngredientModalClose() {
      this.showIngredientModal = false;
    },
    showCookingStepModalClose() {
      this.showCookingStepModal = false;
    },

    addIngredient(data) {
      this.recette.ingredients.push(data);
      console.log(this.recette.ingredients);
    },
    addCookingStep(data) {
      this.recette.steps.push(data);
      console.log(this.recette.steps);
    },
    removeIngredient(id) {
      for (let i = 0; i < this.recette.ingredients.length; i += 1) {
        if (this.recette.ingredients[i].idIngredient === id) {
          this.recette.ingredients.splice(i, 1);
        }
      }
      console.log(this.recette.ingredients);
    },
    removeCookingStep(id) {
      for (let i = 0; i < this.recette.steps.length; i += 1) {
        if (this.recette.steps[i].numberStep === id) {
          this.recette.steps.splice(i, 1);
        }
      }
      console.log(this.recette.steps);
    },

    uploadRecipePicture() {
      this.recette.image = null;
      const uploadInput = document.getElementById('upload');
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        console.log(reader);
        localStorage.setItem('recent-image', reader.result);
        this.previewImage = reader.result;
      });
      reader.readAsDataURL(uploadInput.files[0]);
      const recentImageDataUrl = localStorage.getItem('recent-image');
      this.recette.image = recentImageDataUrl;
    },
  },
};
</script>
<style lang="scss" scoped>
.formAddRecipe {
  padding-top: 100px;
  display: flex;
  justify-content: center;
}

.contenu {
  background-color: rgba(255, 255, 255, 0.89);
  padding: 0px 40px 40px 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0fr 0fr 0fr 0fr 0fr;
  border-style: solid;
  border-color: rgb(0, 0, 0);
  border-radius: 20px;
  width: 70%;
  justify-content: stretch;
  align-content: stretch;
}

.contenu div input,
label {
  float: left;
}

// premiere colonne, premiere rangee
.row1-col1 {
  grid-column: 1/3;
  grid-row: 1/2;
  text-decoration: underline;
  font-size: 30px;
}

//premiere colonne, troisieme rangee
.row2-col1 {
  width: 98%;
  grid-column: 1/2;
  grid-row: 2;
  justify-self: left;
  font-size: 25px;
  padding: 15px 0px 15px 0px;
  border-style: solid;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}

.row2-col1 div {
  display: block;
  float: left;
  padding-left: 25px;
}

.row2-col1 div input {
  margin-right: 30px;
  height: 25px;
  width: 100px;
}

#rTitle {
  height: 23px;
  width: 500px;
  min-width: auto;
}

//deuxieme colonne, deuxieme rangee (image et upload)
.row2-col2 {
  padding-top: 25px;
  grid-column: 2;
  grid-row: 2/5;
  border-style: solid;
  border-radius: 20px;
}

.row2-col2 div {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
}

.row2-col2 div img {
  grid-column: 2;
  grid-row: 1;
  width: 300px;
  height: auto;
}

input[type='file']{
  grid-column: 2;
  grid-row: 2;
  color: transparent;
  margin-top: 20px;
  margin-left: 100px;

}

//premiere colonne, quatrieme rangee
.row3-col1 {
  width: 98%;
  grid-column: 1;
  grid-row: 3;
  justify-self: left;
  font-size: 18px;
  border-style: solid;
  border-top: none;
}

.row3-col1 div {
  display: block;
  float: left;
  padding: 0px 0px 20px 25px;
}

#addIngredient {
  display: block;
  padding: 10px 15px 10px 15px;
  border-radius: 100%;
  border-style: none;
  background-color: black;
  color: white;
  font-size: 20px;
  cursor: pointer;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
}

#addIngredient:hover {
  background-color: rgb(255, 196, 0);
}

//premiere colonne, cinquieme rangee
.row4-col1 {
  width: 98%;
  grid-column: 1/2;
  grid-row: 4;
  justify-self: left;
  font-size: 18px;
  border-style: solid;
  border-top: none;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

.row4-col1 div {
  display: block;
  float: left;
  padding: 0px 0px 20px 25px;
}

#addStep {
  display: block;
  padding: 10px 15px 10px 15px;
  border-radius: 100%;
  border-style: none;
  background-color: black;
  color: white;
  font-size: 20px;
  cursor: pointer;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
}

#addStep:hover {
  background-color: rgb(255, 196, 0);
}

//bouton add recipe
.row5-col2 {
  grid-column: 1/3;
  grid-row: 5;
  display: flex;
  justify-content: center;
  padding-top: 10px;
}

.row5-col2 div button {
  padding: 20px;
  font-size: 200%;
  font-family: "Architects Daughter", cursive;
  background-color: rgb(0, 0, 0);
  color: white;
  border-radius: 15px;
  cursor: pointer;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
}

.row5-col2 div button:hover {
  background-color: rgb(255, 196, 0);
}
</style>
