import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  public titulo: string;
  public nombreDelParque: string;
  public miParque;
  constructor() {
    this.titulo = 'Esta es la tienda';
  }

  ngOnInit() {
  }


  mostrarMiParque($event) {
    console.log($event);
    this.miParque = $event;
  }
}
