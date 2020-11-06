import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesingContactComponent } from './desing-contact/desing-contact.component';
import { DesingProductsComponent } from './desing-products/desing-products.component';
import { HomeDesingComponent } from './home-desing/home-desing.component';

const routes: Routes = [
  { path: '',redirectTo: 'home',pathMatch: 'full' },
  {path: 'home', component: HomeDesingComponent},
  {path: 'products', component: DesingProductsComponent},
  {path: 'contact', component: DesingContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
