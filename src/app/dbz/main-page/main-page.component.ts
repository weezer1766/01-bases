import { Component, OnInit } from '@angular/core';
import { Personaje } from '../models/personaje';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  /*
  public personaje: Personaje = {
    nombre: 'Trunks',
    poder: 14000
  };
  */

  //public personaje: Personaje = new Personaje;
  public personaje: Personaje = {
    nombre: '',
    poder: 0
  };

  //private listPersonaje: Personaje[] = [];

  //CON @OUTPUT, EVENTEMITTER Y SERVICIOS
  /*
  public get listPersonaje(): Personaje[] {
    return this.dbzService.listPersonaje;
  }
  public set listPersonaje(value: Personaje[]) {
    this.dbzService.listPersonaje = value;
  }
  */

  constructor(
    //public dbzService: DbzService
  ) { }

  ngOnInit(): void {
  }

  /*
  public cambiarNombre(event: any){
    //console.log(event);
    console.log(event.target.value);
    personaje.nombre = event.target.value;
  }
  */

  //PRIMERA FORMA DE QUE UN BUTTON SUBMIT RECARGE TODA LA PAGINA
  /*
  public agregarPersonaje(event: any): void{
    event.preventDefault();
    console.log("agregarPersonaje => INICIO!!!");
    console.log(event);
  }
  */

  //SEGUNDA FORMA DE QUE UN BUTTON SUBMIT RECARGE TODA LA PAGINA EN EL MODULE SE TIENE QUE IMPORTAR EL FORMMODULE
  /*
  imports: [
    CommonModule,
    FormsModule --> IMPORTAR!!!!
  ]
  */
  /*
  public agregarPersonaje(): void{

    if(personaje.nombre?.trim().length === 0 || personaje.nombre == null || personaje.nombre == undefined){
      return;
    }

    if(personaje.poder === 0 || personaje.poder == null || personaje.poder == undefined){
      return;
    }

    personaje.nombre = personaje.nombre.trim().toUpperCase();

    console.log("agregarPersonaje => INICIO!!!");
    console.log(personaje);

    //VERIFICAMOS SI EL PERSONAJE EXISTE SOLO ACTUALIZAMOS EL PODER DEL MISMO,
    //SINO LO INSERTAMOS EN EL ARRAY
    let indiceEncontrado = this.existePersonaje(personaje);

    if(indiceEncontrado != -1){
      this.listPersonaje = this.listPersonaje.map(
        (objPersonaje: Personaje, i: number) => {
          if(i === indiceEncontrado){
            objPersonaje.nombre = personaje.nombre;
            objPersonaje.poder = personaje.poder
          }
          return objPersonaje;
        }
      );
    } else {
      this.listPersonaje.push(personaje);
    }

    personaje = {
      nombre: '',
      poder: 0
    };
  }

  private existePersonaje(personaje: Personaje): number{
    let indiceEncontrado = -1;

    this.listPersonaje.forEach(
      (objPersonaje: Personaje, i: number) => {
        if(personaje.nombre.toUpperCase() === objPersonaje.nombre.toUpperCase()){
          indiceEncontrado = i;
        }
    });

    return indiceEncontrado;
  }
  */

  //CON @OUTPUT Y EVENTEMITTER
  /*
  public agregarPersonaje(personaje: Personaje): void{

    if(personaje.nombre?.trim().length === 0 || personaje.nombre == null || personaje.nombre == undefined){
      return;
    }

    if(personaje.poder === 0 || personaje.poder == null || personaje.poder == undefined){
      return;
    }

    personaje.nombre = personaje.nombre.trim().toUpperCase();

    console.log("agregarPersonaje(personaje: Personaje) => INICIO!!!");
    console.log(personaje);

    //VERIFICAMOS SI EL PERSONAJE EXISTE SOLO ACTUALIZAMOS EL PODER DEL MISMO,
    //SINO LO INSERTAMOS EN EL ARRAY
    let indiceEncontrado = this.existePersonaje(personaje);

    if(indiceEncontrado != -1){
      this.listPersonaje = this.listPersonaje.map(
        (objPersonaje: Personaje, i: number) => {
          if(i === indiceEncontrado){
            objPersonaje.nombre = personaje.nombre;
            objPersonaje.poder = personaje.poder
          }
          return objPersonaje;
        }
      );
    } else {
      this.listPersonaje.push(personaje);
    }

  }

  private existePersonaje(personaje: Personaje): number{
    let indiceEncontrado = -1;

    this.listPersonaje.forEach(
      (objPersonaje: Personaje, i: number) => {
        if(personaje.nombre.toUpperCase() === objPersonaje.nombre.toUpperCase()){
          indiceEncontrado = i;
        }
    });

    return indiceEncontrado;
  }
  */

  //CON @OUTPUT, EVENTEMITTER Y SERVICIOS
  /*
  public agregarPersonaje(personaje: Personaje): void{

    //VERIFICAMOS SI EL PERSONAJE EXISTE SOLO ACTUALIZAMOS EL PODER DEL MISMO,
    //SINO LO INSERTAMOS EN EL ARRAY
    let indiceEncontrado = this.existePersonaje(personaje);

    if(indiceEncontrado != -1){
      this.listPersonaje = this.listPersonaje.map(
        (objPersonaje: Personaje, i: number) => {
          if(i === indiceEncontrado){
            objPersonaje.nombre = personaje.nombre;
            objPersonaje.poder = personaje.poder
          }
          return objPersonaje;
        }
      );
    } else {
      this.listPersonaje.push(personaje);
    }

  }

  private existePersonaje(personaje: Personaje): number{
    let indiceEncontrado = -1;

    this.listPersonaje.forEach(
      (objPersonaje: Personaje, i: number) => {
        if(personaje.nombre.toUpperCase() === objPersonaje.nombre.toUpperCase()){
          indiceEncontrado = i;
        }
    });

    return indiceEncontrado;
  }
  */
}
