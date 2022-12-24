import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/SERVICIOS/persona.service';
import { person } from 'src/app/model/person.model';
@Component({
  selector: 'mi-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {

  person: person = new person("","","");
  constructor (public personaService:PersonaService){}



  ngOnInit(): void {
    this.personaService.getPerson().subscribe(data => {this.person=data})
  }

}
