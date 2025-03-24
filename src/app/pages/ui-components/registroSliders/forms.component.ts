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
import { PedidoService } from 'src/app/services/pedidos.service';


interface Sliders {
  id: number;
  value: string;
}

interface RegistroPedido{
  id_registroPedido?:number;
  id_slider:number;
  cantidad:number;
  secuencia:number;
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
  selectedSlider: number | null = null;
  selectedSec: number = 1;
  pedido: RegistroPedido[] = [];
  alertaSecuencia: boolean = false;
  editIndex: number = -1;
  slider: Sliders[] = [];
  sec: Secuencia[] = Array.from({ length: 17 }, (_, i) => ({ value: i + 1 }));

  constructor(private http: HttpClient) {
    this.resetForm();
    this.obtenerSliders();
    this.obtenerPedidos();
  }

  obtenerSliders(): void {
    this.http.get<Sliders[]>('http://localhost:5000/obtenerSliders')
      .subscribe(data => this.slider = data);
  }

  obtenerPedidos(): void {
    this.http.get<RegistroPedido[]>('http://localhost:5000/obtenerRegistroPedidos')
      .subscribe(data => this.pedido = data);
  }

  onAgregar(): void {
    if (this.selectedSlider === null) return;

    const nuevoRegistro: RegistroPedido = {
      id_slider: this.selectedSlider,
      cantidad: this.cantidad,
      secuencia: this.selectedSec,
    };

    this.http.post('http://localhost:5000/guardarRegistroPedido', nuevoRegistro).subscribe(
      response => {
        console.log('Registro guardado', response);
        this.obtenerPedidos(); 
      },
      error => console.error('Error al guardar', error)
    );

    this.resetForm();
  }

  eliminarRegistro(id_registroPedido: number): void {
    this.http.delete(`http://localhost:5000/eliminarRegistroPedido/${id_registroPedido}`)
      .subscribe(() => {
        console.log(`Registro ${id_registroPedido} eliminado`);
        this.obtenerPedidos();
      });
  }

  terminarPedido(): void {
    this.http.post('http://localhost:5000/crearPedido', {}).subscribe(
      response => {
        console.log('Pedido finalizado', response);
        this.pedido = [];
      },
      error => console.error('Error al finalizar el pedido', error)
    );
  }

  /* agregarPedido(): void {
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
  } */

    getSliderValue(id_slider: number | undefined): string {
      const sliderEncontrado = this.slider.find(s => s.id === (id_slider ?? 0));
      return sliderEncontrado ? sliderEncontrado.value : 'Desconocido';
    }
  

  resetForm(): void {
    this.selectedSlider = null;
    this.selectedSec = 1;
    this.cantidad = 0;
    this.editIndex = -1;
  }
}