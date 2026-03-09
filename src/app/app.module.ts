import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { GoodsComponent } from './components/goods/goods.component';
import { ProductService } from './services/product.service';
import { MaxSymbolsPipe } from './pipes/max-symbols.pipe';
import { PhonePipe } from './pipes/phone.pipe';
import { BackgroundDirective } from './directives/background.directive';

@NgModule({
  declarations: [
    AppComponent,
    AdvantagesComponent,
    GoodsComponent,
    MaxSymbolsPipe,
    PhonePipe,
    BackgroundDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
