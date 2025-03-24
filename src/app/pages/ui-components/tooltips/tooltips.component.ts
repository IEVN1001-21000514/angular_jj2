import { Component, OnInit } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TooltipPosition, MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {CdkScrollable} from '@angular/cdk/scrolling';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { MatTooltip } from '@angular/material/tooltip';
import { MatIcon } from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { PedidoService } from 'src/app/services/pedidos.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-tooltips',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    CdkScrollable, 
    MatButtonModule,
    MatTooltipModule, MatCardModule, MatInputModule, MatCheckboxModule, CommonModule, MatOptionModule
  ],
  templateUrl: './tooltips.component.html',
})

export class AppTooltipsComponent implements OnInit {

  pedidos: any[] = [];
  uniquePedidos: any[] = [];

  constructor(private pedidoService: PedidoService, private router: Router) {}

  ngOnInit(): void {
    this.pedidoService.obtener_pedido().subscribe((data) => {
      console.log('Pedidos recibidos desde Flask:', data); 
      this.pedidos = data;
      this.filterUniquePedidos();
    });
  }

  filterUniquePedidos(): void {
    const groupedPedidos: { [key: string]: any } = {};
    this.pedidos.forEach((pedido) => {
      if (!groupedPedidos[pedido.numero_pedido]) {
        groupedPedidos[pedido.numero_pedido] = {
          numero_pedido: pedido.numero_pedido,
          fechas: [pedido.fecha_registro],
        };
      } else {
        groupedPedidos[pedido.numero_pedido].fechas.push(pedido.fecha_registro);
      }
    });
    this.uniquePedidos = Object.values(groupedPedidos);
  }

  // Método que redirige a la página de detalles del pedido
  verDetalles(numero_pedido: string): void {
    this.router.navigate([`/ui-components/pedido-detalles/${numero_pedido}`]);
  }
}