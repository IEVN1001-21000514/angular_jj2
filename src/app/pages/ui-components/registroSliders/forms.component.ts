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

interface Sliders {
  value: string;
}

interface Secuencia {
  value: number;
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
export class AppForms2Component {
  cantidad: number = 0;
  selectedSlider: string;
  selectedSec: number;
  pedido: any[] = [];
  alertaSecuencia: boolean = false;

  slider: Sliders[] = [
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
    { value: 'Yamaha R3' },
  ];

  sec: Secuencia[] = Array.from({ length: 17 }, (_, i) => ({ value: i + 1 }));

  constructor(private http: HttpClient) {
    this.resetForm();
  }

  agregarPedido(cantidad: number, secuencia: number): void {
    const existeSecuencia = this.pedido.some(p => p.secuencia === secuencia);
    if (existeSecuencia) {
      this.alertaSecuencia = true;
      setTimeout(() => (this.alertaSecuencia = false), 5000);
      alert('La secuencia ya está asignada a otro pedido. Elige otra.');
      return;
    }

    const nuevoPedido = {
      modelo: this.selectedSlider,
      cantidad: cantidad,
      secuencia: secuencia,
    };
    
    this.pedido.push(nuevoPedido);
    this.pedido.sort((a, b) => a.secuencia - b.secuencia);
    console.log(this.pedido);
  }

  guardarPedido(): void {
    const pedidoFinal = {
      pedido: this.pedido,
      fecha: new Date(),
    };

    this.http.post('http://localhost:5000/guardarPedido', pedidoFinal).subscribe(
      (response) => {
        console.log('Pedido guardado correctamente', response);
        this.pedido = [];
      },
      (error) => {
        console.error('Error al guardar el pedido', error);
      }
    );
  }

  onAgregar(cantidad: number): void {
    this.agregarPedido(cantidad, this.selectedSec);
    this.resetForm();
  }

  resetForm(): void {
    this.selectedSlider = this.slider[0].value;
    this.selectedSec = this.sec[0].value;
    this.cantidad = 0;
  }
}
