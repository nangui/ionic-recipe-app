import { RecipesService } from './recipes.service';
import { Recipe } from './recipe.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, OnDestroy {

  private recipeListSubs: Subscription;
  recipes: Recipe[];

  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
    this.loadRecipes();
  }

  loadRecipes() {
    this.recipes = this.recipeService.getAllRecipes();
    this.recipeListSubs = this.recipeService.recipesChanged.subscribe(recipes => {
      this.recipes = recipes;
    });
  }

  ngOnDestroy(): void {
    this.recipeListSubs.unsubscribe();
  }
}
