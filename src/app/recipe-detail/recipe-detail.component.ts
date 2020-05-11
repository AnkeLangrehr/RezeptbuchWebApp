import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap, Params, Route} from '@angular/router';
import {RecipeServiceService} from "../Services/recipe-service.service";
import {Recipe} from "../Models/Recipe";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
id: string= '1';
recipe:Recipe;
  constructor(private activatedRoute:ActivatedRoute, private recipeServiceService: RecipeServiceService) {
    this.id =this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id)
  }

  ngOnInit(): void {
    this.recipeServiceService.getSingleRecipeById(this.id).subscribe((data:any)=>{
      console.log(data)
      this.recipe=data
    });
  }

}
