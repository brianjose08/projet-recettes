<template>
  <div>
    <Navbar />
    <div class="search">
      <input type="text" placeholder="Search Recipe..." />
      <a>
        <router-link to="/add" class="ajouter-recette"
          >Ajouter une nouvelle recette</router-link
        >
      </a>
    </div>
      <ul>
        <li class="item-recette">
          <div class="gridview">
            <div>
              <a>
                <router-link to="/modify" class="modifier-recette"
                  >Modifier</router-link
                >
              </a>
              <a>
                <router-link to="/delete" class="supprimer-recette"
                  >Supprimer</router-link
                >
              </a>
              <img
                src="https://spoonacular.com/recipeImages/1444543-556x370.jpg"
                width="450px"
                height="350px"
              />
              <h2>Easy Berry French Toast</h2>
            </div>
            <div class="ingredients-recette">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                non malesuada nunc. Orci varius natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Donec congue dui sed
                eros efficitur, sit amet vehicula enim aliquam. Cras sit amet
                magna quis magna rhoncus fermentum vel ac tortor. Etiam
                vulputate leo nec sapien luctus porttitor. In blandit varius
                mattis. Sed auctor quis erat id imperdiet. Phasellus nec dui
                suscipit, posuere diam vel, scelerisque ipsum.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur gravida felis sapien, vitae faucibus est facilisis
                euismod. Proin vitae eros pretium, bibendum mauris vel,
                imperdiet metus. Donec fringilla vulputate metus at interdum.
                Donec porta pretium libero, at placerat nibh iaculis quis. Sed
                dapibus et diam ac interdum. Praesent egestas in massa vel
                aliquet. Orci varius natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus. Ut non massa vitae tellus
                suscipit eleifend. Suspendisse laoreet mauris eget venenatis
                molestie. Vivamus malesuada ut nunc a pellentesque. Suspendisse
                potenti. Suspendisse pulvinar vehicula tristique. Cras ut quam
                et diam scelerisque tempor. Fusce ante massa, vestibulum sit
                amet quam ut, aliquet placerat ex.
              </p>
            </div>
            <div class="etapes-recette">
              <p>
                Ut non massa vitae tellus suscipit eleifend. Suspendisse laoreet
                mauris eget venenatis molestie. Vivamus malesuada ut nunc a
                pellentesque. Suspendisse potenti. Suspendisse pulvinar vehicula
                tristique. Cras ut quam et diam scelerisque tempor. Fusce ante
                massa, vestibulum sit amet quam ut, aliquet placerat ex.
              </p>
            </div>
          </div>
        </li>
      </ul>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Recipes',
  components: {
    Navbar,
    Footer,
  },
};
</script>
<style lang="scss" scoped>
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
}

 ul li div h2 {
  border-style: solid;
  overflow-x: scroll;
  border-color: black;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-top: 0;
  position: relative;
  bottom: 5px;
  width: 450px;
  height: 50px;
}
.gridview{
    display: grid;
    grid-template-columns: 1fr 2fr 3fr;
    grid-gap: 3em;
    justify-content: stretch;
    align-content: stretch;
}
.ingredients-recette p {
  text-align: left;
  font-size: 22px;
  overflow-y: scroll;
  margin-top: 33px;
  padding: 10px;
  width: 620px;
  height: 380px;
  border-style: solid;
  border-color: black;
  border-radius: 10px;
}
.etapes-recette p {
  text-align: left;
  font-size: 22px;
  overflow-y: scroll;
  margin-top: 33px;
  padding: 10px;
  width: 620px;
  height: 380px;
  border-style: solid;
  border-color: black;
  border-radius: 10px;
}
</style>
