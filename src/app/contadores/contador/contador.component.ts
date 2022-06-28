import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  //templateUrl: './contador.component.html',
  template: `
    <h1>TU MADRE!!!</h1>
    <label for="base">Ingrese base:</label><br>
    <!--<input type="number" min="0" name="base" [value]="base" (change)="cambiarValorBase($event)"><br>-->
    <input type="number" min="0" [value]="base" (input)="base=getValue($event)">
    <h3>La base es: <strong>{{base}}</strong></h3><br>

    <!--<button (click)="restarContador()" [disabled]="this.numero==0">-1</button>-->
    <!--<button (click)="numero = numero - 1;" [disabled]="this.numero==0">-1</button>-->
    <button (click)="acumular('RESTAR', base)" [disabled]="this.numero-this.base<0">-{{this.base}}</button>
    <span>{{numero}}</span>
    <!--<button (click)="sumarContador()" >+1</button>-->
    <!--<button (click)="numero = numero + 1; " >+1</button>-->
    <button (click)="acumular('SUMAR', base)" >+{{this.base}}</button>
  `,
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  public title = 'bases';
  public numero: number = 10;

  public base: number = 5;

  constructor() { }

  ngOnInit(): void {
  }

  public sumarContador(): void{
    ++this.numero;
  }

  public restarContador(): void{
    --this.numero;
  }

  public acumular(flagOperacion: string, valor: number): void {
    if(flagOperacion == 'SUMAR'){
      this.numero += valor;
    } else {
      this.numero -= valor;
    }
  }

  public cambiarValorBase(event: Event){
    this.base = +(event.target as HTMLInputElement).value;
  }

  public getValue(event: Event): number {
    return +(event.target as HTMLInputElement).value;
  }

}
