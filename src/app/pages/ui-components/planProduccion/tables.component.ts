import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from 'src/app/material.module';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { PedidoService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [
    MatTableModule,
    CommonModule,
    MatCardModule,
    MaterialModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    ReactiveFormsModule,
  ],
  templateUrl: './tables.component.html',
})
export class AppTables2Component implements OnInit {
  pedidos: any[] = [];
  uniquePedidos: any[] = [];
  pedidoSeleccionado = new FormControl('');
  registrosPedido: any[] = [];
  estatus: { [key: string]: string } = {};  // Para guardar el estatus por secuencia
  estatusList: string[] = ['Pendiente', 'Corte', 'Doblado', 'Soldadura', 'Lavado', 'Pintura', 'Empaque' ];  // Lista de estatus posibles
  displayedColumns: string[] = ['Secuencia', 'Modelo', 'Cantidad', 'Estatus']; // Columnas a mostrar

  constructor(private pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.pedidoService.obtener_pedido().subscribe((data) => {
      this.pedidos = data;
      this.groupPedidosByNumber();  // Agrupar los pedidos por número
      this.cargarEstatus(); // Cargar los estatus guardados
    });
  }

  // Agrupar los pedidos por numero_pedido
  groupPedidosByNumber(): void {
    const groupedPedidos = this.pedidos.reduce((acc: any, pedido: any) => {
      if (!acc[pedido.numero_pedido]) {
        acc[pedido.numero_pedido] = {
          numero_pedido: pedido.numero_pedido,
          registros: [],
        };
      }
      acc[pedido.numero_pedido].registros.push(pedido);
      return acc;
    }, {});

    this.uniquePedidos = Object.values(groupedPedidos); // Establecer los pedidos agrupados
  }

  cargarPedido(): void {
    const numero_pedido = this.pedidoSeleccionado.value;
    if (numero_pedido) {
      this.pedidoService.obtener_registros_por_numero_pedido(numero_pedido).subscribe((data) => {
        this.registrosPedido = data;
      });
    }
  }

  // Guardar estatus en el localStorage
  guardarEstatus(element: any): void {
    const estatusSeleccionado = this.estatus[element.secuencia];
    this.estatus[element.secuencia] = estatusSeleccionado;  // Guardamos el estatus en el objeto
    localStorage.setItem('estatus', JSON.stringify(this.estatus));  // Guardamos todo el objeto de estatus en localStorage
  }

  // Cargar los estatus desde el localStorage
  cargarEstatus(): void {
    const storedEstatus = localStorage.getItem('estatus');
    if (storedEstatus) {
      this.estatus = JSON.parse(storedEstatus);  // Cargamos los estatus guardados
    }
  }
}
