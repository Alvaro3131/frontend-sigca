import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/presentation/view/login/auth.service';

@Component({
  selector: 'SIGCA-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.css'],
})
export class NavTopComponent implements OnInit {
  @Output() statusSidebar: EventEmitter<boolean> = new EventEmitter();
  estadoActual = true;
  nombre = sessionStorage.getItem('nombreusuario');
  rol = sessionStorage.getItem('rol');
  constructor(private as: AuthService, private router: Router) {}

  ngOnInit(): void {}

  toggleSidebar() {
    if (this.estadoActual == false) {
      this.estadoActual = true;
      this.statusSidebar.emit(this.estadoActual);
    } else {
      this.estadoActual = false;
      this.statusSidebar.emit(this.estadoActual);
    }
  }

  salir() {
    this.as.logout();
    this.router.navigate(['/']);
  }

  recargarPagina() {
    window.location.reload();
  }
}
