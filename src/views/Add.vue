<template>
  <div>
    <form class="formAddRecipe" @submit.prevent="createRecette">
      <div class="contenu">
        <div id="title-col">
          <h1>New recipe</h1>
        </div>
        <div class="imageUpload-col">
          <div>
            <img id="imgPreview" :src="previewImage" alt="Preview" />
            <input
              type="file"
              @change="uploadRecipePicture()"
              id="upload"
              value="Upload a picture of your recipe"
              required
            />
          </div>
        </div>
        <div class="recipeGeneralInformation-col">
          <div>
            <label for="recipeTitle">Recipe Title</label>
            <br>
            <input
              type="text"
              id="recipeTitle"
              placeholder="Your recipe's name"
              v-model="recette.title"
              required
            />
          </div>
          <div class="informations-extras">
          <div>
            <label for="recipeCalories">Calories</label>
            <br>
            <input
              type="number"
              id="recipeCalories"
              placeholder="Calories"
              v-model="recette.calories"
              required
            /> cal
          </div>
          <div>
            <label for="recipeTime">Time</label>
            <br>
            <input
              type="number"
              id="recipeTime"
              placeholder="Time"
              v-model="recette.cookingTime"
              required
            /> min
          </div>
          <div>
            <label for="recipePrice">Price</label>
             <br>
            <input
              type="number"
              id="recipePrice"
              placeholder="Price"
              v-model="recette.price"
              required
            /> $
          </div>
          </div>
        </div>
        <div class="ingredient-col">
          <div class="ingredient-col-div">
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
              :boolAjouter="this.boolAjouter"
              v-if="showCookingStepModal"
              @closeStep="showCookingStepModalClose()"
              @addStep="addCookingStep"
              @removeStep="removeCookingStep"
            >
            </cooking-step-modal>
          </div>
        </div>
        <div class="addButton-col">
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
    previewImage:
      'http://flxtable.com/wp-content/plugins/pl-platform/engine/ui/images/image-preview.png',
    showIngredientModal: false,
    showCookingStepModal: false,
    listeVide: [],
    boolAjouter: true,
  }),
  components: { IngredientModale, CookingStepModal },

  methods: {
    ...mapActions([
      'addRecette',
      'fetchIngredientsTemporaire',
      'fetchCookingStepTemporaire',
    ]),

    created() {
      window.location.reload();
      this.fetchIngredientsTemporaire(this.listeVide);
      this.fetchCookingStepTemporaire(this.listeVide);
    },

    async createRecette() {
      await this.addRecette(this.recette).then(() => {
        this.$router.push('recipes');
      });
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
      const uploadInput = document.getElementById('upload');
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        console.log(reader);
        localStorage.setItem('recent-image', reader.result);
        this.previewImage = reader.result;
        this.recette.image = reader.result;
      });
      reader.readAsDataURL(uploadInput.files[0]);
      // this.recette.image = recentImageDataUrl;
      localStorage.removeItem('recent-image');
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
  width: 80%;
  background-color: rgba(255, 255, 255, 0.89);
  padding: 0px 40px 40px 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-style: solid;
  border-color: rgb(0, 0, 0);
  border-radius: 20px;
}

//First-Col / First-Row (Title)
#title-col {
  grid-column: 1/3;
  grid-row: 1/2;
  text-decoration: underline;
  font-size: 30px;
}

//First-Col / Third-Row (Title, Calories, Time, Price)
.recipeGeneralInformation-col {
  width: 98%;
  font-size: 25px;
  padding: 15px 0px 15px 0px;
  border-style: solid;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  div {
    margin-top: 10px;
    input {
    padding: 5px 0px;
    text-align: center;
    }
  }
  #recipeTitle {
    width: 95%;
  }

  .informations-extras {
    display:grid;
    grid-template-columns: 0.5fr 0.5fr 0.5fr;

    input {
      width: 50px;
    }
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
    width: 350px;
    height: auto;
    }
    input[type="file"] {
    grid-column: 2;
    grid-row: 2;
    color: transparent;
    margin-top: 20px;
    margin-left: 130px;
    }
  }
}

//First-Col / Fourth-Row (IngredientModal)
.ingredient-col {
  width: 98%;
  grid-column: 1;
  grid-row: 3;
  font-size: 18px;
  border-style: solid;
  border-top: none;
  #addIngredient {
  padding: 15px 20px 15px 20px;
  margin-bottom: 20px;
  border-radius: 100%;
  border-style: none;
  font-size: 20px;
  color: white;
  background-color: black;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
  cursor: pointer;
    &:hover {
    background-color: rgb(255, 196, 0);
    }
  }
}

//First-Col / Fifth-Row (CookingStepModal)
.cookingStep-col {
  width: 98%;
  grid-column: 1;
  grid-row: 4;
  justify-self: left;
  font-size: 18px;
  border-style: solid;
  border-top: none;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  #addStep {
  padding: 15px 20px 15px 20px;
  margin-bottom: 20px;
  border-radius: 100%;
  border-style: none;
  background-color: black;
  color: white;
  font-size: 20px;
  cursor: pointer;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
    &:hover {
    background-color: rgb(255, 196, 0);
    }
  }
}

//Button Add Recipe
.addButton-col {
  grid-column: 1/3;
  grid-row: 5;
  display: flex;
  justify-content: center;
  padding-top: 10px;
  div button {
  padding: 20px;
  font-size: 200%;
  font-family: "Architects Daughter", cursive;
  color: white;
  background-color: rgb(0, 0, 0);
  border-radius: 15px;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
  cursor: pointer;
    &:hover {
    background-color: rgb(255, 196, 0);
    }
  }
}

@media screen and (max-width: 922px) {

.contenu {
  width: 80%;
  background-color: rgba(255, 255, 255, 0.89);
  padding: 0px 40px 40px 40px;
  display: grid;
  grid-template-columns: 1fr;
}

.ingredient-col {
  grid-column: 1;
  grid-row: 3;
}

//First-Col / Fifth-Row (CookingStepModal)
.cookingStep-col {
  grid-column: 1;
  grid-row: 4;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}

.imageUpload-col {
  width: 98%;
  grid-column: 1;
  grid-row: 6;
  border-top-style: none;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  div {
    img {
    grid-column: 2;
    grid-row: 1;
    width: 350px;
    height: auto;
    }

    input {
      margin-bottom: 30px;
    }
  }
}

.addButton-col {
  grid-column: 1;
  grid-row: 7;
}
}
</style>
