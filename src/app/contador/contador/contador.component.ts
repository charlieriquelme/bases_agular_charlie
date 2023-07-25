import { Component } from '@angular/core';

@Component ({
    selector: 'app-contador',
    template:`
    <!--  nota 1.- para llamar una caracteristica de 
        de la clase AppComponent debemos ocupar {{ 'variable' }} 
        y en ella dejamos el nombre de la caracteristica
    -->

    <!--  dentro de las siguiente lineas vamos a crear un contador como 
    ejemplo inicial del curso de angular -->

    <!-- la variable undefinced no aparece en la página web pero si lo podmeos ocupar 
    en el código ya que pertenece a javascript -->

    <!-- para definir los eventos dentro de unm boton u otra cosa, primero lo 
    debemos definir dentro de un parentesis y dentro de ella la accion a programar, 
    por último podemos inyectar codigo de javascript dentro de las comillas doble 
    que nos crea el envento.

    -->
    <!-- se aconseja que no cargemos el template con mucha lógica -->

    <!-- para llamar una función desde app.componet.ts solo es necesario escribir
    el nombre de la función dentro de las comillas y listo -->

        <h1> {{ titulo  }} </h1>

        <h3> La base es: <strong> {{base}} </strong> </h3>

        <button (click)="acumular(base);"> +{{base}} </button>

        <span> {{ numero }} </span>

        <button (click)="acumular(-(base));"> - {{base}} </button> 
    `
})

export class contadorComponents  {
     // usualmente se escribe el nivel de acceso para cada una de las características
    // public titulo: string = 'Contador App';
    
    // una buena practica para trabajar en angular 
    // debemos definir que propiedad pertenece a la variable

    // metodos de practica para insertarlos en html
    // sumar(){
    //   this.numero += 1;
    // }

    // restar(){
    //   this.numero -= 1;
    // } 

    titulo  : string = 'Contador App';

    numero  : number = 10;

    base    : number = 5;

    

    acumular( valor: number){
    this.numero += valor;
    }

}