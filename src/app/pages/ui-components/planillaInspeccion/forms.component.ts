import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

interface Defectos {
  value: string;
}

interface Sliders {
  value: string;
}

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
  ],
  templateUrl: './forms.component.html',
})

export class AppForms3Component {

  fechaHoraActual:string='';

  constructor(){
    this.actualizarFechaHora();
  };

  actualizarFechaHora(){
    setInterval(() => {
      const ahora = new Date();
      this.fechaHoraActual = ahora.toLocaleString();
    },1000);
  }
  
  defecto: Defectos[] = [
    { value: '' },
    { value: 'Golpes de tubo' },
    { value: 'Mal dimensionado de tubo' },
    { value: 'Exceso de soldadura' },
    { value: 'Rebaba de soldadura' },
    { value: 'Poro abierto de soldadura' },
    { value: 'Falta de soldadura' },
    { value: 'Platina doblada' },
    { value: 'Escurrimiento de agua' },
    { value: 'Rayada de pintura' },
    { value: 'Falta de pintura' },
    { value: 'Error en empaque' },
    { value: 'Otro' }
];

  slider:Sliders[] = [
    { value: '' },
    { value: 'Bajaj Dominar' },
    { value: 'Bajaj Pulsar 200 NS' },
    { value: 'Bajaj Pulsar N 250' },
    { value: 'Honda CB 1' },
    { value: 'Honda CB 190' },
    { value: 'Honda XRE - 300' },
    { value: 'Honda XR - 190' },
    { value: 'Honda XR - 190 Jaula' },
    { value: 'Italika 150 Z' },
    { value: 'Italika 200 Z' },
    { value: 'Italika 250 Z' },
    { value: 'Italika 250 Z - 2020' },
    { value: 'Italika DM 200' },
    { value: 'Italika FT 150 TS' },
    { value: 'Italika RT 200' },
    { value: 'Italika Vort - X' },
    { value: 'Italika Vort - X 300' },
    { value: 'Susuki Gixxer SF' },
    { value: 'Susuki Gixxer Street Sport' },
    { value: 'Universal' },
    { value: 'Vento Nitrox' },
    { value: 'Vento Tornado' },
    { value: 'Yamaha FZ 2.0' },
    { value: 'Yamaha R3' }
];

  selectedSlider= this.slider[0].value;

  selectedDefecto= this.defecto[0].value;

  

}
