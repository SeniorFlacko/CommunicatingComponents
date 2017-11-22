import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parques',
  templateUrl: './parques.component.html',
  styleUrls: ['./parques.component.css']
})
export class ParquesComponent implements OnInit {
  @Input() nombre;
  @Input() metros: number;
  public vegetacion;
  public abierto: boolean;

  @Output() pasameLosDatos = new EventEmitter();

  constructor() {
    this.nombre = 'Parque Mexico';
    this.metros = 800;
    this.vegetacion = 'Arboles';
    this.abierto = false;
  }

  ngOnInit() {
  }

  enviarAlPadre() {
    this.pasameLosDatos.emit({
      'nombre': this.nombre,
      'metros': this.metros,
      'vegetacion': this.vegetacion,
      'abierto': this.abierto
    });
  }
}
