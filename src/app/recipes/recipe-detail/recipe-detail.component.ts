import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {RecipeService} from '../../service/recipe.service';
import {RecipeModel} from '../../model/recipe.model';
import {IngredientRecipeModel} from '../../model/ingredient.recipe.model';
import {IngredientModel} from '../../model/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: RecipeModel;
  ingredientRecipe: IngredientRecipeModel[];
  ingredients: IngredientModel[];
  id: number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    let aux: IngredientModel[];
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipeService.get(this.id).subscribe(
            (recipe: RecipeModel) => {
              this.recipe = recipe;
              this.recipe.getRelationArray(IngredientRecipeModel, 'recipeIngredients').subscribe(
                (element: IngredientRecipeModel[]) => {
                  this.ingredientRecipe = element;
                  aux = [];
                  this.ingredientRecipe.forEach((e) => {
                    e.getRelation(IngredientModel, 'ingredient').subscribe(
                      (ingredient: IngredientModel) => {
                        aux.push(ingredient);
                      }
                    );
                  });
                  this.ingredients = aux;
                }
              );
            }
          );
        }
      );
  }

}
