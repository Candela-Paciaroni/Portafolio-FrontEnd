import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
@Component({
  selector: 'mi-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {

  constructor(private _CargaScripts:CargarScriptsService)
  {
  _CargaScripts.Carga(["texto"]);
   }

  ngOnInit(): void {
  }

}
