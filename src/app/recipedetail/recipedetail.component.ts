import { Component, OnInit, Input } from '@angular/core';
import { Recipedata } from '../recipedata';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.scss']
})
export class RecipedetailComponent implements OnInit {
  @Input() selval:Recipedata;
  constructor() { }

  ngOnInit() {
  }

}
