import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RecipeModel} from '../model/recipe.model';
import {Subject} from 'rxjs';

@Injectable()
export class RecipeCreationService {
  recipeAdded = new Subject<RecipeModel>();
  recipeUrl = 'http://localhost:8080/api/receita';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  post(recipe: RecipeModel) {
    this.http.post<RecipeModel>(this.recipeUrl, recipe, this.httpOptions)
      .subscribe(
      (recipe: RecipeModel) => {
        this.recipeAdded.next(recipe);
      });
  }
}
