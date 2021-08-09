import { Component, OnInit } from '@angular/core';
import { console } from './console';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {
  private listaConsolas=new Array<console>();

  constructor() {
    this.listaConsolas=[
      new console('234553','Nintendo','Switch Lite',5,'$130.000'),
      new console('123127','Nintendo','Switch',23, '$230.000'),
      new console('344237','Sony','Play Station 5',15, '$460.000'),
      new console('567537','Sony','Play Station 4',0, '$260.000')
    ];
  }

  public getListaConsolas(){
    return this.listaConsolas;
  }

  ngOnInit(): void {
  }

}
