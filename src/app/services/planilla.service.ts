import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

interface Sliders {
  id: number;
  value: string;
}

interface Defectos {
  id: number;
  value: string;
}

interface RegistroPlanilla {
  id_registroPlanilla?: number;
  id_slider: number;
  id_defecto: number;
  cantidad: number;
  fecha: string;
}

@Injectable({
  providedIn: 'root',
})

export class PlanillaService {
  private apiUrl = 'https://api-jjdis.onrender.com';

  constructor(private http: HttpClient) {}

 obtenerSliders(): Observable<Sliders[]> {
     return this.http.get<Sliders[]>(`${this.apiUrl}/obtenerSliders`);
   }

  obtenerDefectos(): Observable<Defectos[]> {
    return this.http.get<Defectos[]>(`${this.apiUrl}/obtenerDefectos`);
  }

  obtenerPlanilla(): Observable<RegistroPlanilla[]> {
    return this.http.get<RegistroPlanilla[]>(`${this.apiUrl}/obtenerRegistroPlanilla`);
  }

  guardarRegistroPlanilla(planilla: RegistroPlanilla): Observable<any> {
    console.log('Enviando datos al backend:', planilla);
    return this.http.post(`${this.apiUrl}/guardarRegistroPlanilla`, planilla).pipe(
      catchError((error) => {
        console.error('Error al enviar datos al backend:', error);
        return throwError(() => new Error(`No se pudo guardar el registro: ${error.message}`));
      })
    );
  }
}