import { Component } from '@angular/core';
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
    MatTooltipModule, MatCardModule, MatInputModule, MatCheckboxModule,
  ],
  templateUrl: './tooltips.component.html',
})
export class AppTooltipsComponent {
  
  pedidos = [
    { cliente: "Juan Pérez", tamano: "Grande", ingredientes: "Pepperoni, Queso", cantidad: 2, subtotal: "$250" },
    { cliente: "María López", tamano: "Mediana", ingredientes: "Jamón, Champiñones", cantidad: 1, subtotal: "$180" },
    { cliente: "Carlos Ruiz", tamano: "Chica", ingredientes: "Hawaiana", cantidad: 3, subtotal: "$300" }
  ];

  generarPDF() {
    const doc = new jsPDF();

    // Título del documento
    doc.setFontSize(18);
    doc.text("Resumen del Pedido", 70, 15);

    // Agregar tabla con los datos
    autoTable(doc, {
      head: [["Cliente", "Tamaño", "Ingredientes", "Cantidad", "Subtotal"]],
      body: this.pedidos.map(pedido => [pedido.cliente, pedido.tamano, pedido.ingredientes, pedido.cantidad, pedido.subtotal]),
      startY: 30
    });

    // Guardar y descargar el PDF
    doc.save("pedido.pdf");
  }
}
