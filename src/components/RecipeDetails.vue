<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="recipe-details">
            <ul v-for="recette in getAllRecettes" :key="recette.id">
              <li v-if="recette.id === idRecette">
                                <button
                  class="cancelDelete"
                  type="button"
                  @click="$emit('close')"
                >
                  <img id="iconImg" v-bind:src="require('./../assets/Close_Modal_Logo.png')"
          />
                </button>
                <div>
                  <h2>{{ recette.title }}</h2>
                  <img :src="recette.image" />
                  <p><b>Price: </b>{{ recette.price }} $</p>
                  <p><b>Cooking time: </b>{{ recette.cookingTime }} min.</p>
                  <p><b>Calories: </b>{{ recette.calories }} calories</p>
                  <p><b>List of ingredients:</b></p>
                </div>
                <div class="recipe-ingredients">
                  <div
                    v-for="(ingredient, index) in recette.ingredients"
                    :key="index"
                  >
                    <div
                      v-for="(category, index) in getAllIngredients"
                      :key="index"
                    >
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
                <p><b>Steps: </b></p>
                <div class="recipe-steps">
                <div
                  v-for="etape in recette.steps"
                  v-bind="etape"
                  :key="etape.numberStep"
                >
                  <b>{{ etape.numberStep }}</b
                  >- {{ etape.step }}
                </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'RecipeDetails',
  props: ['idSelected'],
  data() {
    return {
      idRecette: this.idSelected,
    };
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
  },

  async mounted() {
    await this.fetchRecettes();
    await this.fetchIngredients();
  },
};
</script>

<style lang="scss" scoped>
// Details about the recipe
.recipe-details {
  margin-bottom: 15px;
  ul {
    display: grid;
    margin: auto;
  }
  li {
    display: grid;
  }

  h2 {
    border-style: solid;
    border-color: black;
    border-radius: 2pc;
    max-width: 700px;
    margin: auto;
    background-color: black;
    color: white;
  }

  img {
    margin-top: 10px;
    width: 100%;
    max-width: 750px;
    max-height: 500px;
    border-radius: 2pc;
    border-style: solid;
  }

  button {
    justify-self: left;
    text-align: center;
    margin-bottom: 10px;
    border-style: none;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0);

    img {
      border-style: none;
      width: 50px;
    }
  }

  p{
    font-size: 22px;
  }

  .recipe-ingredients{
    border-style: solid;
    border-radius: 1pc;
    margin: auto;
    width: 70%;
    padding: 10px;
    font-size: 20px;
    text-align: left;
    background-color: white;
  }
  .recipe-steps{
    border-style: solid;
    border-radius: 1pc;
    margin: auto;
    width: 80%;
    padding: 20px;
    font-size: 20px;
    text-align: left;
    background-color: white;
  }
}

// CSS concerning the popup
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.822);
  transition: opacity 0.3s ease;
}

.modal-container {
  max-height: calc(100vh - 210px);
  display: inline-block;
  overflow-y: auto;
  margin: 50px;
  padding: 10px;
  width: 70%;
  background-color: #fff;
  border-style: solid;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: "Architects Daughter", cursive;
  background-color: rgb(255, 240, 206);
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
