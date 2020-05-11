import { Component, OnInit } from '@angular/core';
import {RecipeServiceService} from "../Services/recipe-service.service";
;

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor(private recipesService: RecipeServiceService) { }
  recipes=null;
  ngOnInit(): void {
    this.recipesService.getAllRecipesData().subscribe((data)=>{
      console.log(data)
      this.recipes=data['recipes']
    });
  }

}
