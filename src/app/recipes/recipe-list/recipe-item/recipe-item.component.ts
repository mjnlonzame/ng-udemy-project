import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input("recipe") recipe: Recipe;
  @Output("selectedRecipe") selectedRecipe = new EventEmitter<void>();
  constructor(private recipeService : RecipeService) { }

  ngOnInit() {
  }

  onRecipeitemClick(){
    //this.selectedRecipe.emit();
    this.recipeService.selectedRecipe.emit(this.recipe);
    console.log("recipe item was clicked");
    
  }

}
