import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatOptionModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { PedidoService } from 'src/app/services/pedidos.service';

interface Sliders {
  id: number;
  value: string;
}

interface RegistroPedido {
  id_registroPedido?: number;
  id_slider: number;
  cantidad: number;
  secuencia: number;
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
  slider: Sliders[] = [];
  alertaSecuencia: boolean = false;
  editIndex: number = -1;
  sec = Array.from({ length: 17 }, (_, i) => ({ value: i + 1 }));

  constructor(private pedidoService: PedidoService) {
    this.resetForm();
    this.obtenerSliders();
    this.obtenerPedidos();
  }

  obtenerSliders(): void {
    this.pedidoService.obtenerSliders().subscribe(data => this.slider = data);
  }

  obtenerPedidos(): void {
    this.pedidoService.obtener_pedido().subscribe(data => {
      this.pedido = data
        .filter(p => p.estado === 'pendiente') // Filtra solo los pedidos pendientes
        .map(p => ({
          id_registroPedido: p.id_registroPedido,
          id_slider: p.id_registroPedido,
          cantidad: 0, // Valor temporal, actualiza con obtener_registros_por_numero_pedido si es necesario
          secuencia: 0  // Igual que cantidad
        }));
    });
  }

  onAgregar(): void {
    if (this.selectedSlider === null) return;

    const nuevoRegistro: RegistroPedido = {
      id_slider: this.selectedSlider,
      cantidad: this.cantidad,
      secuencia: this.selectedSec,
    };

    this.pedidoService.guardarRegistroPedido(nuevoRegistro).subscribe(
      response => {
        console.log('Registro guardado', response);
        this.obtenerPedidos(); // Refresca la tabla
      },
      error => console.error('Error al guardar', error)
    );

    this.resetForm();
  }

  eliminarRegistro(id_registroPedido: number): void {
    this.pedidoService.eliminarRegistroPedido(id_registroPedido).subscribe(() => {
      this.pedido = this.pedido.filter(p => p.id_registroPedido !== id_registroPedido);
    });
  }

  terminarPedido(): void {
    this.pedidoService.terminarPedido().subscribe(
      response => {
        console.log('Pedido finalizado', response);
        this.obtenerPedidos(); // Refresca solo pedidos pendientes
      },
      error => console.error('Error al finalizar el pedido', error)
    );
  }

  getSliderValue(id_slider: number | undefined): string {
    const sliderEncontrado = this.slider.find(s => s.id === id_slider);
    return sliderEncontrado ? sliderEncontrado.value : 'Desconocido';
  }

  resetForm(): void {
    this.selectedSlider = null;
    this.selectedSec = 1;
    this.cantidad = 0;
    this.editIndex = -1;
  }
}
