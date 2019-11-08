import { Component, OnInit } from '@angular/core';
import { Recipedata } from '../recipedata';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.scss']
})
export class AddtocartComponent implements OnInit {
  alldata:Recipedata[];
  constructor(private cart:CartService) { }

  ngOnInit() {
    this.alldata = this.cart.getRecipedata();
  }

}
