import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  // el selector es el nombre que nosostros llamamos al modulo completo dentro de app.module
  selector: 'app-dbz',
  templateUrl: './main-page.component.html'          
})

export class MainPageComponent {

  // personajes: Personaje[] = [ ];

  nuevo: Personaje = {
    nombre: 'maestro roshi',
    poder: 1000
  }

  // get personajes(): Personaje[]{
  //   return this.dbzService.personajes;
  // }
  // se realizará una refactorización


  // cambiarNombre(event:any){
  //   console.log('hi');

  // };

  agregarNuevoPersonaje(argumento:Personaje){
    // console.log(argumento);
    // this.personajes.push(argumento);
  }

  // esto se le conoce como inyeccion de las dependencias
  constructor (){  }

}
