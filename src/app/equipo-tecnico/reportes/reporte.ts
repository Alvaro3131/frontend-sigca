export class Participacion{
    CORREO? : string;
    Asistencia? : string;
    PERSONA?:string;
    SESION?:string;
}
export class Participantes{
    NOMBRE? : string;
    PATERNO? : string;
    MATERNO?:string;
    TELEFONO?:string;
    DNI?:string;
    CORREO?:string;
}

export class Sede{
    id_sede? : number;
    no_sede? : string;
}
export class Sesion{
    id_SESION? : number;
    no_SESION? : string;
}
export class Distrito{
    id_distrito? : number;
    no_distrito? : string;
    Sede?:[];
}
export class Banco{
    id_bancocomunal? : number;
    no_bancocomunal? : string;
    Asesor?:[];
    Distrito?:[];

    
}
export class Programacion{
    id_programacion?: number;
    es_pogramacion?: string;
    banco?:[];
    modulo?:{
        id_modulo?: number;
        no_modulo?: String;
    }

        
}
export class ProgramaAsesor{
    TOTALRECURSOS?: number;
        IDBANCO?:number;
        PROGRESO?: number;
        VISTOS?: number;
        MODULO?: String;
        PERSONA?: number;
        RECURSOS?: number;
        BANCO?: String;
        IDMODULO?: number;
  
    }

    export class RecursoSocio{
        CORREO?: String;
        RECURSO?: String;
        SOCIO?: String;
        ASISTENCIA?: String;
      
        }

    export class PrivilegiosUsuario{
        NO_PRIVILEGIOS?:string;
        MENU?:string;
        ICONO?:String
    }
    export class Usuario{
        idusuario:number=0;
        username:string="";
        password:string="";
        estado:boolean=true;
        roles:string[]=[];
    }
    export class Rol{
        idrol?:number;
        nombrerol?:string;
        
    }

export class categoria{
    id_categoria?: number; 
    no_categoria?: string;
}
export class Socio{
    ID_PERSONA? : number;
    Persona? : string;
}