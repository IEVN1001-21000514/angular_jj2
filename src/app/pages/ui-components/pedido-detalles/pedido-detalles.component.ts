import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PedidoService } from 'src/app/services/pedidos.service';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-pedido-detalles',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './pedido-detalles.component.html',
})


export class PedidoDetallesComponent implements OnInit {
  numero_pedido: string | null = null;
  registros: any[] = [];
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['nombre_slider', 'secuencia', 'cantidad']; // Se usa 'nombre_slider' aquí

  constructor(
    private route: ActivatedRoute,
    private pedidoService: PedidoService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.numero_pedido = params.get('numero_pedido');
      console.log('Número de pedido recibido:', this.numero_pedido);
      
      if (this.numero_pedido) {
        this.pedidoService.obtener_registros_por_numero_pedido(this.numero_pedido).subscribe((data) => {
          this.registros = data;  
          this.dataSource.data = data;
          console.log('Registros obtenidos:', this.registros);
        });
      }
    });
  }
}