import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { ToastrModule } from 'ngx-toastr';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RecycleCartComponent } from './components/recycle-cart/recycle-cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { AdminProcessComponent } from './components/admin-process/admin-process.component';
import { ProductRemoveComponent } from './components/product-remove/product-remove.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { LoginComponent } from './components/login/login.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { ContactComponent } from './components/contact/contact.component';
import { ConvertCarbonPricePipe } from './pipes/convert-carbon-price.pipe';
import { DenemeComponent } from './components/deneme/deneme.component';
import { AdminRegisterComponent } from './components/admin-register/admin-register.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    HomePageComponent,
    RecycleCartComponent,
    FooterComponent,
    FilterPipePipe,
    ProductAddComponent,
    AdminProcessComponent,
    ProductRemoveComponent,
    ProductUpdateComponent,
    LoginComponent,
    WalletComponent,
    ContactComponent,
    ConvertCarbonPricePipe,
    DenemeComponent,
    AdminRegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
