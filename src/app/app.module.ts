import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//inicio servicios
import { CargarScriptsService } from './cargar-scripts.service';
//fin servicios

import { AppComponent } from './app.component';
import { HeaderComponent } from './COMPONENTE/header/header.component';
import { PortadaComponent } from './COMPONENTE/portada/portada.component';
import { BotonesComponent } from './COMPONENTE/botones/botones.component';
import { NavBarComponent } from './COMPONENTE/nav-bar/nav-bar.component';
import { ExperienciaComponent } from './COMPONENTE/experiencia/experiencia.component';
import { EntreSeccionesComponent } from './COMPONENTE/entre-secciones/entre-secciones.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PortadaComponent,
    BotonesComponent,
    NavBarComponent,
    ExperienciaComponent,
    EntreSeccionesComponent,

  ],
  imports: [
    BrowserModule,

  ],
  providers: [
    CargarScriptsService
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
