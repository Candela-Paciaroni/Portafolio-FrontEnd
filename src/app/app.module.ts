import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//inicio servicios
import { CargarScriptsService } from './cargar-scripts.service';
//fin servicios
import { AppRoutingModuleTsModule } from './app-routing.module/app-routing.module.ts.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './COMPONENTE/header/header.component';
import { PortadaComponent } from './COMPONENTE/portada/portada.component';
import { BotonesComponent } from './COMPONENTE/botones/botones.component';
import { NavBarComponent } from './COMPONENTE/nav-bar/nav-bar.component';
import { ExperienciaComponent } from './COMPONENTE/experiencia/experiencia.component';
import { EntreSeccionesComponent } from './COMPONENTE/entre-secciones/entre-secciones.component';
import { EducacionComponent } from './COMPONENTE/educacion/educacion.component';
import { EntreSecEdComponent } from './COMPONENTE/entre-sec-ed/entre-sec-ed.component';
import { EntreSecSkillsComponent } from './COMPONENTE/entre-sec-skills/entre-sec-skills.component';
import { SkillsComponent } from './COMPONENTE/skills/skills.component';
import { EntreSecProyComponent } from './COMPONENTE/entre-sec-proy/entre-sec-proy.component';
import { ProyectoComponent } from './COMPONENTE/proyecto/proyecto.component';
import{ DatosPortafolioService} from './SERVICIOS/datos-portafolio.service';
import { SessionComponent } from './COMPONENTE/session/session.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { PersonaService } from './SERVICIOS/persona.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PortadaComponent,
    BotonesComponent,
    NavBarComponent,
    ExperienciaComponent,
    EntreSeccionesComponent,
    EducacionComponent,
    EntreSecEdComponent,
    EntreSecSkillsComponent,
    SkillsComponent,
    EntreSecProyComponent,
    ProyectoComponent,
    SessionComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModuleTsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    PersonaService
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
