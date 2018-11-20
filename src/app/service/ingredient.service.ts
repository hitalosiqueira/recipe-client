import {Injectable, Injector} from '@angular/core';
import {RestService} from 'angular4-hal';
import {IngredientModel} from '../model/ingredient.model';

@Injectable()
export class IngredientService extends RestService<IngredientModel> {

  constructor(injector: Injector) {
    super(IngredientModel, 'ingredientes', injector);
  }
}
