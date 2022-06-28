import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  public heroesBorrados: string[] = [];
  public heroeBorrado: string = '';

  constructor() {
    console.log("constructor()");
  }

  ngOnInit(): void {
    console.log("ngOnInit()");
  }

  public borrarHeroe(heroeSeleccionado: string): void {
    //PRIMERA FORMA
    //this.heroes = this.heroes.filter(heroe => heroe != heroeSeleccionado);

    //SEGUNDA FORMA
    /*
    this.heroes = this.heroes.filter(heroe => {
        return heroe != heroeSeleccionado;
      }
    );
    */

    //TERCERA FORMA
    /*
    this.heroes = this.heroes.filter(heroe => {
        let heroeAux: string = '';
        if(heroe != heroeSeleccionado){
          heroeAux = heroe;
        }
        return heroeAux;
      }
    );
    */

    //CUARTA FORMA
    this.heroes = this.heroes.filter(heroe => {
        let bOtroHeroe: boolean = false;

        //
        if(heroe != heroeSeleccionado){
          bOtroHeroe = true;
        } else {
          this.heroesBorrados.push(heroe);
        }
        return bOtroHeroe;
      }
    );
  }

  public borrarPrimerHeroeLista(): void{
    //Si this.heroes.shift() devuelve undefined entonces se retorna una cadena vacia,
    //sino se devuelve el nombre del heroe borrado
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
