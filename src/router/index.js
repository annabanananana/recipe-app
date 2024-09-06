import { createRouter, createWebHistory } from 'vue-router';
import AddRecipe from '@/components/AddRecipe.vue';
import SearchRecipes from '@/components/SearchRecipes.vue';

const routes = [
  { path: '/add-recipe', component: AddRecipe },
  { path: '/search-recipes', component: SearchRecipes },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

