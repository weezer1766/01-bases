import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadoresModule } from './contadores/contadores.module';
import { HeroesModule } from './heroes/heroes.module';

//import { ContadorComponent } from './contadores/contador/contador.component';
//import { HeroeComponent } from './heroes/heroe/heroe.component';
//import { ListadoComponent } from './heroes/listado/listado.component';

//declarations: En esta sección se declaran los módulos
//imports: En esta sección se importan otros módulos
//providers: En esta sección se especifican los servicios especificos de un módulo
//boostrap: Es el componente principal, módulo principal que se lanza al inicio al ejecutar la aplicación
@NgModule({
  declarations: [
    AppComponent,
    //ContadorComponent,
    //HeroeComponent,
    //ListadoComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadoresModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
