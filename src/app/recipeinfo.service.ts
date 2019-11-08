import { Injectable } from '@angular/core';
import { Recipedata } from './recipedata';
import { Freeitem } from './freeitem';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeinfoService {
    
  recipearr:Recipedata[]=[
    new Recipedata("Chicken Biryani","very tasty spicy nice",100,2,0.2,'https://i0.wp.com/www.bharatzkitchen.com/wp-content/uploads/2018/11/mutton-curry-thumb.jpg?fit=800%2C450',
   [new Freeitem("Thums up", 2, 200),
   new Freeitem('French Fries',1,80),
   new Freeitem('beeda', 3, 400)
  ]
  ),
  new Recipedata("Mutton Biryani","SPicy tasty spicy nice",200,3,0.5,'https://scm-assets.constant.co/scm/unilever/1db348501df1238f872479d225e08c34/317545e8-b52e-4370-a1e3-1ce56a021fe4.jpg',[]),
  new Recipedata("Egg Biryani","very tasty spicy nice",300,5,0.15,'https://www.indianhealthyrecipes.com/wp-content/uploads/2014/09/veg-biryani-fb-500x500.jpg',[
    new Freeitem("Pepsi",1,100)
  ]),
  new Recipedata("Veg Biryani","Nice tasty spicy nice",400,1,0.25,'https://scm-assets.constant.co/scm/unilever/1db348501df1238f872479d225e08c34/317545e8-b52e-4370-a1e3-1ce56a021fe4.jpg'),
  new Recipedata("Chicken Fry","very tasty spicy nice",500,4,0.4,'https://i0.wp.com/www.bharatzkitchen.com/wp-content/uploads/2018/11/mutton-curry-thumb.jpg?fit=800%2C450',
  [
    new Freeitem('Sprite',2,400),
    new Freeitem("veg Starter",3, 300)
  ]),
  new Recipedata("Chicken Tanduri","Good tasty spicy nice",600,6,0.35,'https://www.indianhealthyrecipes.com/wp-content/uploads/2014/09/veg-biryani-fb-500x500.jpg'),
  new Recipedata("Chicken Biryani","very tasty spicy nice",100,2,0.2,'https://i0.wp.com/www.bharatzkitchen.com/wp-content/uploads/2018/11/mutton-curry-thumb.jpg?fit=800%2C450',
   [new Freeitem("Thums up", 2, 200),
   new Freeitem('French Fries',1,80),
   new Freeitem('beeda', 3, 400)
  ]
  ),
  new Recipedata("Mutton Biryani","SPicy tasty spicy nice",200,3,0.5,'https://www.indianhealthyrecipes.com/wp-content/uploads/2014/09/veg-biryani-fb-500x500.jpg',[]),
  new Recipedata("Egg Biryani","very tasty spicy nice",300,5,0.15,'https://i0.wp.com/www.bharatzkitchen.com/wp-content/uploads/2018/11/mutton-curry-thumb.jpg?fit=800%2C450',[
    new Freeitem("Pepsi",1,100)
  ]),
  new Recipedata("Veg Biryani","Nice tasty spicy nice",400,1,0.25,'https://scm-assets.constant.co/scm/unilever/1db348501df1238f872479d225e08c34/317545e8-b52e-4370-a1e3-1ce56a021fe4.jpg'),
  new Recipedata("Chicken Fry","very tasty spicy nice",500,4,0.4,'https://i0.wp.com/www.bharatzkitchen.com/wp-content/uploads/2018/11/mutton-curry-thumb.jpg?fit=800%2C450',
  [
    new Freeitem('Sprite',2,400),
    new Freeitem("veg Starter",3, 300)
  ]),
  new Recipedata("Chicken Tanduri","Good tasty spicy nice",600,6,0.35,'https://scm-assets.constant.co/scm/unilever/1db348501df1238f872479d225e08c34/317545e8-b52e-4370-a1e3-1ce56a021fe4.jpg'),
  new Recipedata("Chicken Biryani","very tasty spicy nice",100,2,0.2,'https://i0.wp.com/www.bharatzkitchen.com/wp-content/uploads/2018/11/mutton-curry-thumb.jpg?fit=800%2C450',
   [new Freeitem("Thums up", 2, 200),
   new Freeitem('French Fries',1,80),
   new Freeitem('beeda', 3, 400)
  ]
  ),
  new Recipedata("Mutton Biryani","SPicy tasty spicy nice",200,3,0.5,'https://scm-assets.constant.co/scm/unilever/1db348501df1238f872479d225e08c34/317545e8-b52e-4370-a1e3-1ce56a021fe4.jpg',[]),
  new Recipedata("Egg Biryani","very tasty spicy nice",300,5,0.15,'https://i0.wp.com/www.bharatzkitchen.com/wp-content/uploads/2018/11/mutton-curry-thumb.jpg?fit=800%2C450',[
    new Freeitem("Pepsi",1,100)
  ]),
  new Recipedata("Veg Biryani","Nice tasty spicy nice",400,1,0.25,'https://scm-assets.constant.co/scm/unilever/1db348501df1238f872479d225e08c34/317545e8-b52e-4370-a1e3-1ce56a021fe4.jpg'),
  new Recipedata("Chicken Fry","very tasty spicy nice",500,4,0.4,'https://i0.wp.com/www.bharatzkitchen.com/wp-content/uploads/2018/11/mutton-curry-thumb.jpg?fit=800%2C450',
  [
    new Freeitem('Sprite',2,400),
    new Freeitem("veg Starter",3, 300)
  ]),
  new Recipedata("Chicken Tanduri","Good tasty spicy nice",600,6,0.35,'https://scm-assets.constant.co/scm/unilever/1db348501df1238f872479d225e08c34/317545e8-b52e-4370-a1e3-1ce56a021fe4.jpg'),
  new Recipedata("Chicken Biryani","very tasty spicy nice",100,2,0.2,'https://i0.wp.com/www.bharatzkitchen.com/wp-content/uploads/2018/11/mutton-curry-thumb.jpg?fit=800%2C450',
   [new Freeitem("Thums up", 2, 200),
   new Freeitem('French Fries',1,80),
   new Freeitem('beeda', 3, 400)
  ]
  ),
  new Recipedata("Mutton Biryani","SPicy tasty spicy nice",200,3,0.5,'https://scm-assets.constant.co/scm/unilever/1db348501df1238f872479d225e08c34/317545e8-b52e-4370-a1e3-1ce56a021fe4.jpg',[]),
  new Recipedata("Egg Biryani","very tasty spicy nice",300,5,0.15,'https://i0.wp.com/www.bharatzkitchen.com/wp-content/uploads/2018/11/mutton-curry-thumb.jpg?fit=800%2C450',[
    new Freeitem("Pepsi",1,100)
  ]),
  new Recipedata("Veg Biryani","Nice tasty spicy nice",400,1,0.25,'https://scm-assets.constant.co/scm/unilever/1db348501df1238f872479d225e08c34/317545e8-b52e-4370-a1e3-1ce56a021fe4.jpg'),
  new Recipedata("Chicken Fry","very tasty spicy nice",500,4,0.4,'https://i0.wp.com/www.bharatzkitchen.com/wp-content/uploads/2018/11/mutton-curry-thumb.jpg?fit=800%2C450',
  [
    new Freeitem('Sprite',2,400),
    new Freeitem("veg Starter",3, 300)
  ]),
  new Recipedata("Chicken Tanduri","Good tasty spicy nice",600,6,0.35,'https://scm-assets.constant.co/scm/unilever/1db348501df1238f872479d225e08c34/317545e8-b52e-4370-a1e3-1ce56a021fe4.jpg'),
  ];
 // constructor(private _http:HttpClient){}

  getRecipes(){
 // this._http.get(url,param,heder)
// .subscribe(res=>this.recipearr=res, error=>'error')
    return this.recipearr;
  }
}
