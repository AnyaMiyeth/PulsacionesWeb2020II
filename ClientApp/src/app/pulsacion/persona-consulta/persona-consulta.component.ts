import { PersonaService } from './../../services/persona.service';
import { Component, Injectable, OnInit } from '@angular/core';
import { Persona } from '../models/persona';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-persona-consulta',
  templateUrl: './persona-consulta.component.html',
  styleUrls: ['./persona-consulta.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class PersonaConsultaComponent implements OnInit {
  personas: Persona[];
  searchText:string;
  constructor(private personaService:PersonaService) { }

  ngOnInit(): void {
    this.personas=this.personaService.get()

  }
  

}
