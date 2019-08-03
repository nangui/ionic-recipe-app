import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Gulgule',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Gulgule.jpg',
      ingredients: ['oil', 'Flour', 'Sugar']
    },
    {
      id: 'r2',
      title: 'Bizerte',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Fishmarket_in_Bizerte_05.jpg',
      ingredients: ['fish', 'oil', 'tomato']
    }
  ];

  recipesChanged = new Subject<Recipe[]>();

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
    this.recipesChanged.next(this.recipes);
  }
}
