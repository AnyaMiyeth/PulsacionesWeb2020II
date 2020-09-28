import { HandleHttpErrorService } from './../@base/handle-http-error.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observer } from 'rxjs';
import { Persona } from '../Pulsacion/models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  baseUrl: string;
  get(): Persona[] {
    return JSON.parse(localStorage.getItem('datos'));
  }

  post(persona: Persona) {
    let personas: Persona[] = [];
    if (this.get() != null) {
      personas = this.get();
    }
    personas.push(persona);
    localStorage.setItem('datos', JSON.stringify(personas));
  }

}
