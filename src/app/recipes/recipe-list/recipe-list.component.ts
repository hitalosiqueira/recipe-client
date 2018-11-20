import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RecipeService} from '../../service/recipe.service';
import {RecipeModel} from '../../model/recipe.model';
import {Subscription} from 'rxjs';
import {RecipeCreationService} from '../../service/recipe.creation.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: RecipeModel[] = [];
  subscription: Subscription;

  constructor(private recipeService: RecipeService,
              private recipeCreationService: RecipeCreationService,
              private router: Router,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.subscription = this.recipeCreationService.recipeAdded
      .subscribe(
        (recipe: RecipeModel) => {
          this.recipes.push(recipe);
        }
      );
    this.getAllRecipes();
  }

  getAllRecipes() {
    this.recipeService.getAll()
      .subscribe((recipes: RecipeModel[]) => {
          this.recipes = recipes;
      });
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
