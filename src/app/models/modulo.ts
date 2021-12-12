export class Modulo {
  id_modulo?: number;
  no_modulo?: string;
  categoria?:
    | {
        id_categoria: number;
      }
    | any;
  nu_sesiones?: number;

  // constructor(no_modulo: string, fk_categoria: {}) {
  //   this.no_modulo = no_modulo;
  //   this.fk_categoria = fk_categoria;
  // }
}
