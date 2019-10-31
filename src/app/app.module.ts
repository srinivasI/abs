import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { RecipeComponent } from './recipe.component';
import { RecipelistComponent } from './recipelist/recipelist.component';
import { RecipelistitemComponent } from './recipelist/recipelistitem/recipelistitem.component';
import { RecipedetailComponent } from './recipedetail/recipedetail.component';
import { FooterComponent } from './footer/footer.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { CartformComponent } from './addtocart/cartform/cartform.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    RecipelistComponent,
    RecipelistitemComponent,
    RecipedetailComponent,
    FooterComponent,
    AddtocartComponent,
    CartformComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
