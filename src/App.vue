<!--starting page of App with image and links to adding and searching recipes-->
<template>
  <img alt="Vue food-image" src="./assets/food-image.png">
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/add-recipe">Add Recipe</router-link></li>
        <li><router-link to="/search-recipes">Search Recipes</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
};
</script>

<style>
/* Add some basic styling */
img {
  width: 200px;
}

nav ul {
  list-style-type: disc;
}

nav a.router-link-active {
  font-weight: bold;
}
</style>