import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProcessComponent } from './components/admin-process/admin-process.component';
import { CategoryComponent } from './components/category/category.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { ProductComponent } from './components/product/product.component';
import { RecycleCartComponent } from './components/recycle-cart/recycle-cart.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"",pathMatch:"full",component:HomePageComponent},
  {path:"anasayfa",component:HomePageComponent},
  {path:"urunler",component:ProductComponent},
  {path:"donusumkutusu",component:RecycleCartComponent},
  {path:"iletisim",component:ContactComponent},
  {path:"cuzdan",component:WalletComponent},
  {path:"products/category/:categoryId",component:ProductComponent},
  {path:"admin/process",component:AdminProcessComponent,canActivate: [LoginGuard]},
  {path:"login",component:LoginComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
