import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../models/personaje';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  //CON @INPUT
  /*
  @Input('listPersonajesRecibidos')
  public listPersonaje: Personaje[];
  */

  //CON @OUTPUT, EVENTEMITTER Y SERVICIOS
  public get listPersonaje(): Personaje[] {
    return this.dbzService.listPersonaje;
  }

  constructor(
    public dbzService: DbzService
  ) { }

  ngOnInit(): void {
  }

}
