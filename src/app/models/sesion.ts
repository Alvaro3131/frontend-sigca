export class Sesion {
  id_sesion?: number;
  no_sesion?: string;
  modulo?:
    | {
        id_modulo: number;
      }
    | any;
  no_recursos?: number;
}
