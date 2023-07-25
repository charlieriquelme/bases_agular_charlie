import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { contadorComponents } from './contador/contador/contador.component'; 
// import { HeroeComponent } from './heroes/heroe/heroe.component';
// import { ListadoComponent } from './heroes/listado/listado.component';

//creamos un modulo de 0 para dejar dentro de él el listado y trabajo con los heroes 
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';

// nota 1 : para agregar nuevos componentes, debemos agregar sus "rutas" dentro de
//de este archivo, para ser especifico, primero debemos importartlo y luego
//definirlo en @ngmodule en la seccion de las declaraciones

/** el @ngmodule es un decorador el cual vamos a ocupar para los modulos*/
/** nota 2: para importar de manera rápida solo un modulo, primero
 * lo declaramos en el decorador @ngmodule y luego pulsamos ctr + click izq
 */

@NgModule({
  declarations: [
    AppComponent
    // ,
    // contadorComponents,
    // HeroeComponent,
    // ListadoComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
