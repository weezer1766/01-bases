import { Injectable } from '@angular/core';
import { Personaje } from '../models/personaje';


@Injectable({
  providedIn: 'root'
})
export class DbzService {

  private _listPersonaje: Personaje[] = [
    {
      nombre: 'GOKU',
      poder: 15000
    },
    {
      nombre: 'VEGETA',
      poder: 13000
    }
  ];

  public get listPersonaje(): Personaje[] {
    //Sintaxis Spread: El operador [...Array] permite separar los elementos de forma independiente de un arreglo y crear uno nuevo.
    //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    return [...this._listPersonaje];
  }

  public set listPersonaje(value: Personaje[]) {
    this._listPersonaje = value;
  }

  constructor() {
    console.log("DbzService => Inicializado!!!");
  }

  //CON @OUTPUT, EVENTEMITTER Y SERVICIOS
  public agregarPersonaje(personaje: Personaje): void{

    //VERIFICAMOS SI EL PERSONAJE EXISTE SOLO ACTUALIZAMOS EL PODER DEL MISMO,
    //SINO LO INSERTAMOS EN EL ARRAY
    let indiceEncontrado = this.existePersonaje(personaje);

    if(indiceEncontrado != -1){
      this._listPersonaje = this._listPersonaje.map(
        (objPersonaje: Personaje, i: number) => {
          if(i === indiceEncontrado){
            objPersonaje.nombre = personaje.nombre;
            objPersonaje.poder = personaje.poder
          }
          return objPersonaje;
        }
      );
    } else {
      this._listPersonaje.push(personaje);
    }
  }

  private existePersonaje(personaje: Personaje): number{
    let indiceEncontrado = -1;

    this._listPersonaje.forEach(
      (objPersonaje: Personaje, i: number) => {
        if(personaje.nombre.toUpperCase() === objPersonaje.nombre.toUpperCase()){
          indiceEncontrado = i;
        }
    });

    return indiceEncontrado;
  }
}
