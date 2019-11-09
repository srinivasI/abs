import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Freeitem } from 'src/app/freeitem';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-cartform',
  templateUrl: './cartform.component.html',
  styleUrls: ['./cartform.component.scss']
})
export class CartformComponent implements OnInit {

  @Input() item: Freeitem;
  @Output() cleared = new EventEmitter();
isAdd = true;
  constructor(private carts: CartService) { }

  ngOnInit() {
  }
  ngOnChanges(changes) {
    if (changes.item.currentValue == null) {
      this.isAdd = true;
      this.item = { itemname: null, quantity: null, price: null }
    } else {
      this.isAdd = false;
    }
  }
  onSubmit(ingredient: Freeitem) {
    const newIngredient = new Freeitem(ingredient.itemname, ingredient.quantity,ingredient.price);
    if (!this.isAdd) {
       this.carts.edititem(this.item, newIngredient);

    } else {
      this.item = newIngredient;
      this.carts.addFreeitem(this.item);
    }
  }
  onDelete() {    
    this.carts.deleteitem(this.item);
    this.onClear();
  }
  onClear() {
    this.cleared.emit(null);
  }


}
