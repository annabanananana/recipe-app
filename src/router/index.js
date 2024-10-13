//sets up routing paths for web pages
import { createRouter, createWebHistory } from 'vue-router';
import AddRecipe from '@/components/AddRecipe.vue';
import SearchRecipes from '@/components/SearchRecipes.vue';
/*import AddExamples from '@/components/AddExamples.vue';*/

const routes = [
  { path: '/add-recipe', component: AddRecipe },
  { path: '/search-recipes', component: SearchRecipes },
  /*{ path: '/add-examples' , component: AddExamples },*/
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

