import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipedata } from '../recipedata';
import { Freeitem } from '../freeitem';
import {RecipeinfoService} from '../recipeinfo.service';
@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.scss'],
  providers:[RecipeinfoService]
})
export class RecipelistComponent implements OnInit {
recipes:Recipedata[]= [];


@Output() selectedrec = new EventEmitter();
sendRecipe(record){
  this.selectedrec.emit(record);
}
  constructor(private recinfo:RecipeinfoService) { }

  ngOnInit() {
    this.recipes = this.recinfo.getRecipes();
  }

}
