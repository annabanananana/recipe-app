<!-- this code was generated with the help of chatgpt using the prompt:
 "I want to build a web app using vue.js, where i can add recipes to a SQLite databank and then search for recipes with specific ingredients"-->
<!--starting page of App with image and links to adding and searching recipes-->
<template>
  <div class="header-container">
  <h1> Digital Cook book</h1>
    <div class="header-content">
  <img alt="Vue food-image" src="./assets/food-image.png" class="header-image">
      <div id="app" class="header-links">
    <nav>
      <router-link to="/add-recipe" class="header-link">Add Recipe</router-link>
    <br>
      <router-link to="/search-recipes" class="header-link">Search Recipes</router-link>
      <!--<ul>
        <li><router-link to="/add-recipe" class="header-link">Add Recipe</router-link></li>
        <li><router-link to="/search-recipes" class="header-link">Search Recipes</router-link></li>
        <li><router-link to="/add-examples">Add Example Recipes</router-link></li>
      </ul>
    -->
    </nav>
    <router-view></router-view>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'App',
};
</script>

<style src='./assets/styles_4.css'></style>
