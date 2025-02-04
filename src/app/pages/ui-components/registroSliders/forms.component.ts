import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableDataSource } from '@angular/material/table';
import { CommonModule } from '@angular/common';

interface Slider {
  value: string;
  viewValue: string;
}

interface Secuencia {
  value: string;
}

interface Product {
  imagePath: string;
  uname: string;
  budget: number;
  priority: string;
}

@Component({
  selector: 'app-forms2',
  standalone: true,
  imports: [
    CommonModule, // Asegura compatibilidad con ngClass
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatProgressBarModule,
  ],
  templateUrl: './forms.component.html',
})
export class AppForms2Component {
  modeloSlider: string = '';
  cantidad: number = 0;  // <-- Se agrega esta variable para evitar el error
  selectedState: string = '';

  slider = [
    { value: 'modelo1', viewValue: 'Modelo 1' },
    { value: 'modelo2', viewValue: 'Modelo 2' },
    { value: 'modelo3', viewValue: 'Modelo 3' }
  ];

  state = [
    { value: 'secuencia1' },
    { value: 'secuencia2' },
    { value: 'secuencia3' }
  ];

  // **Corrección de la tabla**
  displayedColumns: string[] = ['assigned', 'name', 'priority', 'budget'];
  dataSource = new MatTableDataSource<Product>([
    {
      imagePath: 'https://via.placeholder.com/60',
      uname: 'Producto 1',
      budget: 200,
      priority: 'confirmed',
    },
    {
      imagePath: 'https://via.placeholder.com/60',
      uname: 'Producto 2',
      budget: 80,
      priority: 'cancelled',
    },
    {
      imagePath: 'https://via.placeholder.com/60',
      uname: 'Producto 3',
      budget: 150,
      priority: 'rejected',
    },
  ]);
}
