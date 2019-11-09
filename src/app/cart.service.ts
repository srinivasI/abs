import { Injectable } from '@angular/core';
import { Recipedata } from './recipedata';
import { Freeitem } from './freeitem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
reciperecs:Recipedata[]=[];
freeitems:Freeitem[]=[];
  constructor() { }
  getRecipedata(){
    return this.reciperecs;
  }
  addRecipedata(rec){
    return this.reciperecs.push(rec);
  }
  editrecipe(oldrecipe, newrecipe){
this.reciperecs[this.reciperecs.indexOf(oldrecipe)]=newrecipe;
  }
  deleteRecipe(recipe){
    this.reciperecs.splice(this.reciperecs.indexOf(recipe),1);
  }
  getFreeitem(){
    return this.freeitems;
  }
  addFreeitem(rec1){
    return this.freeitems.push(rec1);
  }
  addFreeItems(items){
    Array.prototype.push.apply(this.freeitems, items);
  }
  edititem(olditem,newitem){
    this.freeitems[this.freeitems.indexOf(olditem)]=newitem;
  }
  deleteitem(item){
    this.freeitems.splice(this.freeitems.indexOf(item),1);
  }

}
