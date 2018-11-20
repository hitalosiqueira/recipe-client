import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeNewComponent } from './recipes/recipe-new/recipe-new.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import {AngularHalModule} from 'angular4-hal';
import {ExternalConfigurationService} from './external.configuration.service';
import {RecipeService} from './service/recipe.service';
import {IngredientService} from './service/ingredient.service';
import {HttpClientModule} from '@angular/common/http';
import {RecipeCreationService} from './service/recipe.creation.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeNewComponent,
    RecipeItemComponent,
    RecipeStartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularHalModule.forRoot()
  ],
  providers: [
    RecipeService,
    IngredientService,
    RecipeCreationService,
    {provide: 'ExternalConfigurationService', useClass: ExternalConfigurationService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
