import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Recipe} from "../Models/Recipe";

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {

  constructor(private http: HttpClient) { }

  public getAllRecipesData(){
  return this.http.get<Recipe[]>('http://localhost:4200/Backend/rest/recipes')
  }
  public getSingleRecipeById(id:String){
    return this.http.get<Recipe>('http://localhost:4200/Backend/rest/recipes/'+ id)
  }
}
