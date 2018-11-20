import {Injectable, Injector} from '@angular/core';
import {RecipeModel} from '../model/recipe.model';
import {RestService} from 'angular4-hal';
@Injectable()
export class RecipeService extends RestService<RecipeModel> {

  constructor(injector: Injector) {
    super(RecipeModel, 'receitas', injector);
  }
}
