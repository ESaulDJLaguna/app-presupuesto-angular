import { Component } from '@angular/core';
import { Egreso } from './egreso/egreso.model';
import { EgresoService } from './egreso/egreso.service';
import { Ingreso } from './ingreso/ingreso.model';
import { IngresoService } from './ingreso/ingreso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //* ATRIBUTOS
  ingresos: Ingreso[] = [];
  egresos: Egreso[] = [];

  //* CONSTRUCTOR
  constructor(
    private ingresoService: IngresoService,
    private egresoService: EgresoService
  ) {
    this.ingresos = this.ingresoService.ingresos;
    this.egresos = this.egresoService.egresos;
  }

  //* MÉTODOS
  getIngresoTotal(): number {
    let ingresoTotal: number = 0;
    this.ingresos.forEach((ingreso) => {
      ingresoTotal += ingreso.valor;
    });

    return ingresoTotal;
  }

  getEgresoTotal(): number {
    let egresoTotal: number = 0;
    this.egresos.forEach((egreso) => {
      egresoTotal += egreso.valor;
    });

    return egresoTotal;
  }

  getPorcentajeTotal(): number {
    return this.getEgresoTotal() / this.getIngresoTotal();
  }

  getPresupuestoTotal(): number {
    return this.getIngresoTotal() - this.getEgresoTotal();
  }
}
