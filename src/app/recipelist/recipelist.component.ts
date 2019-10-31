import { Component, OnInit } from '@angular/core';
import { Recipedata } from '../recipedata';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.scss']
})
export class RecipelistComponent implements OnInit {
recipes:Recipedata[]=
[
  new Recipedata("Chicken Biryani","very tasty spicy nice",200,2,'https://i0.wp.com/www.bharatzkitchen.com/wp-content/uploads/2018/11/mutton-curry-thumb.jpg?fit=800%2C450'),
  new Recipedata("Chicken Biryani","very tasty spicy nice",200,2,'https://i0.wp.com/www.bharatzkitchen.com/wp-content/uploads/2018/11/mutton-curry-thumb.jpg?fit=800%2C450'),
  new Recipedata("Chicken Biryani","very tasty spicy nice",200,2,'https://i0.wp.com/www.bharatzkitchen.com/wp-content/uploads/2018/11/mutton-curry-thumb.jpg?fit=800%2C450'),
  new Recipedata("Chicken Biryani","very tasty spicy nice",200,2,'https://i0.wp.com/www.bharatzkitchen.com/wp-content/uploads/2018/11/mutton-curry-thumb.jpg?fit=800%2C450'),
  new Recipedata("Chicken Biryani","very tasty spicy nice",200,2,'https://i0.wp.com/www.bharatzkitchen.com/wp-content/uploads/2018/11/mutton-curry-thumb.jpg?fit=800%2C450'),
  new Recipedata("Chicken Biryani","very tasty spicy nice",200,2,'https://i0.wp.com/www.bharatzkitchen.com/wp-content/uploads/2018/11/mutton-curry-thumb.jpg?fit=800%2C450'),
]
  constructor() { }

  ngOnInit() {
  }

}
