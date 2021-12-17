import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoService } from './egreso.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css'],
})
export class EgresoComponent implements OnInit {
  //* ATRIBUTOS
  egresos: Egreso[] = [];
  @Input() ingresoTotal: number;

  //* CONSTRUCTOR
  constructor(private egresoService: EgresoService) {}

  //* MÉTODOS
  ngOnInit(): void {
    this.egresos = this.egresoService.egresos;
  }

  eliminarEgreso(egreso: Egreso) {
    this.egresoService.eliminar(egreso);
  }

  calcularPorcentaje(egreso: Egreso): number {
    return egreso.valor / this.ingresoTotal;
  }
}
