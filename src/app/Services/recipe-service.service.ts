import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {

  constructor(private http: HttpClient) { }
  public getAllRecipesData(){
  return this.http.get('http://localhost:8080/Backend/rest/recipes')
  }
}
