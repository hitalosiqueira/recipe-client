import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {RecipeService} from '../../service/recipe.service';
import {IngredientService} from '../../service/ingredient.service';
import {IngredientModel} from '../../model/ingredient.model';
import {RecipeCreationService} from '../../service/recipe.creation.service';

@Component({
  selector: 'app-recipe-new',
  templateUrl: './recipe-new.component.html',
  styleUrls: ['./recipe-new.component.css']
})
export class RecipeNewComponent implements OnInit {
  recipeForm: FormGroup;
  ingredients: IngredientModel[];

  constructor(private recipeService: RecipeService,
              private ingredientService: IngredientService,
              private recipeCreation: RecipeCreationService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.getAllIngredients();
    this.initForm();
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('recipeIngredients')).push(
      new FormGroup({
        'ingredient': new FormControl(null, Validators.required),
        'amount': new FormControl(null, Validators.required)
      })
    );
  }

  onSubmit() {
    this.recipeCreation.post(this.recipeForm.value);
    this.onCancel();
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('recipeIngredients')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let name = '';
    let portions = '';
    let calories = '';
    let instructions = '';
    let ingredients = new FormArray([]);

    this.recipeForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'portions': new FormControl(portions, Validators.required),
      'calories': new FormControl(calories, Validators.required),
      'instructions': new FormControl(instructions, Validators.required),
      'recipeIngredients': ingredients
    });
  }

  private getAllIngredients() {
    this.ingredientService.getAll()
      .subscribe((ingredients: IngredientModel[]) => {
      this.ingredients = ingredients;
    });
  }
}
