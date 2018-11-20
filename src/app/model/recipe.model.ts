import {Resource} from 'angular4-hal';

export class RecipeModel extends Resource {
  public name: string;
  public portions: number;
  public calories: number;
  public instructions: string;
}
