import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test',
      'http://technicallyteamann.com/wp-content/uploads/2017/03/Recipe_logo-1.jpeg',
      [
        new Ingredient('meat', 1),
        new Ingredient('fries', 3),
      ]),
    new Recipe('A Test Recipe2', 'This is a test',
      'http://technicallyteamann.com/wp-content/uploads/2017/03/Recipe_logo-1.jpeg',
      [
        new Ingredient('meats', 3),
        new Ingredient('fries', 3),
      ]),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

}
