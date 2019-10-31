import { Component, OnInit, Input } from '@angular/core';
import { Recipedata } from 'src/app/recipedata';

@Component({
  selector: 'app-recipelistitem',
  templateUrl: './recipelistitem.component.html',
  styleUrls: ['./recipelistitem.component.scss']
})
export class RecipelistitemComponent implements OnInit {
@Input() reciperecord:Recipedata;
  constructor() { }

  ngOnInit() {
  }

}
