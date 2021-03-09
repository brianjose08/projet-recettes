<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="ingredients-details">
            <ul>
              <li class="row1-col1">
                <p>
                  <b>List of ingredients</b>
                </p>
                <div class="list-border">
                  <!--Ici c'est le dropdownlist pour les categories-->
                  <div class="selectCategory">
                    <select v-model="selected">
                      <option disabled value="">
                        Choissisez une categorie
                      </option>
                      <option
                        v-for="(item, index) in getAllIngredients"
                        :key="index"
                      >
                        {{ index }}
                      </option>
                    </select>
                    <br />
                    <input
                      v-model="unit"
                      type="text"
                      placeholder="Unit of mesure"
                      required
                    />
                  </div>
                  <!--Ici c'est la liste d'ingredients selon la categorie-->
                  <div class="listeIngredients">
                    <div
                      v-for="(item, index) in getAllIngredients"
                      :key="index"
                    >
                      <div v-if="index === selected">
                        <div
                          class="ingredientsFiltrer"
                          v-for="(ingredients, index) in item"
                          :key="index"
                        >
                          <div>{{ ingredients.name }}</div>
                          <!-- <input v-model="unit" type="text" placeholder="Unit of mesure" /> -->
                          <button
                            style="font-size: 20px"
                            type="button"
                            @click="addIngredient(ingredients.idIngredient)"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="row1-col2">
                <p>
                  <b>List of ingredients added for this recipe</b>
                </p>
                <div class="listeIngredientsAjoutes">
                  <!-- Un for ici pour chaque ingredient enregistré dans une liste maybe?-->
                  <div
                    v-for="(
                      ingredientAjouter, index
                    ) in getAllIngredientsTemporaire"
                    :key="index"
                  >
                    <div
                      v-for="(item, index) in getAllIngredients"
                      :key="index"
                    >
                      <div v-for="(ingredients, index) in item" :key="index">
                        <div
                          class="ingredientsAjoute"
                          v-if="
                            ingredients.idIngredient ===
                            ingredientAjouter.idIngredient
                          "
                        >
                          <p>{{ ingredients.name }}</p>
                          <input
                            type="text"
                            placeholder="Unit of mesure"
                            :value="ingredientAjouter.unit"
                            readonly
                          />
                          <button
                            style="font-size: 20px"
                            type="button"
                            @click="removeIngredient(ingredients.idIngredient)"
                          >
                            -
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="modal-default-button"
              @click="$emit('close')"
            >
              Okay
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'IngredientModal',
  props: ['boolAjouter'],
  data() {
    return {
      selected: '',
      unit: '',
      boolReceive: this.boolAjouter,
    };
  },
  methods: {
    ...mapActions([
      'fetchIngredients',
      'addIngredientTemporaire',
      'deleteIngredientTemporaire',
    ]),
    afficher(ingredient) {
      console.log(ingredient);
    },
    addIngredient(idParam) {
      const data = { idIngredient: idParam, unit: this.unit };
      let boolForEach = false;

      this.getAllIngredientsTemporaire.forEach((ingredientTemp) => {
        if (ingredientTemp.idIngredient === idParam) {
          boolForEach = true;
        }
      });

      if (boolForEach === false) {
        this.$emit('add', data);
        if (this.boolReceive) {
          this.addIngredientTemporaire(data);
        }
      }
    },
    removeIngredient(idParam) {
      console.log('remove');
      this.$emit('remove', idParam);
      if (this.boolReceive) {
        this.deleteIngredientTemporaire(idParam);
      }
    },
  },

  computed: {
    getAllIngredients() {
      return this.$store.state.ingredients.ingredients;
    },
    getAllIngredientsTemporaire() {
      return this.$store.state.ingredientsTemporaire.ingredientsTemp;
    },
  },

  created() {
    this.fetchIngredients();
  },
};
</script>

<style lang="scss" scoped>
.modal-mask {
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: inline-block;
}

.modal-container {
  min-height: calc(100vh - 190px);
  margin-right: auto;
  margin-left: auto;
  margin-top: 50px;
  width: 100%;
  background-color: #fff;
  border-style: solid;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: "Architects Daughter", cursive;
}

.modal-default-button {
  float: right;
}

