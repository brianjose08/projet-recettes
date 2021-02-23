<template>
  <div>
    <form class="formModifyRecipe" @submit.prevent="enregistrerRecette">
      <div class="contenu">
        <div class="title-col">
          <h1>Modify recipe</h1>
        </div>
        <div class="imageUpload-col">
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
            />
          </div>
        </div>
        <div class="recipeGeneralInformation-col">
          <div>
            <label for="recipeTitle">Recipe Title</label>
            <br />
            <input
              type="text"
              id="recipeTitle"
              placeholder="Your recipe's name"
              v-model="recette.title"
            />
          </div>
          <div>
            <label for="recipeCalories">Calories</label>
            <br />
            <input
              type="number"
              id="recipeCalories"
              placeholder="Calories"
              v-model="recette.calories"
            />
          </div>
          <div>
            <label for="recipeTime">Time</label>
            <br />
            <input
              type="number"
              id="recipeTime"
              placeholder="Time"
              v-model="recette.cookingTime"
            />minutes
          </div>
          <div>
            <label for="rPrice">Price</label>
            <br />
            <input
              type="number"
              id="recipePrice"
              placeholder="Price"
              v-model="recette.price"
            />$
          </div>
        </div>
        <div class="ingredient-col">
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
              v-if="showIngredientModal"
              @close="showIngredientModalClose()"
              @add="addIngredient"
              @remove="removeIngredient"
            ></ingredient-modale>
          </div>
        </div>
        <div class="cookingStep-col">
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
        <div class="btnEnregistrer-col">
          <div>
            <a>
              <button>Enregistrer</button>
            </a>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';
import CookingStepModal from '../components/CookingStepModal.vue';

import IngredientModale from '../components/IngredientModal.vue';

export default {
  name: 'Modify',
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
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
  }),
  components: { IngredientModale, CookingStepModal },

  async mounted() {
    try {
      this.recette = (await axios.get(`http://localhost:3000/recettes/${this.id}`)).data;
      await this.fetchIngredientsTemporaire(this.recette.ingredients);
      await this.fetchCookingStepTemporaire(this.recette.steps);
    } catch (e) {
      console.error(e);
    }
  },

  methods: {
    ...mapActions(['updateRecette', 'fetchRecettes', 'fetchIngredientsTemporaire', 'fetchCookingStepTemporaire']),

    // Method to update Recipe
    enregistrerRecette() {
      this.updateRecette(this.recette);
      this.$router.push('recipes');
    },

    // Methods to Close Modal
    showIngredientModalClose() {
      this.showIngredientModal = false;
    },
    showCookingStepModalClose() {
      this.showCookingStepModal = false;
    },

    // Methods to Add/Remove Ingredients/CookingSteps
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
    // Methods to upload Picture
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
.formModifyRecipe {
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

//First-Col / First-Row (Title)
.title-col {
  grid-column: 1/3;
  grid-row: 1/2;
  text-decoration: underline;
  font-size: 30px;
}

//First-Col / Third-Row (Title, Calories, Time, Price)
.recipeGeneralInformation-col {
  width: 98%;
  grid-column: 1/2;
  grid-row: 2;
  justify-self: left;
  font-size: 25px;
  padding: 15px 0px 15px 0px;
  border-style: solid;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  div {
  display: block;
  float: left;
  padding-left: 25px;
    input {
    margin-right: 30px;
    height: 25px;
    width: 100px;
    }
  }
  #recipeTitle {
    height: 23px;
    width: 500px;
    min-width: auto;
  }
}

//Second-Col / Second-Row (Image/Upload)
.imageUpload-col {
  padding-top: 25px;
  grid-column: 2;
  grid-row: 2/5;
  border-style: solid;
  border-radius: 20px;
  div {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
    img {
    grid-column: 2;
    grid-row: 1;
    width: 300px;
    height: auto;
    }
    input[type="file"] {
    grid-column: 2;
    grid-row: 2;
    color: transparent;
    margin-top: 20px;
    margin-left: 100px;
    }
  }
}

//First-Col / Fourth-Row (IngredientModal)
.ingredient-col {
  width: 98%;
  grid-column: 1;
  grid-row: 3;
  justify-self: left;
  font-size: 18px;
  border-style: solid;
  border-top: none;
  div {
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
}

//First-Col / Fifth-Row (CookingStepModal)
.cookingStep-col {
  width: 98%;
  grid-column: 1/2;
  grid-row: 4;
  justify-self: left;
  font-size: 18px;
  border-style: solid;
  border-top: none;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  div {
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
}

//Button Enregistrer
.btnEnregistrer-col {
  grid-column: 1/3;
  grid-row: 5;
  display: flex;
  justify-content: center;
  padding-top: 10px;
  div {
    button {
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
    button:hover {
      background-color: rgb(255, 196, 0);
    }
  }
}
</style>
