import { Component, OnInit, Input } from '@angular/core';
import { Recipedata } from '../recipedata';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.scss']
})
export class RecipedetailComponent implements OnInit {
  @Input() selval:Recipedata;
  constructor(private cart:CartService) { }

  ngOnInit() {
  }

  addData(){
this.cart.addRecipedata(this.selval);
this.cart.addFreeItems(this.selval.items);
  }

}
