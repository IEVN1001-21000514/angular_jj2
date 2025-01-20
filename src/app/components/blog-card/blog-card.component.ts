import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { TablerIconsModule } from 'angular-tabler-icons';

// card 2
interface cardimgs {
  id: number;
  
  imgSrc: string;
 
  title: string;
  
  
}

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, TablerIconsModule, MatButtonModule],
  templateUrl: './blog-card.component.html',
})
export class AppBlogCardsComponent {
  constructor() {}

  //   card 2
  cardimgs: cardimgs[] = [
    {
      id: 1,
      imgSrc: '/assets/images/products/planilla (1).jpg',
      title: 'Registra aquí los pedidos de sliders para iniciar el proceso de producción',
    },
    {
      id: 2,
      imgSrc: '/assets/images/products/planilla.jpg',
      title:
        'Registra aquí los sliders y sus defectos encontrados en la producción',
    },
    {
      id: 3,
      imgSrc: '/assets/images/products/plan.jpg',
      title: 'Revisa el maestro de producción y actualiza su estatus',
    },
  ];
}