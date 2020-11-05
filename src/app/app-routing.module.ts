import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesingContactComponent } from './desing-contact/desing-contact.component';
import { DesingProductsComponent } from './desing-products/desing-products.component';

const routes: Routes = [
  { path: '',redirectTo: 'products',pathMatch: 'full' },
  {path: 'products', component: DesingProductsComponent},
  {path: 'contact', component: DesingContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
