import { Component,  OnInit  } from '@angular/core';
import { DatosPortafolioService } from 'src/app/SERVICIOS/datos-portafolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  miPortafolio:any;

  constructor(private datosPortafolio:DatosPortafolioService){}

  ngOnInit():void {
    this.datosPortafolio.obtenerDatos().subscribe(data=>{
      console.log(data);
      this.miPortafolio=data;
    });
  }
}
