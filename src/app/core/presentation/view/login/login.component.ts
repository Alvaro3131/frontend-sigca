import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rol, Usuario } from 'src/app/equipo-tecnico/reportes/reporte';
import swal from 'sweetalert2';
import { AuthService } from './auth.service';


@Component({
  selector: 'SIGCA-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  a: any = [];
  usuario: Usuario;
  constructor(public authService: AuthService, private router: Router) {
    this.usuario = new Usuario();
  }
  ngOnInit(): void {}

  // ingresarCuenta(){

  //     this.router.navigate(["/home"],{relativeTo:this.route});
  // }

  ingresar() {
    
    this.authService.login(this.usuario).subscribe((response) => {
      console.log(response);
      this.authService.guardarUsuario(response.access_token);
      this.authService.guardarToken(response.access_token);
      let usuario = this.authService.usuario;

      var x = Number(sessionStorage.getItem('idusuario'));
      swal.fire('Login', `Hola ${usuario.username}, has iniciado sesión con exito!`)
      this.authService.getRoles(x).subscribe((data: any[]) => {
        this.a = data;
        sessionStorage.setItem('rol',this.a[0].nombrerol);
        console.log(this.a);
        
        for (let i = 0; i < this.a.length; i++) {
          if (this.a[i].nombrerol == 'Socio') {
            
            this.router.navigate(['/vistaSocio']);
          } else {
            this.router.navigate(['/dashboard/equipoTecnico']);
          }
        }
      });

      
     
    },error=>{
      if(error.status == 400){
        swal.fire('Error Login', 'Usuario o clave Incorrecta', 'error');
      }
  }  );
  }


}
