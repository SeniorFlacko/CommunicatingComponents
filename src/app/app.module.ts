import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TiendaComponent } from './tienda/tienda.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParquesComponent } from './parques/parques.component';
import { NgModel, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    PageNotFoundComponent,
    ParquesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
