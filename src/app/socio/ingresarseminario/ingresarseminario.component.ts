import { Component, OnInit } from '@angular/core';
import { Seminario } from 'src/app/models/Seminario';

@Component({
  selector: 'SIGCA-ingresarseminario',
  templateUrl: './ingresarseminario.component.html',
  styleUrls: ['./ingresarseminario.component.css']
})
export class IngresarseminarioComponent implements OnInit {
  semi:Seminario[]=[];
  constructor() { }

  ngOnInit(): void {
    this.semi = [
      {
        id_SEMINARIO:1,
        NO_SEMINARIO:"Facebook",
        URL_SEMINARIO:"waasasasasasas"
        
      },
      {
        id_SEMINARIO:2,
        NO_SEMINARIO:"asasasas",
        URL_SEMINARIO:"paosaoskaodkaodkaodk"
        
      }
    
    ]
  }

}
