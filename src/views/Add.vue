<template>
  <div>
    <form class="formAddRecipe" @submit.prevent="addRecipe">
      <div class="contenu">
        <div class="row1-col1">
          <h1>New recipe</h1>
        </div>
        <div class="row2-col2">
          <div>
            <img
              src="https://spoonacular.com/recipeImages/716311-556x370.jpg"/>
            <br />
            <button>Upload a picture of your recipe here</button>
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
            v-model="title"
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
              v-model="calories"
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
              v-model="time"
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
              v-model="price"
              required
            />$
          </div>
        </div>
        <div class="row3-col1">
          <div>
            <h2>Ingredients</h2>
            <button type="button" id="addIngredient" @click="showModal = true">+</button>
            <ingredient-modale v-if="showModal" @close="showModal = false"></ingredient-modale>
          </div>
        </div>
        <div class="row4-col1">
          <div>
            <h2>Steps</h2>
            <button type="button" id="addStep">+</button>
          </div>
        </div>
        <div class="row5-col2">
          <div>
            <input type="submit" value="Add Recipe" />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src

import IngredientModale from '../components/IngredientModal.vue';

export default {
  name: 'Add',
  data() {
    return {
      showModal: false,
    };
  },
  components: { IngredientModale },
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
  display: block;
  justify-content: center;
}

.row2-col2 div img {
  width: 80%;;
  height: auto;
}

//premiere colonne, quatrieme rangee
.row3-col1{
  width: 98%;
  grid-column: 1;
  grid-row: 3;
  justify-self: left;
  font-size: 18px;
  border-style: solid;
  border-top: none;
}

.row3-col1 div{
  display: block;
  float:left;
  padding: 0px 0px 20px 25px;
}

#addIngredient{
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

#addIngredient:hover{
    background-color: rgb(255, 196, 0);
}

//premiere colonne, cinquieme rangee
.row4-col1{
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

.row4-col1 div{
  display: block;
  float:left;
  padding: 0px 0px 20px 25px;
}

#addStep{
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

#addStep:hover{
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

.row5-col2 div input {
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

.row5-col2 div input:hover {
  background-color: rgb(255, 196, 0);
}
</style>
