import { Component,  OnInit  } from '@angular/core';
import { DatosPortafolioService } from 'src/app/SERVICIOS/datos-portafolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  constructor(private datosPortafolio:DatosPortafolioService){}

  ngOnInit():void {
    this.datosPortafolio.obtenerDatos();
  }
}
