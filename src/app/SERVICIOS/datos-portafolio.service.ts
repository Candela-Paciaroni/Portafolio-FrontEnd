import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosPortafolioService {

  constructor() { }

  obtenerDatos(){
    console.log('El servicio del portafolio está corriendo');
  }
}
