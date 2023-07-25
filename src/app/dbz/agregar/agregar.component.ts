import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent  {

  @Input() nuevo:Personaje = {
    nombre:'',
    poder: 0
  }

  constructor (private dbzService: dbzService){  }

  // en la siguiente linea se crea un evento que emite un dato del tipo que uno defina 
  // el output sirve para emitir los eventyos que nosostros definamos
  @Output() onNuevoPersonaje: EventEmitter <Personaje> = new EventEmitter();

  agregar() {
    if(this.nuevo.nombre.trim().length === 0){ return ; }
    console.log(this.nuevo);
    // this.onNuevoPersonaje.emit(this.nuevo);

    // se agrega el servicio para agregar a un personaje nuevo
    this.dbzService.agregarPersonajes(this.nuevo);
    // this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre:'',
      poder:0
    }
  }


}
