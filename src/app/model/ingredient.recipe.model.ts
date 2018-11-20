import {Resource} from 'angular4-hal';
import {IngredientModel} from './ingredient.model';

export class IngredientRecipeModel extends Resource {
  amount: string;
  ingredient: IngredientModel;
}
