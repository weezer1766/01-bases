import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  public nombre: string = 'Ironman';

  public edad: number = 45;

  public get nombreCapitalizado(): string {
    console.log("get nombreCapitalizado() ==> ENTRO!!!");
    return this.nombre.toUpperCase();
  }

  constructor() { }

  ngOnInit(): void {
  }

  public obtenerNombre(): string {
    console.log("obtenerNombre() ==> ENTRO!!!");
    /*
    setTimeout(() => {
      this.edad += 1;
      console.log(this.edad);
    }, 0)
    */
    return `${this.nombre} - ${this.edad}`;
  }

  public cambiarNombre(): void {
    console.log("cambiarNombre() ==> ENTRO!!!");
    this.nombre = (this.nombre == 'Ironman') ? 'Spiderman' : 'Ironman';
  }

  public cambiarEdad(): void {
    console.log("cambiarEdad() ==> ENTRO!!!");
    this.edad = (this.edad == 45) ? 18 : 45;
  }

}
