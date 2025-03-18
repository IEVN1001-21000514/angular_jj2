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
    MatIcon,
  ],
  templateUrl: './forms.component.html',
})

export class AppForms2Component {
  cantidad: number = 0;
  selectedSlider: string = '';
  selectedSec: number = 1;
  pedido: any[] = [];
  alertaSecuencia: boolean = false;
  editIndex: number = -1;

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

  onAgregar(): void {
    if (this.editIndex === -1) {
      this.agregarPedido();
    } else {
      this.pedido[this.editIndex] = {
        modelo: this.selectedSlider,
        cantidad: this.cantidad,
        secuencia: this.selectedSec,
      };
      this.editIndex = -1;
    }
    this.resetForm();
  }

  agregarPedido(): void {
    const existeSecuencia = this.pedido.some(p => p.secuencia === this.selectedSec);
    if (existeSecuencia) {
      this.alertaSecuencia = true;
      setTimeout(() => (this.alertaSecuencia = false), 5000);
      return;
    }
    this.pedido.push({ modelo: this.selectedSlider, cantidad: this.cantidad, secuencia: this.selectedSec });
    this.pedido.sort((a, b) => a.secuencia - b.secuencia);
    console.log(this.pedido);
    this.resetForm();
  }

  editarRegistro(index: number): void {
    const item = this.pedido[index];
    this.selectedSlider = item.modelo;
    this.cantidad = item.cantidad;
    this.selectedSec = item.secuencia;
    this.editIndex = index;
  }

  eliminarRegistro(index: number): void {
    this.pedido.splice(index, 1);
    console.log("Lista de pedidos actualizada:", this.pedido);
  }

  guardarPedido(): void {
    const pedidoFinal = { pedido: this.pedido, fecha: new Date() };
    this.http.post('http://localhost:5000/guardarPedido', pedidoFinal).subscribe(
      response => {
        console.log('Pedido guardado correctamente', response);
        this.pedido = [];
      },
      error => console.error('Error al guardar el pedido', error)
    );

  }

  resetForm(): void {
    this.selectedSlider = '';
    this.selectedSec = 1;
    this.cantidad = 0;
    this.editIndex = -1;
  }
}