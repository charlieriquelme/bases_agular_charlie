// creacion de un modulo
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';
import { contadorComponents } from './contador/contador.component'; 


@NgModule({
    declarations: [
        contadorComponents
    ],
    exports: [
        contadorComponents
    ],
    imports: [
        CommonModule
    ]

})

export class ContadorModule{}