import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { dbzService } from './services/dbz.service';



@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent
  ],
  exports:[
    MainPageComponent  
  ],
  imports: [
    CommonModule,
    // nos permite crear formularios reactivos :)
    FormsModule
  ],
  // apartado para agregar los servicios que podemos tener en un programa 
  providers: [
    dbzService
  ]

})
export class DbzModule { }
