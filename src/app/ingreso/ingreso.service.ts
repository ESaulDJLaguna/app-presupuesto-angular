import { Ingreso } from './ingreso.model';

export class IngresoService {
  //* ATRIBUTOS
  ingresos: Ingreso[] = [
    new Ingreso('Salario', 4000),
    new Ingreso('Venta coche', 500),
  ];

  //* MÉTODOS
  eliminar(ingreso: Ingreso) {
    const indice: number = this.ingresos.indexOf(ingreso);
    this.ingresos.splice(indice, 1);
  }
}