.ingredients-details {
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.5em;
    margin: auto;
    padding-inline-start: 0px;
  }

  li {
    display: grid;
  }

  .list-border {
    border-style: solid;
  }

  .row2-col1 {
    border-style: solid;
  }

  .selectCategory > select {
    margin-bottom: 10px;
    width: 100%;
    height: 35px;
    font-size: 20px;
    font-family: "Architects Daughter", cursive;
  }

  .selectCategory > input {
    margin-top: 5px;
    margin-bottom: 10px;
    width: 80%;
    height: 25px;
    font-size: 20px;
    font-family: "Architects Daughter", cursive;
  }

  .listeIngredients {
    overflow-y: scroll;
    height: 510px;
  }
  .listeIngredientsAjoutes {
    overflow-y: scroll;
    height: 600px;
    border-style: solid;
  }
  .ingredientsFiltrer {
    display: grid;
    grid-template-columns: 0fr 0fr;
    grid-template-rows: 0fr;
    border-style: solid;
    padding: 5px;
    margin: 10px;

    div {
      grid-column: 1/3;
      grid-row: 1;
      font-size: 120%;
      font-family: "Architects Daughter", cursive;
      height: 38px;
      width: 200px;
      text-align: left;
    }

    button {
      grid-column: 3;
      grid-row: 1;
      padding: 0px 15px 0px 15px;
      justify-self: right;
      background-color: rgb(0, 199, 60);
      color: white;
      cursor: pointer;
      -webkit-transition: all 0.2s linear;
      -o-transition: all 0.2s linear;
      transition: all 0.2s linear;
    }
    button:hover {
      background-color: rgb(255, 196, 0);
    }
  }

  .ingredientsAjoute {
    display: grid;
    grid-template-columns: 0fr 0fr;
    grid-template-rows: 0fr;
    border-style: solid;
    padding: 5px;
    margin: 10px;

    p {
      grid-column: 1/3;
      grid-row: 1;
      font-size: 120%;
      width: 150px;
      height:auto;
      text-align: left;
    }

    input {
      grid-column: 3;
      grid-row: 1;
      font-family: "Architects Daughter", cursive;
      justify-self: center;
      text-align: center;
      font-size: 20px;
      width: 35%;
      margin-left: 35%;
    }

    button {
      grid-column: 3;
      grid-row: 1;
      justify-self: right;
      padding: 0px 15px 0px 15px;
      background-color: rgb(189, 0, 0);
      color: white;
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

.modal-footer {
  grid-column: 1/3;
  grid-row: 3;
  display: flex;
  justify-content: center;
  padding-top: 20px;
}

.modal-footer button {
  padding: 20px;
  font-size: 150%;
  font-family: "Architects Daughter", cursive;
  background-color: rgb(0, 0, 0);
  color: white;
  border-style: none;
  border-radius: 15px;
  cursor: pointer;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
}

.modal-footer button:hover {
  background-color: rgb(255, 196, 0);
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

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

@media screen and (max-width: 922px) {

.modal-container {
  max-height: 800px;
  width:95%;
}

  .ingredients-details {
  ul {
    display: grid;
    grid-template-columns: 1fr;
    grid-row: 0fr 0fr;
    grid-gap: 0.5em;
    margin: auto;
    padding-inline-start: 0px;
  }

  li {
    display: grid;
  }

  .list-border {
    border-style: solid;
  }

  .row2-col1 {
    border-style: solid;
  }

  .selectCategory > select {
    margin-bottom: 10px;
    width: 100%;
    height: 35px;
    font-size: 20px;
    font-family: "Architects Daughter", cursive;
  }

  .selectCategory > input {
    margin-top: 5px;
    margin-bottom: 10px;
    width: 80%;
    height: 25px;
    font-size: 20px;
    font-family: "Architects Daughter", cursive;
  }

  .listeIngredients {
    overflow-y: scroll;
    height: 200px;
  }
  .listeIngredientsAjoutes {
    overflow-y: scroll;
    height: 250px;
    border-style: solid;
  }

  .ingredientsFiltrer {
    display: grid;
    grid-template-columns: 0fr 0fr;
    grid-template-rows: 0fr;
    border-style: solid;
    padding: 10px;
    margin: 5px;

    div {
      grid-column: 1/3;
      grid-row: 1;
      font-size: 120%;
      font-family: "Architects Daughter", cursive;
      height: 38px;
      width: 200px;
      text-align: left;
    }
  }

  .ingredientsAjoute {
    display: grid;
    grid-template-columns: 0fr 0fr;
    grid-template-rows: 0fr;
    border-style: solid;
    padding: 10px;
    margin: 10px;

    div {
      grid-column: 1/3;
      grid-row: 1;
      font-size: 120%;
      height: 38px;
      text-align: left;
    }
  }
}
}
</style>
