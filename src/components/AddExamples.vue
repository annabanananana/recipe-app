<!-- page for adding example recipes, only optional, not necessary for working-->
<template>
    <div>
      <h2>Add Example Recipes</h2>
      <form @submit.prevent="addRecipe">
        <div>
          <label>Recipe no 1:</label>
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
        <button type="submit">Add Example Recipe</button>
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
          this.name = 'Cucumber Salad';
          this.ingredients = 'Cucumber, Onions, Dill, Vinegar, Olive Oil';
          this.instructions = 'ad loru dkne sknep  kdnwd kdnw';
        });
      },
    },
  };
  </script>
