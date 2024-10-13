<!--page for searching and viewing recipes with method-->
<template>
    <div>
      <h2>Search Recipes</h2>
      <input v-model="searchQuery" @input="searchRecipes" class="search-input" placeholder="Search by ingredient" />
      <ul>
        <li v-for="recipe in recipes" :key="recipe.id">
          <h3>{{ recipe.name }}</h3>
          <p>Ingredients: {{ recipe.ingredients }}</p>
          <p>Instructions: {{ recipe.instructions }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import RecipeService from '@/services/RecipeService';
  
  export default {
    data() {
      return {
        searchQuery: '',
        recipes: [],
      };
    },
    methods: {
      searchRecipes() {
        RecipeService.searchRecipes(this.searchQuery).then((response) => {
          this.recipes = response.data.recipes;
        });
      },
    },
  };
  </script>
  