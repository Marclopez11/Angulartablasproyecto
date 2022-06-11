import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Lista1Component } from './listas/lista1/lista1.component';
import { Lista2Component } from './listas/lista2/lista2.component';
import { Lista3Component } from './listas/lista3/lista3.component';
import { Lista4Component } from './listas/lista4/lista4.component';
import { Lista5Component } from './listas/lista5/lista5.component';
import { Lista6Component } from './listas/lista6/lista6.component';
import { Lista7Component } from './listas/lista7/lista7.component';

@NgModule({
  declarations: [
    AppComponent,
    Lista1Component,
    Lista2Component,
    Lista3Component,
    Lista4Component,
    Lista5Component,
    Lista6Component,
    Lista7Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
