import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PedidoService } from 'src/app/services/pedidos.service';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { MatCardModule } from '@angular/material/card';
import { MatTable } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from 'src/app/app.component';
import * as XLSX from 'xlsx';
import { saveAs} from 'file-saver';
import { HttpClient } from '@angular/common/http'; // Para leer el archivo Excel
import * as FileSaver from 'file-saver'; // Para descargar el archivo Excel

@Component({
  selector: 'app-pedido-detalles',
  standalone: true,
  imports: [MatTableModule,MatCardModule,MatTable,CommonModule, MatButtonModule],
  templateUrl: './pedido-detalles.component.html',
})


export class PedidoDetallesComponent implements OnInit {
  numero_pedido: string | null = null;
  registros: any[] = [];
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['nombre_slider', 'secuencia', 'cantidad']; // Se usa 'nombre_slider' aquí

  constructor(
    private route: ActivatedRoute,
    private pedidoService: PedidoService,
    private http: HttpClient
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

  async generarExcel(): Promise<void> {
    const url = 'assets/Excel/PlantillaPMP.xlsx'; // Ruta del archivo Excel

    // Fetch the template
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const workbook = XLSX.read(arrayBuffer, { type: 'array' });

    const worksheet = workbook.Sheets[workbook.SheetNames[0]]; // Primera hoja del archivo

    // Insertar datos dinámicos en la hoja de cálculo (ejemplo: iniciar en la fila 5)
    let startRow = 8;
    this.registros.forEach((pedido, index) => {
      worksheet[`B${startRow + index}`] = { v: pedido.nombreSlider };
      worksheet[`I${startRow + index}`] = { v: pedido.secuencia };
      worksheet[`H${startRow + index}`] = { v: pedido.cantidad };
    });

    // Generar el nuevo archivo Excel
    const newExcelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([newExcelBuffer], { type: 'application/octet-stream' });

    // Descargar el archivo modificado
    FileSaver.saveAs(data, `Pedido_${this.numero_pedido}.xlsx`);
  }

  generarPDF(): void {
    const doc = new jsPDF();
  
    // Agregar logotipo (asegúrate de tener el path correcto o usar base64)
    const img = new Image();
    img.src = 'assets/images/logos/jj_sf.png'; // Cambia esto según tu ruta del logo
    doc.addImage(img, 'PNG', 10, 5, 30, 30); // Posición (x, y) y tamaño (ancho, alto)
  
    // Título del documento
    doc.setFontSize(14);
    doc.text(`Detalles del Pedido #${this.numero_pedido}`, 75, 15);
  
    // Crear la tabla con encabezados estilizados
    autoTable(doc, {
      head: [['Nombre del Slider', 'Secuencia', 'Cantidad']],
      body: this.registros.map(row => [row.nombreSlider, row.secuencia, row.cantidad]),
      startY: 50,
      styles: { fontSize: 12 },
      headStyles: { fillColor: [200, 0, 0], textColor: [255, 255, 255], fontStyle: 'bold' }, // Rojo con texto blanco
      margin: { top: 10, left: 10, right: 10 },
    });
  
    // Guardar el archivo
    doc.save(`Pedido_${this.numero_pedido}.pdf`);
  }
}