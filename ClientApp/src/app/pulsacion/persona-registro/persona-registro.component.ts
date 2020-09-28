import { PersonaService } from './../../services/persona.service';
import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-persona-registro',
  templateUrl: './persona-registro.component.html',
  styleUrls: ['./persona-registro.component.css']
})
export class PersonaRegistroComponent implements OnInit {
  persona: Persona;

  constructor(private personaService:PersonaService) { }

  ngOnInit(): void {
    this.persona= new  Persona();
  }
  add() {
    this.persona.calcularPulsacion()
    this.personaService.post(this.persona)
    alert('Se registro la Persona')
  }

}
