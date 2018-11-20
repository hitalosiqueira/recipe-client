import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RecipeService} from '../../service/recipe.service';
import {RecipeModel} from '../../model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: RecipeModel[] = [];

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.getAllTeams();
  }

  getAllTeams() {
    this.recipeService.getAll()
      .subscribe((recipes: RecipeModel[]) => {
          this.recipes = recipes;
      });
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
