import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[] = [
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

  constructor() { }

  ngOnInit() {
  }

}
