// src/services/RecipeService.js
import axios from 'axios';

const API_URL = 'http://localhost:3000';

export default {
  addRecipe(recipe) {
    return axios.post(`${API_URL}/add-recipe`, recipe);
  },
  searchRecipes(ingredients) {
    return axios.get(`${API_URL}/recipes`, { params: { ingredients } });
  }
};
