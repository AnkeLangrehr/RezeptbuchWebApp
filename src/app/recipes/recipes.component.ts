import { Component, OnInit } from '@angular/core';
import {RecipeServiceService} from "../Services/recipe-service.service";
import {Recipe} from "../Models/Recipe";
;

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor(private recipesService: RecipeServiceService) { }
  recipes: Recipe[];
  ngOnInit(): void {
    this.recipesService.getAllRecipesData().subscribe((data:any[])=>{
      console.log(data)
      this.recipes=data
    });
  }

}
