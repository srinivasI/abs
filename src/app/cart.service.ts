import { Injectable } from '@angular/core';
import { Recipedata } from './recipedata';

@Injectable({
  providedIn: 'root'
})
export class CartService {
reciperecs:Recipedata[]=[];
  constructor() { }
  getRecipedata(){
    return this.reciperecs;
  }
  addRecipedata(rec){
    return this.reciperecs.push(rec);
  }
}
