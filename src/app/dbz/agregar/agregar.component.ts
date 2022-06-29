import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../models/personaje';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  @Input('personajeRecibido')
  public personaje: Personaje;

  /*
  @Input('listPersonajeRecibido')
  public listPersonaje : Personaje[];
  */

  //CON @OUTPUT Y EVENTEMITTER
  /*
  @Output()
  public nuevoPersonajeEventEmitter: EventEmitter<Personaje> = new EventEmitter<Personaje>();
  */

  constructor(
    public dbzService: DbzService
  ) { }

  ngOnInit(): void {
  }

  public cambiarNombre(event: any){
    //console.log(event);
    console.log(event.target.value);
    this.personaje.nombre = event.target.value;
  }

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

    if(this.personaje.nombre?.trim().length === 0 || this.personaje.nombre == null || this.personaje.nombre == undefined){
      return;
    }

    if(this.personaje.poder === 0 || this.personaje.poder == null || this.personaje.poder == undefined){
      return;
    }

    this.personaje.nombre = this.personaje.nombre.trim().toUpperCase();

    console.log("agregarPersonaje => INICIO!!!");
    console.log(this.personaje);

    //VERIFICAMOS SI EL PERSONAJE EXISTE SOLO ACTUALIZAMOS EL PODER DEL MISMO,
    //SINO LO INSERTAMOS EN EL ARRAY
    let indiceEncontrado = this.existePersonaje(this.personaje);

    if(indiceEncontrado != -1){
      this.listPersonaje = this.listPersonaje.map(
        (objPersonaje: Personaje, i: number) => {
          if(i === indiceEncontrado){
            objPersonaje.nombre = this.personaje.nombre;
            objPersonaje.poder = this.personaje.poder
          }
          return objPersonaje;
        }
      );
    } else {
      this.listPersonaje.push(this.personaje);
    }

    this.personaje = {
      nombre: '',
      poder: 0
    };

    console.log(this.listPersonaje);
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
  public agregarPersonajeEmitirAlPadre(): void{
    this.nuevoPersonajeEventEmitter.emit(this.personaje);
    this.personaje = {
      nombre: '',
      poder: 0
    }
  }
  */

  //CON @OUTPUT, EVENTEMITTER Y SERVICIOS
  public agregarPersonajeEmitirAlPadre(): void{

    if(this.personaje.nombre?.trim().length === 0 || this.personaje.nombre == null || this.personaje.nombre == undefined){
      return;
    }

    if(this.personaje.poder === 0 || this.personaje.poder == null || this.personaje.poder == undefined){
      return;
    }

    this.personaje.nombre = this.personaje.nombre.trim().toUpperCase();

    console.log("agregarPersonajeEmitirAlPadre(personaje: Personaje) => INICIO!!!");
    console.log(this.personaje);

    //CON @OUTPUT Y EVENTEMITTER
    //this.nuevoPersonajeEventEmitter.emit(this.personaje);
    this.dbzService.agregarPersonaje(this.personaje);

    this.personaje = {
      nombre: '',
      poder: 0
    }
    console.log("agregarPersonajeEmitirAlPadre(personaje: Personaje) => FIN!!!");
  }
}
