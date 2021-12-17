import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresoService } from './ingreso.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css'],
})
export class IngresoComponent implements OnInit {
  //* ATRIBUTOS
  ingresos: Ingreso[] = [];

  //* CONSTRUCTOR
  constructor(private ingresoService: IngresoService) {}

  //* MÉTODOS
  ngOnInit(): void {
    this.ingresos = this.ingresoService.ingresos;
  }

  eliminarRegistro(ingreso: Ingreso) {
    this.ingresoService.eliminar(ingreso);
  }
}
