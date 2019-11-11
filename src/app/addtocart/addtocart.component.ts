import { Component, OnInit } from '@angular/core';
import { Recipedata } from '../recipedata';
import { CartService } from '../cart.service';
import { Freeitem } from '../freeitem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.scss']
})
export class AddtocartComponent implements OnInit {
  alldata:Recipedata[];
  freeitems:Freeitem[];
  constructor(private cart:CartService, private router:Router) { }
  selecteditem;
  senddata(item){
this.selecteditem = item;
  }
  onclear(){
    this.selecteditem =null;
  }
  pay(){
    alert("welcome to ABs");
    this.router.navigate(['login'])
  }
  ngOnInit() {
    this.alldata = this.cart.getRecipedata();
    this.freeitems = this.cart.getFreeitem();
    console.log(this.freeitems);
  }

}
