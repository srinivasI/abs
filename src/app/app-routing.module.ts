import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Recipedata } from './recipedata';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RecipeComponent } from './recipe.component';


const approutes: Routes = [
  {path:'', component:RecipeComponent},
  {path:'recipe', component:RecipeComponent},
  {path:'cart',component:AddtocartComponent},
  {path:'login', component:LoginComponent},
  {path:'**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
