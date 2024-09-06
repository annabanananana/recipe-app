<!-- page for adding recipes with method-->
<template>
    <div>
      <h2>Add Recipe</h2>
      <form @submit.prevent="addRecipe">
        <div>
          <label>Name:</label>
          <textarea v-model="name"></textarea>
        </div>
        <div>
          <label>Ingredients:</label>
          <textarea v-model="ingredients"></textarea>
        </div>
        <div>
          <label>Instructions:</label>
          <textarea v-model="instructions"></textarea>
        </div>
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  </template>
  
  <script>
  import RecipeService from '@/services/RecipeService';
  
  export default {
    data() {
      return {
        name: '',
        ingredients: '',
        instructions: '',
      };
    },
    methods: {
      addRecipe() {
        const recipe = {
          name: this.name,
          ingredients: this.ingredients,
          instructions: this.instructions,
        };
        RecipeService.addRecipe(recipe).then(() => {
          this.name = '';
          this.ingredients = '';
          this.instructions = '';
        });
      },
    },
  };
  </script>
