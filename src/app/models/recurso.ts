export class Recurso {
  descripcion?: string;
  id: number = 0;
  nombrerecurso?: string;
  orden?: number;
  sesion:
    | {
        id_sesion: number;
      }
    | any;

  tipo:
    | {
        id_tipo: number;
      }
    | any;
}
