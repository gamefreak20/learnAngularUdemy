import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test',
      'https://vignette.wikia.nocookie.net/p__/images/8/83/Asia_Argento.png/revision/latest?cb=20190502002652&path-prefix=protagonist'),
    new Recipe('A Test Recipe2', 'This is a test',
      'https://vignette.wikia.nocookie.net/p__/images/8/83/Asia_Argento.png/revision/latest?cb=20190502002652&path-prefix=protagonist'),
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
