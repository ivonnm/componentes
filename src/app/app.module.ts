import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { descripccioncss } from './descripccioncss/descripccioncss.component';
import { descripccionhtml } from './descripccionhtml/descripccionhtml.component';
import { descripccionjs } from './descripccionjs/descripccionjs.component';
import { descripccionts } from './descripccionts/descripccionts.component';


@NgModule({
  declarations: [
    AppComponent,
    descripccioncss,
    descripccionjs,
    descripccionts,
    descripccionhtml

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
