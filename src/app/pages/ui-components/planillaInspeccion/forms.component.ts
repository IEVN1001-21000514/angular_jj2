import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatOptionModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { PlanillaService } from 'src/app/services/planilla.service';


interface RegistroPlanilla {
  id_registroPlanilla?:number;
  id_slider: number;
  id_defecto: number;
  cantidad: number;
  fecha: string;
}

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatOptionModule,
  ],
  templateUrl: './forms.component.html',
})


export class AppForms3Component {
  cantidad: number = 0;
  selectedSlider: number | null = null;
  selectedDefecto: number | null = null;
  planilla: any[] = [];
  fechaHoraActual:Date = new Date();
  slider: any[] = [];
  defecto: any[] = [];

  constructor(private planillaService: PlanillaService, private http: HttpClient) {
    this.resetForm();
    this.obtenerSliders();
    this.obtenerDefectos();
    setInterval(() => (this.fechaHoraActual = new Date()), 1000)
  }

/* ----------------------------------------------------------------------------------------- */  

  obtenerSliders(): void {
    this.planillaService.obtenerSliders().subscribe(data => this.slider = data);
  }

/* ----------------------------------------------------------------------------------------- */

  obtenerDefectos(): void {
    this.planillaService.obtenerDefectos().subscribe(data => this.defecto = data);
  }
  ngOnInit(): void {
    this.obtenerPlanilla();  // Llama a la función al iniciar el componente
  }

/* ----------------------------------------------------------------------------------------- */


obtenerPlanilla(): void {
  this.planillaService.obtenerPlanilla().subscribe(data => {
    const hoy = new Date().toISOString().split('T')[0]; // Obtiene la fecha actual en formato YYYY-MM-DD
    this.planilla = data
      .filter((item: RegistroPlanilla) => item.fecha === hoy) // Filtra solo los del día actual
      .sort((a: RegistroPlanilla, b: RegistroPlanilla) => b.id_registroPlanilla! - a.id_registroPlanilla!); // Ordena por ID descendente (más reciente primero)
  });
}

  
/* ----------------------------------------------------------------------------------------- */

onAgregarPlanilla(): void {
  if (this.selectedSlider === null || this.selectedDefecto === null) {
    console.error("Error: Debes seleccionar un slider y un defecto antes de guardar.");
    return;
  }

  const nuevoRegistroP: RegistroPlanilla = {
    id_slider: this.selectedSlider,
    id_defecto: this.selectedDefecto,
    cantidad: this.cantidad,
    fecha: this.fechaHoraActual.toISOString().split('T')[0],
  };

  this.planillaService.guardarRegistroPlanilla(nuevoRegistroP).subscribe({
    next: () => {
      this.obtenerPlanilla();
      console.log('Registro guardado correctamente', nuevoRegistroP);
      this.resetForm();
    },
    error: (err) => {
      console.error('Error al guardar el registro:', err.message);
      alert(`Error al guardar el registro: ${err.message}`); // También muestra el error en un alert
    }
  });
}
/* ----------------------------------------------------------------------------------------- */

    getSliderValue(id_slider: number | undefined): string {
      const sliderEncontrado = this.slider.find(s => s.id === (id_slider ?? 0));
      return sliderEncontrado ? sliderEncontrado.value : 'Desconocido';
    }

    getDefectoValue(id_defecto: number | undefined): string {
      const defectoEncontrado = this.defecto.find(s => s.id === (id_defecto ?? 0));
      return defectoEncontrado ? defectoEncontrado.value : 'Desconocido';
    }

/* ----------------------------------------------------------------------------------------- */

  resetForm(): void {
    this.selectedSlider = null;
    this.selectedDefecto = null;
    this.cantidad = 0;
  }
}